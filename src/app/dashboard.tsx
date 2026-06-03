import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { colors } from "../constants/colors";

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Colônia Ares-01</Text>

      <Text style={styles.subtitle}>
        Monitoramento dos recursos vitais do habitat marciano
      </Text>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.icon}>🫁</Text>
          <Text style={styles.cardLabel}>Oxigênio</Text>
          <Text style={styles.cardValue}>82%</Text>
          <Text style={styles.cardStatus}>Nível seguro</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>💧</Text>
          <Text style={styles.cardLabel}>Água</Text>
          <Text style={styles.cardValue}>64%</Text>
          <Text style={styles.cardStatusWarning}>Atenção</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>⚡</Text>
          <Text style={styles.cardLabel}>Energia</Text>
          <Text style={styles.cardValue}>91%</Text>
          <Text style={styles.cardStatus}>Estável</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>🌡️</Text>
          <Text style={styles.cardLabel}>Temperatura</Text>
          <Text style={styles.cardValue}>-23°C</Text>
          <Text style={styles.cardStatus}>Controlada</Text>
        </View>
      </View>

      <View style={styles.alertBox}>
        <Text style={styles.alertTitle}>Status geral</Text>
        <Text style={styles.alertText}>
          Habitat operando dentro dos limites de segurança. Monitoramento ativo
          de turistas, astronautas e recursos essenciais.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/turistas")}
      >
        <Text style={styles.buttonText}>Gerenciar turistas espaciais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.outlineButton}
        onPress={() => router.push("/alerts")}
      >
        <Text style={styles.outlineButtonText}>Ver alertas do habitat</Text>
      </TouchableOpacity>
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
    marginBottom: 22,
    lineHeight: 21,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
  },
  card: {
    width: "47%",
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    fontSize: 28,
    marginBottom: 10,
  },
  cardLabel: {
    color: colors.textLight,
    fontSize: 14,
  },
  cardValue: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 6,
  },
  cardStatus: {
    color: colors.success,
    marginTop: 8,
    fontWeight: "600",
  },
  cardStatusWarning: {
    color: colors.warning,
    marginTop: 8,
    fontWeight: "600",
  },
  alertBox: {
    backgroundColor: "#172554",
    borderRadius: 18,
    padding: 18,
    marginTop: 24,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  alertTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  alertText: {
    color: "#CBD5E1",
    lineHeight: 21,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 16,
    marginTop: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
  },
  outlineButtonText: {
    color: colors.secondary,
    textAlign: "center",
    fontWeight: "bold",
  },
});