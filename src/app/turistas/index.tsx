import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { colors, gradients } from "../../constants/colors";

const tourists = [
  {
    id: "1",
    name: "Marina Magalhães",
    destination: "Marte",
    status: "Em treinamento",
    oxygen: "96%",
    mission: "Ares-01",
    emoji: "👩‍🚀",
  },
  {
    id: "2",
    name: "João Pedro",
    destination: "Lua",
    status: "Aguardando embarque",
    oxygen: "92%",
    mission: "Lunar Gate",
    emoji: "🚀",
  },
  {
    id: "3",
    name: "Bruno Vinicius",
    destination: "Marte",
    status: "Aprovado",
    oxygen: "98%",
    mission: "Ares-02",
    emoji: "🪐",
  },
];

export default function TouristsScreen() {
  return (
    <View style={styles.root}>
      <LinearGradient colors={gradients.space} style={StyleSheet.absoluteFill} />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={gradients.hero}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <View style={styles.planetBadge}>
            <Text style={styles.planet}>🪐</Text>
          </View>
          <Text style={styles.kicker}>PASSAGEIROS · MISSÕES</Text>
          <Text style={styles.title}>Turistas Espaciais</Text>
          <Text style={styles.subtitle}>
            Gerencie passageiros, destinos, status de treinamento e dados vitais
            das missões espaciais.
          </Text>
        </LinearGradient>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Integração com API REST</Text>
          <Text style={styles.infoText}>
            Esta tela já está preparada para receber o CRUD completo. Por
            enquanto, os dados são simulados para demonstrar o fluxo do
            aplicativo.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>03</Text>
            <Text style={styles.statLabel}>Turistas</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>02</Text>
            <Text style={styles.statLabel}>Missões</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>100%</Text>
            <Text style={styles.statLabel}>Monitorado</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionBar} />
          <Text style={styles.sectionTitle}>LISTA DE PASSAGEIROS</Text>
        </View>

        {tourists.map((tourist) => (
          <View key={tourist.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <LinearGradient colors={gradients.button} style={styles.avatar}>
                <Text style={styles.avatarText}>{tourist.emoji}</Text>
              </LinearGradient>

              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{tourist.name}</Text>
                <Text style={styles.cardSubtitle}>
                  Destino: {tourist.destination}
                </Text>
              </View>

              <View style={styles.badge}>
                <Text style={styles.badgeText}>{tourist.status}</Text>
              </View>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Missão</Text>
                <Text style={styles.detailValue}>{tourist.mission}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Oxigênio</Text>
                <Text style={[styles.detailValue, { color: colors.secondary }]}>
                  {tourist.oxygen}
                </Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Risco</Text>
                <Text style={[styles.detailValue, { color: colors.success }]}>
                  Baixo
                </Text>
              </View>
            </View>
          </View>
        ))}

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push("/turistas/create")}
          style={styles.primaryWrap}
        >
          <LinearGradient
            colors={gradients.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>Cadastrar novo turista</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          activeOpacity={0.85}
          onPress={() => router.push("/turistas/edit/1")}
        >
          <Text style={styles.secondaryButtonText}>Testar tela de edição</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outlineButton}
          activeOpacity={0.85}
          onPress={() => router.push("/dashboard")}
        >
          <Text style={styles.outlineButtonText}>Voltar ao dashboard</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 48 },

  hero: {
    borderRadius: 26,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(108,92,255,0.45)",
    marginBottom: 18,
    shadowColor: colors.glow,
    shadowOpacity: 0.5,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 10 },
    elevation: 12,
  },
  planetBadge: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "rgba(232,121,249,0.12)",
    borderWidth: 1,
    borderColor: "rgba(232,121,249,0.5)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  planet: { fontSize: 32 },
  kicker: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 3,
    marginBottom: 6,
  },
  title: { fontSize: 30, fontWeight: "900", color: "#FFFFFF", letterSpacing: 1 },
  subtitle: {
    color: colors.textLight,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },

  infoBox: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 3,
    borderLeftColor: colors.secondary,
    marginBottom: 18,
  },
  infoTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },
  infoText: { color: colors.textLight, lineHeight: 21 },

  statsRow: { flexDirection: "row", gap: 10, marginBottom: 24 },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  statValue: { color: colors.secondary, fontSize: 22, fontWeight: "900" },
  statLabel: {
    color: colors.textLight,
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  sectionBar: {
    width: 4,
    height: 18,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 2,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 14,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: { fontSize: 26 },
  cardInfo: { flex: 1 },
  cardTitle: { color: colors.text, fontSize: 17, fontWeight: "900" },
  cardSubtitle: { color: colors.textLight, fontSize: 13, marginTop: 3 },
  badge: {
    backgroundColor: "rgba(52,211,153,0.15)",
    borderWidth: 1,
    borderColor: "rgba(52,211,153,0.4)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    maxWidth: 120,
  },
  badgeText: {
    color: colors.success,
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.backgroundAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 12,
  },
  detailItem: { flex: 1 },
  detailLabel: { color: colors.textLight, fontSize: 12, marginBottom: 4 },
  detailValue: { color: colors.text, fontSize: 13, fontWeight: "800" },

  primaryWrap: {
    borderRadius: 18,
    marginTop: 12,
    shadowColor: colors.secondary,
    shadowOpacity: 0.6,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  primaryButton: { padding: 16, borderRadius: 18, alignItems: "center" },
  primaryButtonText: {
    color: "#06091A",
    fontWeight: "900",
    fontSize: 15,
    letterSpacing: 0.5,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    borderRadius: 18,
    marginTop: 12,
    alignItems: "center",
  },
  secondaryButtonText: { color: colors.text, fontWeight: "800", fontSize: 15 },
  outlineButton: {
    borderWidth: 1.5,
    borderColor: colors.secondary,
    padding: 16,
    borderRadius: 18,
    marginTop: 12,
    alignItems: "center",
  },
  outlineButtonText: { color: colors.secondary, fontWeight: "800", fontSize: 15 },
});