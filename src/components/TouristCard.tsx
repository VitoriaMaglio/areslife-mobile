import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { Tourist } from "../types/tourist";

type TouristCardProps = {
  tourist: Tourist;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function TouristCard({
  tourist,
  onEdit,
  onDelete,
}: TouristCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={24} color={colors.secondary} />
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{tourist.name}</Text>
          <Text style={styles.mission}>{tourist.missionType}</Text>
        </View>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{tourist.healthStatus}</Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.detailText}>Idade: {tourist.age}</Text>
        <Text style={styles.detailText}>
          Nacionalidade: {tourist.nationality}
        </Text>
        <Text style={styles.detailText}>Bilhete: {tourist.ticketStatus}</Text>
      </View>

      <View style={styles.actions}>
        {onEdit && (
          <Pressable style={styles.editButton} onPress={onEdit}>
            <Ionicons name="create-outline" size={16} color={colors.text} />
            <Text style={styles.buttonText}>Editar</Text>
          </Pressable>
        )}

        {onDelete && (
          <Pressable style={styles.deleteButton} onPress={onDelete}>
            <Ionicons name="trash-outline" size={16} color={colors.text} />
            <Text style={styles.buttonText}>Excluir</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.borderPurple,
    padding: 16,
    marginBottom: 14,
    shadowColor: colors.primary,
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "rgba(34, 211, 238, 0.10)",
    borderWidth: 1,
    borderColor: colors.borderBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "900",
  },
  mission: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 3,
  },
  statusBadge: {
    backgroundColor: "rgba(52, 211, 153, 0.12)",
    borderWidth: 1,
    borderColor: colors.success,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  statusText: {
    color: colors.success,
    fontSize: 11,
    fontWeight: "800",
  },
  details: {
    marginTop: 14,
    gap: 4,
  },
  detailText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  editButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 11,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 6,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: colors.danger,
    paddingVertical: 11,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 6,
  },
  buttonText: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 13,
  },
});