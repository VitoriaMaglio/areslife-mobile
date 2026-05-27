import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { colors } from "../../constants/colors";

export default function CreateTouristScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Turista</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#94A3B8"
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        placeholderTextColor="#94A3B8"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="País"
        placeholderTextColor="#94A3B8"
      />

      <TextInput
        style={styles.input}
        placeholder="Destino"
        placeholderTextColor="#94A3B8"
      />

      <TextInput
        style={styles.input}
        placeholder="Status"
        placeholderTextColor="#94A3B8"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert("Em breve", "Aqui vamos integrar o cadastro com a API.")
        }
      >
        <Text style={styles.buttonText}>Salvar turista</Text>
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
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    color: colors.text,
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 16,
    marginTop: 10,
  },
  buttonText: {
    color: colors.text,
    fontWeight: "bold",
    textAlign: "center",
  },
});