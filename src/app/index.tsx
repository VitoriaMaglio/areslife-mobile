import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { colors } from "../constants/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.logo}>🚀</Text>
        <Text style={styles.title}>AresLife</Text>

        <Text style={styles.subtitle}>
          Simulação de colonização de Marte e turismo espacial
        </Text>

        <Text style={styles.description}>
          Monitore recursos vitais, gerencie turistas espaciais e acompanhe
          alertas de habitats em ambientes extremos.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={styles.primaryButtonText}>Entrar no painel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push("/turistas")}
      >
        <Text style={styles.secondaryButtonText}>Ver turistas espaciais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => router.push("/alerts")}
      >
        <Text style={styles.linkButtonText}>Ver alertas do habitat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
  hero: {
    marginBottom: 40,
  },
  logo: {
    fontSize: 64,
    textAlign: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: colors.secondary,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
  },
  description: {
    fontSize: 15,
    color: colors.mutedText,
    textAlign: "center",
    marginTop: 22,
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
  },
  primaryButtonText: {
    color: colors.text,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
  },
  secondaryButtonText: {
    color: colors.secondary,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkButton: {
    padding: 12,
  },
  linkButtonText: {
    color: colors.mutedText,
    textAlign: "center",
    fontSize: 14,
  },
});