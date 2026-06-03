import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ResourceCard } from "../components/ResourceCard";
import { TouristCard } from "../components/TouristCard";
import { AppButton } from "../components/AppButton";
import { resources, tourists } from "../services/api";
import { useTheme } from "../hooks/useTheme";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        AresLife 🚀
      </Text>

      <Text style={[styles.subtitle, { color: theme.colors.mutedText }]}>
        Plataforma de simulação de colonização espacial e turismo em Marte.
      </Text>

      <AppButton
        title="Iniciar monitoramento"
        onPress={() => console.log("Monitoramento iniciado")}
      />

      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
        Recursos do Habitat
      </Text>

      <View style={styles.resourcesGrid}>
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </View>

      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
        Turistas e Astronautas
      </Text>

      {tourists.map((tourist) => (
        <TouristCard key={tourist.id} tourist={tourist} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 24,
    marginBottom: 14,
  },
  resourcesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});