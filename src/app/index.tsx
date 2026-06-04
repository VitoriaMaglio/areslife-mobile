import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ResourceCard } from "../components/ResourceCard";
import { TouristCard } from "../components/TouristCard";
import { resources, tourists } from "../services/api";
import { colors, gradients } from "../constants/colors";

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <LinearGradient colors={gradients.space} style={StyleSheet.absoluteFill} />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <LinearGradient
          colors={gradients.hero}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <View style={styles.planetBadge}>
            <Text style={styles.planet}>🚀</Text>
          </View>

          <Text style={styles.kicker}>COLÔNIA · MARTE</Text>
          <Text style={styles.title}>ARESLIFE</Text>

          <Text style={styles.subtitle}>
            Plataforma de simulação espacial para monitorar colônias em Marte,
            recursos vitais, turistas espaciais e alertas do habitat.
          </Text>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/dashboard")}
            style={styles.primaryWrap}
          >
            <LinearGradient
              colors={gradients.button}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.primaryButton}
            >
              <Text style={styles.primaryButtonText}>Iniciar monitoramento</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.85}
            onPress={() => router.push("/turistas")}
          >
            <Text style={styles.secondaryButtonText}>Ver turistas espaciais</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* AÇÕES RÁPIDAS */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionCard}
            activeOpacity={0.85}
            onPress={() => router.push("/dashboard")}
          >
            <View style={[styles.iconCircle, { borderColor: colors.secondary }]}>
              <Text style={styles.actionIcon}>🛰️</Text>
            </View>
            <Text style={styles.actionTitle}>Dashboard</Text>
            <Text style={styles.actionText}>Recursos da colônia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            activeOpacity={0.85}
            onPress={() => router.push("/alerts")}
          >
            <View style={[styles.iconCircle, { borderColor: colors.warning }]}>
              <Text style={styles.actionIcon}>⚠️</Text>
            </View>
            <Text style={styles.actionTitle}>Alertas</Text>
            <Text style={styles.actionText}>Riscos do habitat</Text>
          </TouchableOpacity>
        </View>

        {/* RECURSOS */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionBar} />
          <Text style={styles.sectionTitle}>RECURSOS DO HABITAT</Text>
        </View>

        <View style={styles.resourcesGrid}>
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </View>

        {/* TURISTAS */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionBar} />
          <Text style={styles.sectionTitle}>TURISTAS E ASTRONAUTAS</Text>
        </View>

        {tourists.map((tourist) => (
          <TouristCard key={tourist.id} tourist={tourist} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 48 },

  hero: {
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(108,92,255,0.45)",
    marginBottom: 22,
    shadowColor: colors.glow,
    shadowOpacity: 0.5,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 12,
  },
  planetBadge: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "rgba(34,211,238,0.12)",
    borderWidth: 1,
    borderColor: "rgba(34,211,238,0.5)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  planet: { fontSize: 34 },
  kicker: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 3,
    marginBottom: 6,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "900",
    letterSpacing: 2,
    marginBottom: 10,
  },
  subtitle: {
    color: colors.textLight,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 22,
  },
  primaryWrap: {
    borderRadius: 18,
    marginBottom: 12,
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
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.25)",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
    letterSpacing: 0.5,
  },

  quickActions: { flexDirection: "row", gap: 14, marginBottom: 28 },
  actionCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 22,
    padding: 18,
  },
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  actionIcon: { fontSize: 24 },
  actionTitle: { color: colors.text, fontSize: 16, fontWeight: "800" },
  actionText: { color: colors.textLight, fontSize: 12, marginTop: 4 },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
    marginBottom: 16,
  },
  sectionBar: {
    width: 4,
    height: 18,
    borderRadius: 4,
    backgroundColor: colors.secondary,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 2,
  },

  resourcesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});