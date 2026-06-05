import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type IconName = keyof typeof Ionicons.glyphMap;

type AppButtonProps = {
  title: string;
  subtitle: string;
  icon: IconName;
  variant?: "blue" | "purple" | "orange";
  onPress: () => void;
};

const variants = {
  blue: {
    background: "rgba(34, 211, 238, 0.12)",
    content: "rgba(3, 22, 38, 0.72)",
    border: colors.secondary,
    icon: colors.secondary,
  },
  purple: {
    background: "rgba(108, 92, 255, 0.16)",
    content: "rgba(23, 18, 62, 0.72)",
    border: colors.primary,
    icon: colors.primary,
  },
  orange: {
    background: "rgba(249, 115, 22, 0.16)",
    content: "rgba(58, 25, 10, 0.72)",
    border: colors.orange,
    icon: colors.orange,
  },
};

export default function AppButton({
  title,
  subtitle,
  icon,
  variant = "blue",
  onPress,
}: AppButtonProps) {
  const current = variants[variant];

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: current.background,
            borderColor: current.border,
            shadowColor: current.border,
          },
        ]}
      >
        <View
          style={[
            styles.iconBox,
            {
              borderColor: current.border,
              backgroundColor: "rgba(255, 255, 255, 0.04)",
            },
          ]}
        >
          <Ionicons name={icon} size={24} color={current.icon} />
        </View>

        <View style={[styles.textArea, { backgroundColor: current.content }]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color={colors.textSecondary} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  card: {
    minHeight: 86,
    borderRadius: 24,
    borderWidth: 1.4,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    shadowOpacity: 0.32,
    shadowRadius: 13,
    elevation: 5,
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 18,
    borderWidth: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  textArea: {
    flex: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  title: {
    color: colors.text,
    fontSize: 15.5,
    fontWeight: "900",
    marginBottom: 4,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 11.5,
    lineHeight: 16,
  },
});