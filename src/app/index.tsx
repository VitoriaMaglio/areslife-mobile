import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppButton from "../components/AppButton";
import BottomNav from "../components/BottomNav";
import { colors } from "../constants/colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.starOne} />
          <View style={styles.starTwo} />
          <View style={styles.starThree} />
          <View style={styles.marsPlanet} />

          <View style={styles.logoArea}>
            <View style={styles.logoOrbit}>
              <View style={styles.logoCircle}>
                <Ionicons name="rocket" size={38} color={colors.text} />
              </View>
            </View>

            <Text style={styles.logoText}>
              Ares<Text style={styles.logoHighlight}>Life</Text>
            </Text>

            <Text style={styles.tagline}>Explore. Construa. Inspire o futuro.</Text>
          </View>

          <View style={styles.welcomeBox}>
            <Text style={styles.title}>Bem-vindo à AresLife</Text>

            <Text style={styles.subtitle}>
              Gerencie sua colônia, cuide dos turistas e garanta a sobrevivência
              em Marte.
            </Text>
          </View>

          <View style={styles.cardsArea}>
            <AppButton
              title="Dashboard da Colônia"
              subtitle="Monitore sistemas e recursos da sua base em tempo real."
              icon="planet-outline"
              variant="blue"
              onPress={() => router.push("/dashboard" as never)}
            />

            <AppButton
              title="Turistas Espaciais"
              subtitle="Acompanhe a experiência e o bem-estar dos seus turistas."
              icon="people-outline"
              variant="purple"
              onPress={() => router.push("/turistas" as never)}
            />

            <AppButton
              title="Alertas do Habitat"
              subtitle="Veja avisos, falhas e eventos críticos da colônia."
              icon="notifications-outline"
              variant="orange"
              onPress={() => router.push("/alerts" as never)}
            />
          </View>
        </ScrollView>

        <BottomNav active="inicio" />
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
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 112,
  },
  starOne: {
    position: "absolute",
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.secondary,
    top: 58,
    left: 52,
    opacity: 0.9,
  },
  starTwo: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.accent,
    top: 132,
    right: 58,
    opacity: 0.85,
  },
  starThree: {
    position: "absolute",
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.text,
    top: 210,
    left: 28,
    opacity: 0.55,
  },
  marsPlanet: {
    position: "absolute",
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: "rgba(249, 115, 22, 0.18)",
    right: -105,
    top: 28,
  },
  logoArea: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 28,
  },
  logoOrbit: {
    width: 122,
    height: 122,
    borderRadius: 61,
    borderWidth: 6,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOpacity: 0.55,
    shadowRadius: 22,
    elevation: 10,
    marginBottom: 14,
  },
  logoCircle: {
    width: 98,
    height: 98,
    borderRadius: 49,
    backgroundColor: "#02030A",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  logoText: {
    color: colors.text,
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: -1,
  },
  logoHighlight: {
    color: colors.secondary,
  },
  tagline: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 6,
    letterSpacing: 1.1,
  },
  welcomeBox: {
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    color: colors.text,
    fontSize: 27,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
    textAlign: "center",
    maxWidth: 340,
  },
  cardsArea: {
    width: "100%",
  },
});