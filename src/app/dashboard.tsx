import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";

import AppButton from "../components/AppButton";
import BottomNav from "../components/BottomNav";
import SpaceBackground from "../components/SpaceBackground";
import { colors } from "../constants/colors";

type Resource = {
  id: number;
  label: string;
  value: string;
  status: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  border: string;
};

const resources: Resource[] = [
  {
    id: 1,
    label: "Oxigênio",
    value: "92%",
    status: "Nível estável",
    icon: "cloud-outline",
    color: colors.secondary,
    border: colors.borderBlue,
  },
  {
    id: 2,
    label: "Água",
    value: "78%",
    status: "Nível adequado",
    icon: "water-outline",
    color: colors.blue,
    border: colors.borderBlue,
  },
  {
    id: 3,
    label: "Energia",
    value: "64%",
    status: "Consumo normal",
    icon: "flash-outline",
    color: colors.orange,
    border: colors.borderOrange,
  },
  {
    id: 4,
    label: "Temperatura",
    value: "21°C",
    status: "Ambiente seguro",
    icon: "thermometer-outline",
    color: colors.success,
    border: colors.success,
  },
];

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
        <SpaceBackground />

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.headerTextBox}>
              <Text style={styles.eyebrow}>CENTRO DE COMANDO</Text>
              <Text style={styles.title}>Dashboard da Colônia</Text>
              <Text style={styles.subtitle}>Visão geral da base AresLife</Text>
            </View>

            <View style={styles.headerIcon}>
              <Ionicons name="planet-outline" size={26} color={colors.secondary} />
            </View>
          </View>

          <View style={styles.heroCard}>
            <View style={styles.heroTop}>
              <View>
                <Text style={styles.heroTitle}>Base Ares-01</Text>
                <Text style={styles.heroSubtitle}>Sol 128 · Operação ativa</Text>
              </View>

              <View style={styles.onlineBadge}>
                <View style={styles.onlineDot} />
                <Text style={styles.onlineText}>Online</Text>
              </View>
            </View>

            <View style={styles.heroCenter}>
              <View style={styles.planetBase}>
                <Ionicons name="rocket-outline" size={44} color={colors.text} />
              </View>

              <View style={styles.heroInfo}>
                <Text style={styles.heroNumber}>91%</Text>
                <Text style={styles.heroLabel}>Eficiência geral</Text>
              </View>
            </View>

            <View style={styles.heroBottom}>
              <Text style={styles.heroBottomText}>Habitat seguro</Text>
              <Text style={styles.heroBottomText}>Monitoramento em tempo real</Text>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sistemas Ambientais</Text>
            <Text style={styles.sectionHint}>Atualizado agora</Text>
          </View>

          <View style={styles.grid}>
            {resources.map((resource) => (
              <View
                key={resource.id}
                style={[
                  styles.resourceCard,
                  {
                    borderColor: resource.border,
                    shadowColor: resource.border,
                  },
                ]}
              >
                <View style={styles.resourceTop}>
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
                      size={22}
                      color={resource.color}
                    />
                  </View>

                  <Text style={[styles.resourceSignal, { color: resource.color }]}>
                    OK
                  </Text>
                </View>

                <Text style={styles.resourceValue}>{resource.value}</Text>
                <Text style={styles.resourceLabel}>{resource.label}</Text>
                <Text style={[styles.resourceStatus, { color: resource.color }]}>
                  {resource.status}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Visão Geral</Text>
            <Text style={styles.sectionHint}>Base marciana</Text>
          </View>

          <View style={styles.statsGrid}>
            {stats.map((stat) => (
              <View key={stat.id} style={styles.statCard}>
                <View style={styles.statIconBox}>
                  <Ionicons
                    name={stat.icon}
                    size={19}
                    color={colors.secondary}
                  />
                </View>

                <View>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.actions}>
            <AppButton
              title="Gerenciar turistas"
              subtitle="Acompanhe visitantes, missões e status de saúde."
              icon="people-outline"
              variant="purple"
              onPress={() => router.push("/turistas" as never)}
            />

            <AppButton
              title="Ver alertas do habitat"
              subtitle="Confira eventos críticos e avisos da colônia."
              icon="notifications-outline"
              variant="orange"
              onPress={() => router.push("/alerts" as never)}
            />
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
    letterSpacing: 1.6,
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
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 5,
  },

  heroCard: {
    backgroundColor: colors.card,
    borderRadius: 26,
    borderWidth: 1.4,
    borderColor: colors.borderPurple,
    padding: 18,
    marginBottom: 24,
    shadowColor: colors.primary,
    shadowOpacity: 0.24,
    shadowRadius: 18,
    elevation: 8,
  },
  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 18,
  },
  heroTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: "900",
  },
  heroSubtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
  onlineBadge: {
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
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.success,
  },
  onlineText: {
    color: colors.success,
    fontSize: 12,
    fontWeight: "900",
  },
  heroCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginBottom: 18,
  },
  planetBase: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    borderColor: colors.cardSoft,
  },
  heroInfo: {
    flex: 1,
  },
  heroNumber: {
    color: colors.text,
    fontSize: 38,
    fontWeight: "900",
    lineHeight: 42,
  },
  heroLabel: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
    fontWeight: "700",
  },
  heroBottom: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 14,
    gap: 6,
  },
  heroBottomText: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "700",
  },

  sectionHeader: {
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

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 24,
  },
  resourceCard: {
    width: "48%",
    minHeight: 142,
    borderRadius: 22,
    borderWidth: 1.3,
    backgroundColor: colors.card,
    padding: 14,
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 4,
  },
  resourceTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  resourceIconBox: {
    width: 42,
    height: 42,
    borderRadius: 15,
    borderWidth: 1.2,
    backgroundColor: colors.cardSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  resourceSignal: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
  },
  resourceValue: {
    color: colors.text,
    fontSize: 31,
    fontWeight: "900",
    marginBottom: 2,
  },
  resourceLabel: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "800",
  },
  resourceStatus: {
    fontSize: 12,
    fontWeight: "800",
    marginTop: 6,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    width: "48%",
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1.2,
    borderColor: colors.border,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  statIconBox: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: colors.cardSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  statValue: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "900",
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
    fontWeight: "700",
  },

  actions: {
    marginTop: 2,
  },
});