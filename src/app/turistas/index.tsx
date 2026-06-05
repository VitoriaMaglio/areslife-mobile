import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import BottomNav from "../../components/BottomNav";
import TouristCard from "../../components/TouristCard";
import { colors } from "../../constants/colors";
import { Tourist } from "../../types/tourist";

const tourists: Tourist[] = [
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

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.marsGlow} />
          <View style={styles.starOne} />
          <View style={styles.starTwo} />

          <View style={styles.header}>
            <View style={styles.headerTextBox}>
              <Text style={styles.title}>Turistas Espaciais</Text>
              <Text style={styles.subtitle}>Acompanhe seus visitantes</Text>
            </View>

            <View style={styles.headerIcon}>
              <Ionicons name="people-outline" size={25} color={colors.secondary} />
            </View>
          </View>

          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons name="search" size={18} color={colors.textSecondary} />

              <TextInput
                placeholder="Buscar turista..."
                placeholderTextColor={colors.textSecondary}
                style={styles.searchInput}
              />
            </View>

            <View style={styles.filterBox}>
              <Ionicons name="options-outline" size={20} color={colors.secondary} />
            </View>
          </View>

          <Pressable style={styles.addCard} onPress={handleCreateTourist}>
            <View style={styles.addIconBox}>
              <Ionicons name="add" size={26} color={colors.text} />
            </View>

            <View style={styles.addTextBox}>
              <Text style={styles.addTitle}>Cadastrar novo turista</Text>
              <Text style={styles.addText}>
                Registre visitantes, missões e status de saúde.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={22}
              color={colors.textSecondary}
            />
          </Pressable>

          <View style={styles.summaryRow}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryValue}>4</Text>
              <Text style={styles.summaryLabel}>Visitantes</Text>
            </View>

            <View style={styles.summaryCard}>
              <Text style={styles.summaryValue}>3</Text>
              <Text style={styles.summaryLabel}>Seguros</Text>
            </View>

            <View style={styles.summaryCard}>
              <Text style={[styles.summaryValue, styles.warningText]}>1</Text>
              <Text style={styles.summaryLabel}>Atenção</Text>
            </View>
          </View>

          <View style={styles.listHeader}>
            <Text style={styles.sectionTitle}>Lista de turistas</Text>
            <Text style={styles.sectionHint}>CRUD via API</Text>
          </View>

          <View style={styles.list}>
            {tourists.map((tourist) => (
              <TouristCard
                key={tourist.id}
                tourist={tourist}
                onEdit={() => handleEditTourist(tourist.id)}
                onDelete={() => {}}
              />
            ))}
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
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 120,
  },
  marsGlow: {
    position: "absolute",
    width: 235,
    height: 235,
    borderRadius: 118,
    backgroundColor: "rgba(249, 115, 22, 0.13)",
    right: -105,
    top: 24,
  },
  starOne: {
    position: "absolute",
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.secondary,
    top: 92,
    left: 34,
  },
  starTwo: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.accent,
    top: 176,
    right: 42,
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
  title: {
    color: colors.text,
    fontSize: 27,
    fontWeight: "900",
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 5,
  },
  headerIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "rgba(34, 211, 238, 0.10)",
    borderWidth: 1,
    borderColor: colors.borderBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  searchBox: {
    flex: 1,
    height: 52,
    borderRadius: 18,
    backgroundColor: "rgba(14, 19, 48, 0.82)",
    borderWidth: 1,
    borderColor: "rgba(138, 147, 194, 0.25)",
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
    backgroundColor: "rgba(14, 19, 48, 0.82)",
    borderWidth: 1,
    borderColor: "rgba(34, 211, 238, 0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
  addCard: {
    backgroundColor: "rgba(108, 92, 255, 0.13)",
    borderWidth: 1,
    borderColor: colors.borderPurple,
    borderRadius: 22,
    padding: 16,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    shadowColor: colors.primary,
    shadowOpacity: 0.22,
    shadowRadius: 14,
    elevation: 5,
  },
  addIconBox: {
    width: 46,
    height: 46,
    borderRadius: 16,
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
    marginBottom: 4,
  },
  addText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
  summaryRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 22,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: "rgba(14, 19, 48, 0.82)",
    borderWidth: 1,
    borderColor: "rgba(138, 147, 194, 0.22)",
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: "center",
  },
  summaryValue: {
    color: colors.secondary,
    fontSize: 21,
    fontWeight: "900",
  },
  summaryLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 3,
    fontWeight: "700",
  },
  warningText: {
    color: colors.orange,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
  },
  sectionHint: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "700",
  },
  list: {
    gap: 2,
  },
});