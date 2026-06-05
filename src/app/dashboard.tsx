import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BottomNav from "../components/BottomNav";
import { colors } from "../constants/colors";

const resources = [
  {
    id: 1,
    label: "Oxigênio",
    value: "92%",
    status: "Nível estável",
    icon: "cloud-outline",
    color: colors.secondary,
    background: "rgba(34, 211, 238, 0.12)",
    border: colors.borderBlue,
  },
  {
    id: 2,
    label: "Água",
    value: "78%",
    status: "Nível adequado",
    icon: "water-outline",
    color: colors.secondary,
    background: "rgba(34, 211, 238, 0.10)",
    border: colors.borderBlue,
  },
  {
    id: 3,
    label: "Energia",
    value: "64%",
    status: "Consumo normal",
    icon: "flash-outline",
    color: colors.orange,
    background: "rgba(249, 115, 22, 0.12)",
    border: colors.borderOrange,
  },
  {
    id: 4,
    label: "Temperatura",
    value: "21°C",
    status: "Estável",
    icon: "thermometer-outline",
    color: colors.success,
    background: "rgba(52, 211, 153, 0.10)",
    border: colors.success,
  },
] as const;

const stats = [
  {
    id: 1,
    label: "População",
    value: "128",
    icon: "people-outline",
  },
  {
    id: 2,
    label: "Estruturas",
    value: "24",
    icon: "business-outline",
  },
  {
    id: 3,
    label: "Produção",
    value: "82%",
    icon: "cube-outline",
  },
  {
    id: 4,
    label: "Eficiência",
    value: "91%",
    icon: "shield-checkmark-outline",
  },
] as const;

export default function DashboardScreen() {
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
              <Text style={styles.title}>Dashboard da Colônia</Text>
              <Text style={styles.subtitle}>Visão geral da base AresLife</Text>
            </View>

            <View style={styles.headerIcon}>
              <Ionicons name="planet-outline" size={24} color={colors.secondary} />
            </View>
          </View>

          <View style={styles.heroCard}>
            <View style={styles.heroOverlay}>
              <View>
                <Text style={styles.heroTitle}>Base Ares-01</Text>
                <Text style={styles.heroSubtitle}>Sol 128 · 14:32</Text>
              </View>

              <View style={styles.heroBadge}>
                <Ionicons name="radio-outline" size={15} color={colors.success} />
                <Text style={styles.heroBadgeText}>Online</Text>
              </View>
            </View>

            <View style={styles.colonyIllustration}>
              <View style={styles.dome} />
              <View style={styles.tower} />
              <View style={styles.moduleOne} />
              <View style={styles.moduleTwo} />
            </View>
          </View>

          <Text style={styles.sectionTitle}>Sistemas Ambientais</Text>

          <View style={styles.grid}>
            {resources.map((resource) => (
              <View
                key={resource.id}
                style={[
                  styles.resourceCard,
                  {
                    backgroundColor: resource.background,
                    borderColor: resource.border,
                    shadowColor: resource.border,
                  },
                ]}
              >
                <View style={styles.resourceHeader}>
                  <Text style={styles.resourceLabel}>{resource.label}</Text>

                  <View
                    style={[
                      styles.resourceIconBox,
                      {
                        borderColor: resource.border,
                      },
                    ]}
                  >
                    <Ionicons
                      name={resource.icon}
                      size={21}
                      color={resource.color}
                    />
                  </View>
                </View>

                <Text style={styles.resourceValue}>{resource.value}</Text>
                <Text style={[styles.resourceStatus, { color: resource.color }]}>
                  {resource.status}
                </Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Visão Geral da Colônia</Text>

          <View style={styles.statsGrid}>
            {stats.map((stat) => (
              <View key={stat.id} style={styles.statCard}>
                <View style={styles.statIconBox}>
                  <Ionicons
                    name={stat.icon}
                    size={18}
                    color={colors.textSecondary}
                  />
                </View>

                <View>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                  <Text style={styles.statValue}>{stat.value}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.statusBox}>
            <View style={styles.statusHeader}>
              <Ionicons
                name="shield-checkmark-outline"
                size={22}
                color={colors.success}
              />
              <Text style={styles.statusTitle}>Status geral</Text>
            </View>

            <Text style={styles.statusText}>
              Habitat operando dentro dos limites de segurança. Monitoramento
              ativo de turistas, astronautas e recursos essenciais.
            </Text>
          </View>

          <View style={styles.actions}>
            <Pressable
              style={styles.primaryButton}
              onPress={() => router.push("/turistas" as never)}
            >
              <Ionicons name="people-outline" size={18} color={colors.text} />
              <Text style={styles.primaryButtonText}>
                Gerenciar turistas espaciais
              </Text>
            </Pressable>

            <Pressable
              style={styles.secondaryButton}
              onPress={() => router.push("/alerts" as never)}
            >
              <Ionicons
                name="notifications-outline"
                size={18}
                color={colors.secondary}
              />
              <Text style={styles.secondaryButtonText}>
                Ver alertas do habitat
              </Text>
            </Pressable>
          </View>
        </ScrollView>

        <BottomNav active="colonia" />
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
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "rgba(249, 115, 22, 0.14)",
    right: -110,
    top: 20,
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
    top: 180,
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
  heroCard: {
    height: 178,
    borderRadius: 24,
    backgroundColor: "#1B1F4D",
    borderWidth: 1,
    borderColor: "rgba(138, 147, 194, 0.35)",
    overflow: "hidden",
    marginBottom: 22,
    shadowColor: colors.primary,
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 8,
  },
  heroOverlay: {
    position: "absolute",
    left: 16,
    right: 16,
    top: 14,
    zIndex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  heroTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
  },
  heroSubtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 3,
  },
  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "rgba(2, 3, 10, 0.55)",
    borderWidth: 1,
    borderColor: "rgba(52, 211, 153, 0.45)",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  heroBadgeText: {
    color: colors.success,
    fontSize: 12,
    fontWeight: "800",
  },
  colonyIllustration: {
    flex: 1,
    backgroundColor: "rgba(249, 115, 22, 0.16)",
  },
  dome: {
    position: "absolute",
    width: 130,
    height: 72,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderWidth: 2,
    borderColor: "rgba(234, 240, 255, 0.55)",
    backgroundColor: "rgba(34, 211, 238, 0.12)",
    left: 92,
    bottom: 34,
  },
  tower: {
    position: "absolute",
    width: 22,
    height: 118,
    borderRadius: 10,
    backgroundColor: "rgba(234, 240, 255, 0.28)",
    borderWidth: 1,
    borderColor: "rgba(34, 211, 238, 0.6)",
    left: 58,
    bottom: 34,
  },
  moduleOne: {
    position: "absolute",
    width: 96,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(234, 240, 255, 0.18)",
    borderWidth: 1,
    borderColor: "rgba(34, 211, 238, 0.45)",
    left: 34,
    bottom: 24,
  },
  moduleTwo: {
    position: "absolute",
    width: 110,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(234, 240, 255, 0.16)",
    borderWidth: 1,
    borderColor: "rgba(168, 85, 247, 0.45)",
    right: 28,
    bottom: 22,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 14,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 24,
  },
  resourceCard: {
    width: "48%",
    minHeight: 128,
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 4,
  },
  resourceHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resourceLabel: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "700",
  },
  resourceIconBox: {
    width: 38,
    height: 38,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(2, 3, 10, 0.25)",
  },
  resourceValue: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "900",
    marginTop: 12,
  },
  resourceStatus: {
    fontSize: 12,
    fontWeight: "800",
    marginTop: 5,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    width: "48%",
    borderRadius: 18,
    backgroundColor: "rgba(14, 19, 48, 0.82)",
    borderWidth: 1,
    borderColor: "rgba(138, 147, 194, 0.22)",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  statIconBox: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: "rgba(234, 240, 255, 0.06)",
    alignItems: "center",
    justifyContent: "center",
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  statValue: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
    marginTop: 2,
  },
  statusBox: {
    backgroundColor: "rgba(34, 197, 94, 0.10)",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(52, 211, 153, 0.45)",
    marginBottom: 18,
  },
  statusHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  statusTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
  },
  statusText: {
    color: colors.textSecondary,
    lineHeight: 21,
    fontSize: 14,
  },
  actions: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  primaryButtonText: {
    color: colors.text,
    fontWeight: "900",
    fontSize: 14,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.secondary,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    backgroundColor: "rgba(34, 211, 238, 0.07)",
  },
  secondaryButtonText: {
    color: colors.secondary,
    fontWeight: "900",
    fontSize: 14,
  },
});