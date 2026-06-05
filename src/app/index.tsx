import { router } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppButton from "../components/AppButton";
import BottomNav from "../components/BottomNav";
import SpaceBackground from "../components/SpaceBackground";
import { colors } from "../constants/colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <SpaceBackground />

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logoArea}>
            <Image
              source={require("../../assets/images/logo-1.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.welcomeBox}>
            <Text style={styles.title}>Bem-vindo{"\n"}à AresLife</Text>

            <Text style={styles.subtitle}>
              Sua jornada começa aqui. Gerencie sua colônia, cuide dos turistas
              e garanta a sobrevivência em Marte.
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
    overflow: "hidden",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 112,
    justifyContent: "center",
  },
  logoArea: {
    alignItems: "center",
    marginTop: 4,
    marginBottom: 18,
  },
  logoImage: {
    width: 185,
    height: 185,
  },
  welcomeBox: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 36,
    marginBottom: 10,
    letterSpacing: -0.6,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13.5,
    lineHeight: 20,
    textAlign: "center",
    maxWidth: 320,
  },
  cardsArea: {
    width: "100%",
  },
});