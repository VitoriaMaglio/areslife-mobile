import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import BottomNav from "../../components/BottomNav";
import SpaceBackground from "../../components/SpaceBackground";
import TouristCard from "../../components/TouristCard";
import { colors } from "../../constants/colors";
import { Tourist } from "../../types/tourist";

const STORAGE_KEY = "@areslife:tourists";

const initialTourists: Tourist[] = [
  {
    id: "1",
    name: "Laura Mendes",
    age: 28,
    nationality: "Brasil",
    missionType: "Exploradora",
    healthStatus: "Estável",
    ticketStatus: "Confirmado",
    origin: "Terra",
    destination: "Marte",
    status: "Seguro",
    oxygenLevel: 96,
    heartRate: 78,
    missionDays: 12,
  },
  {
    id: "2",
    name: "Rafael Oliveira",
    age: 34,
    nationality: "Brasil",
    missionType: "Científica",
    healthStatus: "Estável",
    ticketStatus: "Confirmado",
    origin: "Terra",
    destination: "Base Ares-01",
    status: "Seguro",
    oxygenLevel: 94,
    heartRate: 82,
    missionDays: 18,
  },
  {
    id: "3",
    name: "Camila Sanders",
    age: 25,
    nationality: "Canadá",
    missionType: "Turismo espacial",
    healthStatus: "Acompanhamento",
    ticketStatus: "Pendente",
    origin: "Terra",
    destination: "Marte",
    status: "Atenção",
    oxygenLevel: 89,
    heartRate: 91,
    missionDays: 7,
  },
  {
    id: "4",
    name: "James Wilson",
    age: 46,
    nationality: "Estados Unidos",
    missionType: "Exploradora",
    healthStatus: "Estável",
    ticketStatus: "Confirmado",
    origin: "Terra",
    destination: "Base Ares-02",
    status: "Seguro",
    oxygenLevel: 92,
    heartRate: 76,
    missionDays: 22,
  },
];

export default function TouristsScreen() {
  const [tourists, setTourists] = useState<Tourist[]>([]);
  const [search, setSearch] = useState("");

  async function loadTourists() {
    try {
      const storedTourists = await AsyncStorage.getItem(STORAGE_KEY);

      if (storedTourists) {
        setTourists(JSON.parse(storedTourists));
        return;
      }

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialTourists));
      setTourists(initialTourists);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os turistas.");
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadTourists();
    }, [])
  );

  function handleCreateTourist() {
    router.push("/turistas/create" as never);
  }

  function handleEditTourist(id?: string) {
    if (!id) return;

    router.push({
      pathname: "/turistas/edit",
      params: { id },
    } as never);
  }

  async function handleDeleteTourist(id?: string) {
    if (!id) return;

    Alert.alert(
      "Excluir turista",
      "Tem certeza que deseja remover este turista?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            const updatedTourists = tourists.filter(
              (tourist) => tourist.id !== id
            );

            setTourists(updatedTourists);
            await AsyncStorage.setItem(
              STORAGE_KEY,
              JSON.stringify(updatedTourists)
            );
          },
        },
      ]
    );
  }

  const filteredTourists = useMemo(() => {
    const searchNormalized = search.trim().toLowerCase();

    if (!searchNormalized) {
      return tourists;
    }

    return tourists.filter((tourist) =>
      tourist.name.toLowerCase().includes(searchNormalized)
    );
  }, [search, tourists]);

  const totalTourists = tourists.length;
  const safeTourists = tourists.filter(
    (tourist) => tourist.status === "Seguro"
  ).length;
  const attentionTourists = tourists.filter(
    (tourist) => tourist.status === "Atenção" || tourist.status === "Crítico"
  ).length;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <SpaceBackground />

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.headerTextBox}>
              <Text style={styles.eyebrow}>CONTROLE DE VISITANTES</Text>
              <Text style={styles.title}>Turistas Espaciais</Text>
              <Text style={styles.subtitle}>
                Acompanhe missões, saúde e segurança dos visitantes em Marte.
              </Text>
            </View>

            <View style={styles.headerIcon}>
              <Ionicons
                name="people-outline"
                size={26}
                color={colors.secondary}
              />
            </View>
          </View>

          <View style={styles.commandPanel}>
            <View style={styles.commandTop}>
              <View>
                <Text style={styles.commandTitle}>Painel de visitantes</Text>
                <Text style={styles.commandSubtitle}>
                  Dados locais prontos para integração com API
                </Text>
              </View>

              <View style={styles.liveBadge}>
                <View style={styles.liveDot} />
                <Text style={styles.liveText}>ATIVO</Text>
              </View>
            </View>

            <View style={styles.summaryGrid}>
              <View style={styles.summaryCard}>
                <Ionicons name="people" size={20} color={colors.secondary} />
                <Text style={styles.summaryValue}>{totalTourists}</Text>
                <Text style={styles.summaryLabel}>Visitantes</Text>
              </View>

              <View style={styles.summaryCard}>
                <Ionicons
                  name="shield-checkmark"
                  size={20}
                  color={colors.success}
                />
                <Text style={[styles.summaryValue, { color: colors.success }]}>
                  {safeTourists}
                </Text>
                <Text style={styles.summaryLabel}>Seguros</Text>
              </View>

              <View style={styles.summaryCard}>
                <Ionicons name="warning" size={20} color={colors.warning} />
                <Text style={[styles.summaryValue, { color: colors.warning }]}>
                  {attentionTourists}
                </Text>
                <Text style={styles.summaryLabel}>Atenção</Text>
              </View>
            </View>
          </View>

          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={18} color={colors.textSecondary} />

              <TextInput
                placeholder="Buscar turista pelo nome..."
                placeholderTextColor={colors.textSecondary}
                style={styles.searchInput}
                value={search}
                onChangeText={setSearch}
              />
            </View>

            <Pressable style={styles.filterBox} onPress={() => setSearch("")}>
              <Ionicons
                name="close-outline"
                size={22}
                color={colors.secondary}
              />
            </Pressable>
          </View>

          <Pressable style={styles.addPanel} onPress={handleCreateTourist}>
            <View style={styles.addSideBar} />

            <View style={styles.addIconBox}>
              <Ionicons name="add" size={27} color={colors.text} />
            </View>

            <View style={styles.addTextBox}>
              <Text style={styles.addTitle}>Cadastrar novo turista</Text>
              <Text style={styles.addText}>
                Registre visitantes, missões, saúde e monitoramento.
              </Text>
            </View>

            <View style={styles.addArrow}>
              <Ionicons name="arrow-forward" size={19} color={colors.secondary} />
            </View>
          </Pressable>

          <View style={styles.listHeader}>
            <View>
              <Text style={styles.sectionTitle}>Lista de turistas</Text>
              <Text style={styles.sectionSubtitle}>
                {filteredTourists.length} resultado(s) encontrado(s)
              </Text>
            </View>

            <Text style={styles.sectionBadge}>CRUD</Text>
          </View>

          <View style={styles.list}>
            {filteredTourists.length > 0 ? (
              filteredTourists.map((tourist) => (
                <TouristCard
                  key={tourist.id}
                  tourist={tourist}
                  onEdit={() => handleEditTourist(tourist.id)}
                  onDelete={() => handleDeleteTourist(tourist.id)}
                />
              ))
            ) : (
              <View style={styles.emptyCard}>
                <Ionicons
                  name="search-outline"
                  size={32}
                  color={colors.textSecondary}
                />
                <Text style={styles.emptyTitle}>Nenhum turista encontrado</Text>
                <Text style={styles.emptyText}>
                  Tente buscar por outro nome ou cadastre um novo turista.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>

        <BottomNav active="turistas" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 120,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    marginBottom: 20,
  },
  headerTextBox: {
    flex: 1,
  },
  eyebrow: {
    color: colors.secondary,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },
  headerIcon: {
    width: 54,
    height: 54,
    borderRadius: 19,
    backgroundColor: colors.card,
    borderWidth: 1.3,
    borderColor: colors.borderBlue,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.secondary,
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 5,
  },

  commandPanel: {
    backgroundColor: colors.card,
    borderRadius: 26,
    borderWidth: 1.4,
    borderColor: colors.borderPurple,
    padding: 18,
    marginBottom: 18,
    shadowColor: colors.primary,
    shadowOpacity: 0.22,
    shadowRadius: 16,
    elevation: 6,
  },
  commandTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
  },
  commandTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
  },
  commandSubtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.cardSoft,
    borderWidth: 1,
    borderColor: colors.success,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: "flex-start",
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.success,
  },
  liveText: {
    color: colors.success,
    fontSize: 11,
    fontWeight: "900",
  },
  summaryGrid: {
    flexDirection: "row",
    gap: 10,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.cardSoft,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    paddingVertical: 13,
    alignItems: "center",
  },
  summaryValue: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: "900",
    marginTop: 5,
  },
  summaryLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "800",
    marginTop: 4,
  },

  searchRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  searchBox: {
    flex: 1,
    height: 52,
    borderRadius: 18,
    backgroundColor: colors.card,
    borderWidth: 1.2,
    borderColor: colors.border,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
  },
  filterBox: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: colors.card,
    borderWidth: 1.2,
    borderColor: colors.borderBlue,
    alignItems: "center",
    justifyContent: "center",
  },

  addPanel: {
    position: "relative",
    backgroundColor: colors.card,
    borderWidth: 1.4,
    borderColor: colors.borderBlue,
    borderRadius: 24,
    paddingVertical: 16,
    paddingLeft: 18,
    paddingRight: 14,
    marginBottom: 22,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    overflow: "hidden",
    shadowColor: colors.secondary,
    shadowOpacity: 0.22,
    shadowRadius: 14,
    elevation: 5,
  },
  addSideBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
    backgroundColor: colors.secondary,
  },
  addIconBox: {
    width: 50,
    height: 50,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  addTextBox: {
    flex: 1,
  },
  addTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "900",
  },
  addText: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },
  addArrow: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.cardSoft,
    alignItems: "center",
    justifyContent: "center",
  },

  listHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 14,
    gap: 12,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
  },
  sectionSubtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 3,
  },
  sectionBadge: {
    color: colors.secondary,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.1,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.borderBlue,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  list: {
    gap: 2,
  },

  emptyCard: {
    backgroundColor: colors.card,
    borderRadius: 24,
    borderWidth: 1.2,
    borderColor: colors.border,
    padding: 24,
    alignItems: "center",
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "900",
    marginTop: 12,
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 19,
    marginTop: 6,
  },
});