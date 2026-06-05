import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BottomNav from "../components/BottomNav";
import SpaceBackground from "../components/SpaceBackground";
import { colors } from "../constants/colors";
import { Tourist } from "../types/tourist";

const STORAGE_KEY = "@areslife:tourists";

type SmartAlert = {
  id: string;
  title: string;
  description: string;
  level: "Baixo" | "Médio" | "Alto" | "Crítico";
  category: "Habitat" | "Saúde" | "Missão" | "Recursos";
  icon: keyof typeof Ionicons.glyphMap;
};

const habitatMetrics = {
  oxygen: 82,
  water: 64,
  energy: 91,
  temperature: -23,
};

export default function AlertsScreen() {
  const [tourists, setTourists] = useState<Tourist[]>([]);

  async function loadTourists() {
    try {
      const storedTourists = await AsyncStorage.getItem(STORAGE_KEY);

      if (storedTourists) {
        setTourists(JSON.parse(storedTourists));
      }
    } catch (error) {
      setTourists([]);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadTourists();
    }, [])
  );

  const smartAlerts = useMemo(() => {
    const generatedAlerts: SmartAlert[] = [];

    if (habitatMetrics.oxygen < 85) {
      generatedAlerts.push({
        id: "oxygen-low",
        title: "Oxigênio em observação",
        description:
          "O nível de oxigênio da base está abaixo do ideal. Recomenda-se revisar os módulos de suporte à vida.",
        level: "Médio",
        category: "Habitat",
        icon: "cloud-outline",
      });
    }

    if (habitatMetrics.water < 70) {
      generatedAlerts.push({
        id: "water-low",
        title: "Reserva de água reduzida",
        description:
          "O sistema identificou queda no nível de água. A colônia deve ativar protocolo de economia.",
        level: "Médio",
        category: "Recursos",
        icon: "water-outline",
      });
    }

    if (habitatMetrics.temperature < -20) {
      generatedAlerts.push({
        id: "temperature-critical",
        title: "Temperatura externa crítica",
        description:
          "Sensores detectaram frio extremo no ambiente marciano. Verifique isolamento térmico dos módulos.",
        level: "Alto",
        category: "Habitat",
        icon: "thermometer-outline",
      });
    }

    tourists.forEach((tourist) => {
      if (tourist.status === "Crítico") {
        generatedAlerts.push({
          id: `critical-${tourist.id}`,
          title: `${tourist.name} em estado crítico`,
          description:
            "O turista foi marcado como crítico. A equipe médica deve verificar os sinais vitais imediatamente.",
          level: "Crítico",
          category: "Saúde",
          icon: "medkit-outline",
        });
      }

      if (tourist.status === "Atenção") {
        generatedAlerts.push({
          id: `attention-${tourist.id}`,
          title: `${tourist.name} precisa de acompanhamento`,
          description:
            "O turista apresenta status de atenção. Recomenda-se monitoramento durante a missão.",
          level: "Alto",
          category: "Saúde",
          icon: "warning-outline",
        });
      }

      if (tourist.oxygenLevel > 0 && tourist.oxygenLevel < 90) {
        generatedAlerts.push({
          id: `oxygen-${tourist.id}`,
          title: `Oxigênio baixo: ${tourist.name}`,
          description: `O nível de O₂ do turista está em ${tourist.oxygenLevel}%. Verifique o suporte respiratório.`,
          level: "Alto",
          category: "Saúde",
          icon: "fitness-outline",
        });
      }

      if (tourist.heartRate > 0 && tourist.heartRate > 100) {
        generatedAlerts.push({
          id: `heart-${tourist.id}`,
          title: `Batimentos elevados: ${tourist.name}`,
          description: `O turista está com ${tourist.heartRate} BPM. Recomenda-se avaliação médica preventiva.`,
          level: "Médio",
          category: "Saúde",
          icon: "heart-outline",
        });
      }

      if (tourist.ticketStatus === "Pendente") {
        generatedAlerts.push({
          id: `ticket-${tourist.id}`,
          title: `Bilhete pendente: ${tourist.name}`,
          description:
            "Existe uma pendência no status do bilhete/reserva do turista para a missão.",
          level: "Baixo",
          category: "Missão",
          icon: "document-text-outline",
        });
      }
    });

    if (generatedAlerts.length === 0) {
      generatedAlerts.push({
        id: "all-safe",
        title: "Nenhum alerta crítico",
        description:
          "Todos os sistemas da colônia e turistas estão operando dentro dos limites esperados.",
        level: "Baixo",
        category: "Habitat",
        icon: "shield-checkmark-outline",
      });
    }

    return generatedAlerts;
  }, [tourists]);

  const criticalCount = smartAlerts.filter(
    (alert) => alert.level === "Crítico"
  ).length;

  const highCount = smartAlerts.filter((alert) => alert.level === "Alto").length;

  const mediumCount = smartAlerts.filter(
    (alert) => alert.level === "Médio"
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
              <Text style={styles.eyebrow}>IA OPERACIONAL</Text>
              <Text style={styles.title}>Alertas Inteligentes</Text>
              <Text style={styles.subtitle}>
                Análise automática dos riscos da colônia e dos turistas
                espaciais.
              </Text>
            </View>

            <View style={styles.headerIcon}>
              <Ionicons
                name="notifications-outline"
                size={26}
                color={colors.orange}
              />
            </View>
          </View>

          <View style={styles.commandPanel}>
            <View style={styles.commandTop}>
              <View>
                <Text style={styles.commandTitle}>Monitoramento ativo</Text>
                <Text style={styles.commandSubtitle}>
                  Sistema analisando habitat, recursos e sinais vitais
                </Text>
              </View>

              <View style={styles.aiBadge}>
                <Ionicons name="sparkles-outline" size={14} color={colors.text} />
                <Text style={styles.aiText}>SMART</Text>
              </View>
            </View>

            <View style={styles.summaryGrid}>
              <View style={styles.summaryCard}>
                <Text style={[styles.summaryValue, { color: colors.danger }]}>
                  {criticalCount}
                </Text>
                <Text style={styles.summaryLabel}>Críticos</Text>
              </View>

              <View style={styles.summaryCard}>
                <Text style={[styles.summaryValue, { color: colors.orange }]}>
                  {highCount}
                </Text>
                <Text style={styles.summaryLabel}>Altos</Text>
              </View>

              <View style={styles.summaryCard}>
                <Text style={[styles.summaryValue, { color: colors.warning }]}>
                  {mediumCount}
                </Text>
                <Text style={styles.summaryLabel}>Médios</Text>
              </View>
            </View>
          </View>

          <View style={styles.metricsPanel}>
            <View style={styles.metricItem}>
              <Ionicons name="cloud-outline" size={18} color={colors.secondary} />
              <Text style={styles.metricValue}>{habitatMetrics.oxygen}%</Text>
              <Text style={styles.metricLabel}>Oxigênio</Text>
            </View>

            <View style={styles.metricItem}>
              <Ionicons name="water-outline" size={18} color={colors.blue} />
              <Text style={styles.metricValue}>{habitatMetrics.water}%</Text>
              <Text style={styles.metricLabel}>Água</Text>
            </View>

            <View style={styles.metricItem}>
              <Ionicons name="flash-outline" size={18} color={colors.orange} />
              <Text style={styles.metricValue}>{habitatMetrics.energy}%</Text>
              <Text style={styles.metricLabel}>Energia</Text>
            </View>

            <View style={styles.metricItem}>
              <Ionicons
                name="thermometer-outline"
                size={18}
                color={colors.warning}
              />
              <Text style={styles.metricValue}>{habitatMetrics.temperature}°C</Text>
              <Text style={styles.metricLabel}>Temp.</Text>
            </View>
          </View>

          <View style={styles.listHeader}>
            <View>
              <Text style={styles.sectionTitle}>Alertas detectados</Text>
              <Text style={styles.sectionSubtitle}>
                {smartAlerts.length} ocorrência(s) encontrada(s)
              </Text>
            </View>

            <Text style={styles.sectionBadge}>AUTO</Text>
          </View>

          <View style={styles.alertList}>
            {smartAlerts.map((alert) => (
              <View
                key={alert.id}
                style={[
                  styles.alertCard,
                  {
                    borderColor: getAlertColor(alert.level),
                  },
                ]}
              >
                <View
                  style={[
                    styles.alertIconBox,
                    {
                      borderColor: getAlertColor(alert.level),
                    },
                  ]}
                >
                  <Ionicons
                    name={alert.icon}
                    size={24}
                    color={getAlertColor(alert.level)}
                  />
                </View>

                <View style={styles.alertInfo}>
                  <View style={styles.alertTop}>
                    <Text style={styles.alertTitle}>{alert.title}</Text>

                    <View
                      style={[
                        styles.levelBadge,
                        {
                          borderColor: getAlertColor(alert.level),
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.levelText,
                          {
                            color: getAlertColor(alert.level),
                          },
                        ]}
                      >
                        {alert.level}
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.alertDescription}>
                    {alert.description}
                  </Text>

                  <View style={styles.categoryRow}>
                    <Ionicons
                      name="radio-outline"
                      size={13}
                      color={colors.textSecondary}
                    />
                    <Text style={styles.categoryText}>{alert.category}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        <BottomNav active="alertas" />
      </View>
    </SafeAreaView>
  );
}

function getAlertColor(level: SmartAlert["level"]) {
  if (level === "Crítico") return colors.danger;
  if (level === "Alto") return colors.orange;
  if (level === "Médio") return colors.warning;
  return colors.success;
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
    color: colors.orange,
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
    borderColor: colors.borderOrange,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.orange,
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },

  commandPanel: {
    backgroundColor: colors.card,
    borderRadius: 26,
    borderWidth: 1.4,
    borderColor: colors.borderOrange,
    padding: 18,
    marginBottom: 18,
    shadowColor: colors.orange,
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
    lineHeight: 17,
    marginTop: 4,
    maxWidth: 220,
  },
  aiBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: colors.orange,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignSelf: "flex-start",
  },
  aiText: {
    color: colors.text,
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
    paddingVertical: 14,
    alignItems: "center",
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: "900",
  },
  summaryLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "800",
    marginTop: 4,
  },

  metricsPanel: {
    backgroundColor: colors.card,
    borderRadius: 24,
    borderWidth: 1.2,
    borderColor: colors.border,
    padding: 14,
    flexDirection: "row",
    gap: 10,
    marginBottom: 22,
  },
  metricItem: {
    flex: 1,
    backgroundColor: colors.cardSoft,
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  metricValue: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "900",
    marginTop: 5,
  },
  metricLabel: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: "800",
    marginTop: 3,
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
    color: colors.orange,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.1,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.borderOrange,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  alertList: {
    gap: 14,
  },
  alertCard: {
    backgroundColor: colors.card,
    borderRadius: 24,
    borderWidth: 1.4,
    padding: 15,
    flexDirection: "row",
    gap: 12,
    shadowColor: colors.orange,
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 4,
  },
  alertIconBox: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: colors.cardSoft,
    borderWidth: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  alertInfo: {
    flex: 1,
  },
  alertTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  alertTitle: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 20,
  },
  levelBadge: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: colors.cardSoft,
  },
  levelText: {
    fontSize: 10,
    fontWeight: "900",
  },
  alertDescription: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },
  categoryText: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "800",
  },
});