import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../constants/colors";

const alerts = [
  {
    id: 1,
    title: "Oxigênio em observação",
    description: "O módulo Ares-01 apresentou redução no nível de oxigênio.",
    level: "Médio",
    icon: "🫁",
  },
  {
    id: 2,
    title: "Temperatura externa crítica",
    description: "Sensores detectaram queda brusca na temperatura externa.",
    level: "Alto",
    icon: "🌡️",
  },
  {
    id: 3,
    title: "Treinamento pendente",
    description:
      "Dois turistas ainda precisam concluir o treinamento gravitacional.",
    level: "Baixo",
    icon: "👩‍🚀",
  },
];

export default function AlertsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Alertas do Habitat</Text>

      <Text style={styles.subtitle}>
        Acompanhe riscos operacionais da colônia e do turismo espacial.
      </Text>

      {alerts.map((alert) => (
        <View key={alert.id} style={styles.card}>
          <Text style={styles.icon}>{alert.icon}</Text>

          <View style={styles.info}>
            <Text style={styles.cardTitle}>{alert.title}</Text>
            <Text style={styles.description}>{alert.description}</Text>
            <Text style={styles.level}>Nível: {alert.level}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
  subtitle: {
    color: colors.textLight,
    marginTop: 8,
    marginBottom: 20,
    lineHeight: 21,
  },
  card: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    fontSize: 34,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "bold",
  },
  description: {
    color: colors.textLight,
    marginTop: 6,
    lineHeight: 20,
  },
  level: {
    color: colors.warning,
    marginTop: 10,
    fontWeight: "bold",
  },
});