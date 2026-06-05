import { StyleSheet, View } from "react-native";

export default function SpaceBackground() {
  return (
    <>
      {/* Estrelas */}
      <View style={[styles.star, { top: 70, left: 36, width: 4, height: 4 }]} />
      <View style={[styles.starBlue, { top: 120, right: 50, width: 5, height: 5 }]} />
      <View style={[styles.starPink, { top: 210, left: 62, width: 3, height: 3 }]} />
      <View style={[styles.star, { top: 320, right: 84, width: 4, height: 4 }]} />
      <View style={[styles.starBlue, { top: 470, left: 28, width: 3, height: 3 }]} />
      <View style={[styles.starPink, { bottom: 210, right: 34, width: 4, height: 4 }]} />
      <View style={[styles.star, { bottom: 130, left: 54, width: 3, height: 3 }]} />

      {/* Planeta grande no topo direito */}
      <View style={styles.bigPlanet} />
      <View style={styles.bigPlanetGlow} />

      {/* Planeta pequeno no canto inferior esquerdo */}
      <View style={styles.smallPlanet} />

      {/* Glows decorativos */}
      <View style={styles.blueGlow} />
      <View style={styles.purpleGlow} />
    </>
  );
}

const styles = StyleSheet.create({
  star: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "#EAF0FF",
    opacity: 0.8,
  },
  starBlue: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "#22D3EE",
    opacity: 0.9,
  },
  starPink: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "#E879F9",
    opacity: 0.9,
  },

  bigPlanet: {
    position: "absolute",
    top: 35,
    right: -85,
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(249, 115, 22, 0.22)",
  },
  bigPlanetGlow: {
    position: "absolute",
    top: 15,
    right: -110,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "rgba(249, 115, 22, 0.08)",
  },

  smallPlanet: {
    position: "absolute",
    bottom: 90,
    left: -45,
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "rgba(108, 92, 255, 0.16)",
  },

  blueGlow: {
    position: "absolute",
    bottom: 220,
    right: -40,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(34, 211, 238, 0.08)",
  },

  purpleGlow: {
    position: "absolute",
    top: 260,
    left: -60,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(108, 92, 255, 0.07)",
  },
});