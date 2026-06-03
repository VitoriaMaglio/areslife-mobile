import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Resource } from "../services/api";
import { useTheme } from "../hooks/useTheme";
import { colors } from "../constants/colors";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const theme = useTheme();

  const statusColor =
    resource.status === "Bom"
      ? colors.success
      : resource.status === "Atenção"
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
      <View style={[styles.iconBox, { backgroundColor: `${statusColor}22` }]}>
        <MaterialCommunityIcons
          name={resource.icon as any}
          size={26}
          color={statusColor}
        />
      </View>

      <View style={styles.content}>
        <Text style={[styles.name, { color: theme.colors.text }]}>
          {resource.name}
        </Text>

        <Text style={[styles.value, { color: theme.colors.text }]}>
          {resource.value}
          {resource.unit}
        </Text>

        <Text style={[styles.status, { color: statusColor }]}>
          {resource.status}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 14,
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  content: {
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
  },
  value: {
    fontSize: 24,
    fontWeight: "800",
  },
  status: {
    fontSize: 13,
    fontWeight: "700",
  },
});