import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { colors } from "../../constants/colors";

export default function TouristsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Turistas Espaciais</Text>

      <Text style={styles.subtitle}>
        Aqui ficará o CRUD completo integrado com a API REST.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Exemplo de turista</Text>
        <Text style={styles.cardText}>Nome: Marina Magalhães</Text>
        <Text style={styles.cardText}>Destino: Marte</Text>
        <Text style={styles.cardText}>Status: Em treinamento</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/turistas/create")}
      >
        <Text style={styles.buttonText}>Cadastrar turista</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => router.push("/turistas/edit/1")}
      >
        <Text style={styles.buttonText}>Testar tela de edição</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
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
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    color: colors.textLight,
    marginTop: 4,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 16,
  },
  editButton: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});