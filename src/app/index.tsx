import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors, gradients } from "../constants/colors";

const navItems = [
  {
    title: "Dashboard da Colônia",
    description: "Monitore sistemas e recursos da sua base em tempo real.",
    icon: "grid",
    color: colors.secondary, // ciano
    route: "/dashboard",
  },
  {
    title: "Turistas Espaciais",
    description: "Acompanhe a experiência e o bem-estar dos seus turistas.",
    icon: "people",
    color: colors.primary, // roxo
    route: "/turistas",
  },
  {
    title: "Alertas do Habitat",
    description: "Veja avisos, falhas e eventos críticos da colônia.",
    icon: "notifications",
    color: colors.warning, // laranja
    route: "/alerts",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={gradients.space}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/images/logo-1.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.welcome}>Bem-vindo a AresLife</Text>
        <Text style={styles.subtitle}>
          Sua jornada começa aqui. Gerencie sua colônia, cuide dos turistas e
          garanta a sobrevivência em Marte.
        </Text>

        {navItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            activeOpacity={0.85}
            onPress={() => router.push(item.route as any)}
            style={[
              styles.card,
              { borderColor: `${item.color}55`, shadowColor: item.color },
            ]}
          >
            <View
              style={[
                styles.iconBox,
                {
                  backgroundColor: `${item.color}1A`,
                  borderColor: `${item.color}66`,
                },
              ]}
            >
              <Ionicons name={item.icon as any} size={24} color={item.color} />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textLight}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
  },
  logo: { width: 200, height: 200, marginBottom: 8 },
  welcome: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: colors.textLight,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 32,
    paddingHorizontal: 8,
  },
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardText: { flex: 1 },
  cardTitle: { color: colors.text, fontSize: 16, fontWeight: "800" },
  cardDesc: {
    color: colors.textLight,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 3,
  },
});
