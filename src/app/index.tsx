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
import { colors } from "../constants/colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.starsOne} />
        <View style={styles.starsTwo} />
        <View style={styles.marsGlow} />

        <View style={styles.logoArea}>
          <View style={styles.logoCircle}>
            <View style={styles.logoInner}>
              <Ionicons name="rocket" size={42} color={colors.text} />
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
            Gerencie sua colônia, acompanhe turistas espaciais e monitore os
            alertas do habitat em Marte.
          </Text>
        </View>

        <View style={styles.cardsArea}>
          <AppButton
            title="Dashboard da Colônia"
            subtitle="Monitore oxigênio, água, energia e temperatura da base."
            icon="planet-outline"
            variant="blue"
            onPress={() => router.push("/dashboard")}
          />

          <AppButton
            title="Turistas Espaciais"
            subtitle="Acompanhe visitantes, missões e status de saúde."
            icon="people-outline"
            variant="purple"
            onPress={() => router.push("/turistas")}
          />

          <AppButton
            title="Alertas do Habitat"
            subtitle="Veja avisos, falhas e eventos críticos da colônia."
            icon="warning-outline"
            variant="orange"
            onPress={() => router.push("/alerts")}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <Ionicons name="radio-outline" size={18} color={colors.secondary} />
            <Text style={styles.footerText}>Controle em tempo real</Text>
          </View>

          <View style={styles.footerItem}>
            <Ionicons
              name="shield-checkmark-outline"
              size={18}
              color={colors.success}
            />
            <Text style={styles.footerText}>Segurança da base</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
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
    paddingTop: 30,
    paddingBottom: 32,
  },
  starsOne: {
    position: "absolute",
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.secondary,
    top: 70,
    left: 42,
    opacity: 0.9,
  },
  starsTwo: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.accent,
    top: 145,
    right: 52,
    opacity: 0.8,
  },
  marsGlow: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(249, 115, 22, 0.14)",
    right: -80,
    top: 40,
  },
  logoArea: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 36,
  },
  logoCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    backgroundColor: colors.primary,
    shadowColor: colors.glow,
    shadowOpacity: 0.5,
    shadowRadius: 22,
    elevation: 10,
  },
  logoInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
  },
  logoText: {
    color: colors.text,
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  logoHighlight: {
    color: colors.secondary,
  },
  tagline: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 6,
    letterSpacing: 1.2,
  },
  welcomeBox: {
    marginBottom: 28,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  cardsArea: {
    width: "100%",
  },
  footer: {
    marginTop: 18,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 18,
    gap: 12,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  footerText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});