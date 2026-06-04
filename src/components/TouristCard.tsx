import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tourist } from "../types/tourist";
import { useTheme } from "../hooks/useTheme";
import { colors } from "../constants/colors";

type TouristCardProps = {
  tourist: Tourist;
};

export function TouristCard({ tourist }: TouristCardProps) {
  const theme = useTheme();

  const statusColor =
    tourist.status === "Seguro"
      ? colors.success
      : tourist.status === "Atenção"
      ? colors.warning
      : colors.danger;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.avatar}>
          <MaterialCommunityIcons 
           name={"rocket" as any} 
           size={30} 
           color="#FFFFFF" 
        />
        </View>

        <View style={styles.info}>
          <Text style={[styles.name, { color: theme.colors.text }]}>
            {tourist.name}
          </Text>

          <Text style={[styles.subtitle, { color: theme.colors.mutedText }]}>
            {tourist.origin} → {tourist.destination}
          </Text>
        </View>

        <View style={[styles.badge, { backgroundColor: `${statusColor}22` }]}>
          <Text style={[styles.badgeText, { color: statusColor }]}>
            {tourist.status}
          </Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={[styles.statLabel, { color: theme.colors.mutedText }]}>
            Oxigênio
          </Text>
          <Text style={[styles.statValue, { color: theme.colors.text }]}>
            {tourist.oxygenLevel}%
          </Text>
        </View>

        <View style={styles.statItem}>
          <Text style={[styles.statLabel, { color: theme.colors.mutedText }]}>
            Batimentos
          </Text>
          <Text style={[styles.statValue, { color: theme.colors.text }]}>
            {tourist.heartRate} bpm
          </Text>
        </View>

        <View style={styles.statItem}>
          <Text style={[styles.statLabel, { color: theme.colors.mutedText }]}>
            Missão
          </Text>
          <Text style={[styles.statValue, { color: theme.colors.text }]}>
            {tourist.missionDays} dias
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
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
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "800",
  },
  subtitle: {
    fontSize: 13,
    marginTop: 2,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "800",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: "800",
  },
});