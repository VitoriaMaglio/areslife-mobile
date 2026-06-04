import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tourist } from "../types/tourist";
import { colors, gradients } from "../constants/colors";

type TouristCardProps = {
  tourist: Tourist;
};

export function TouristCard({ tourist }: TouristCardProps) {
  const statusColor =
    tourist.status === "Seguro"
      ? colors.success
      : tourist.status === "Atenção"
      ? colors.warning
      : colors.danger;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <LinearGradient colors={gradients.button} style={styles.avatar}>
          <MaterialCommunityIcons
            name={"account-astronaut" as any}
            size={28}
            color="#06091A"
          />
        </LinearGradient>

        <View style={styles.info}>
          <Text style={styles.name}>{tourist.name}</Text>
          <Text style={styles.subtitle}>
            {tourist.origin} → {tourist.destination}
          </Text>
        </View>

        <View
          style={[
            styles.badge,
            { backgroundColor: `${statusColor}22`, borderColor: `${statusColor}66` },
          ]}
        >
          <Text style={[styles.badgeText, { color: statusColor }]}>
            {tourist.status}
          </Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Oxigênio</Text>
          <Text style={[styles.statValue, { color: colors.secondary }]}>
            {tourist.oxygenLevel}%
          </Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Batimentos</Text>
          <Text style={styles.statValue}>{tourist.heartRate} bpm</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Missão</Text>
          <Text style={styles.statValue}>{tourist.missionDays} dias</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 16,
    borderRadius: 20,
    marginBottom: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800",
  },
  subtitle: {
    color: colors.textLight,
    fontSize: 13,
    marginTop: 2,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "800",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.backgroundAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 12,
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    color: colors.textLight,
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "800",
  },
});