import { StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";

export default function SpaceBackground() {
  return (
    <>
      <View style={styles.deepLayer} />

      <View style={styles.planetGlow} />
      <View style={styles.marsPlanet} />
      <View style={styles.marsShadow} />

      <View style={styles.purplePlanetGlow} />
      <View style={styles.purplePlanet} />

      <View style={styles.blueNebula} />
      <View style={styles.purpleNebula} />

      <View style={[styles.star, styles.starOne]} />
      <View style={[styles.star, styles.starTwo]} />
      <View style={[styles.star, styles.starThree]} />
      <View style={[styles.star, styles.starFour]} />
      <View style={[styles.star, styles.starFive]} />
      <View style={[styles.star, styles.starSix]} />
      <View style={[styles.star, styles.starSeven]} />
      <View style={[styles.star, styles.starEight]} />

      <View style={styles.orbitLineOne} />
      <View style={styles.orbitLineTwo} />
    </>
  );
}

const styles = StyleSheet.create({
  deepLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },

  planetGlow: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "rgba(249, 115, 22, 0.10)",
    right: -120,
    top: 20,
  },
  marsPlanet: {
    position: "absolute",
    width: 185,
    height: 185,
    borderRadius: 93,
    backgroundColor: "rgba(249, 115, 22, 0.25)",
    right: -92,
    top: 58,
    borderWidth: 1,
    borderColor: "rgba(249, 115, 22, 0.35)",
  },
  marsShadow: {
    position: "absolute",
    width: 145,
    height: 145,
    borderRadius: 73,
    backgroundColor: "rgba(6, 8, 21, 0.35)",
    right: -74,
    top: 82,
  },

  purplePlanetGlow: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "rgba(108, 92, 255, 0.10)",
    left: -82,
    bottom: 105,
  },
  purplePlanet: {
    position: "absolute",
    width: 105,
    height: 105,
    borderRadius: 53,
    backgroundColor: "rgba(108, 92, 255, 0.18)",
    left: -48,
    bottom: 130,
    borderWidth: 1,
    borderColor: "rgba(108, 92, 255, 0.28)",
  },

  blueNebula: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(34, 211, 238, 0.06)",
    right: -70,
    bottom: 230,
  },
  purpleNebula: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(232, 121, 249, 0.05)",
    left: -100,
    top: 220,
  },

  star: {
    position: "absolute",
    borderRadius: 999,
  },
  starOne: {
    width: 4,
    height: 4,
    backgroundColor: colors.secondary,
    top: 62,
    left: 48,
    opacity: 0.95,
  },
  starTwo: {
    width: 5,
    height: 5,
    backgroundColor: colors.accent,
    top: 126,
    right: 58,
    opacity: 0.9,
  },
  starThree: {
    width: 3,
    height: 3,
    backgroundColor: colors.text,
    top: 210,
    left: 34,
    opacity: 0.55,
  },
  starFour: {
    width: 4,
    height: 4,
    backgroundColor: colors.secondary,
    top: 330,
    right: 82,
    opacity: 0.75,
  },
  starFive: {
    width: 3,
    height: 3,
    backgroundColor: colors.text,
    bottom: 205,
    left: 52,
    opacity: 0.45,
  },
  starSix: {
    width: 5,
    height: 5,
    backgroundColor: colors.primary,
    bottom: 150,
    right: 38,
    opacity: 0.65,
  },
  starSeven: {
    width: 3,
    height: 3,
    backgroundColor: colors.accent,
    bottom: 320,
    right: 138,
    opacity: 0.75,
  },
  starEight: {
    width: 4,
    height: 4,
    backgroundColor: colors.text,
    top: 420,
    left: 98,
    opacity: 0.35,
  },

  orbitLineOne: {
    position: "absolute",
    width: 230,
    height: 92,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: "rgba(34, 211, 238, 0.10)",
    right: -110,
    top: 95,
    transform: [{ rotate: "-18deg" }],
  },
  orbitLineTwo: {
    position: "absolute",
    width: 180,
    height: 72,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(232, 121, 249, 0.09)",
    left: -78,
    bottom: 150,
    transform: [{ rotate: "20deg" }],
  },
});