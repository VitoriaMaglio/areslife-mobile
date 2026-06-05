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

const variantStyles = {
  blue: {
    background: "rgba(34, 211, 238, 0.12)",
    border: colors.secondary,
    icon: colors.secondary,
  },
  purple: {
    background: "rgba(108, 92, 255, 0.16)",
    border: colors.primary,
    icon: colors.primary,
  },
  orange: {
    background: "rgba(249, 115, 22, 0.15)",
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
  const current = variantStyles[variant];

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
              backgroundColor: "rgba(255,255,255,0.04)",
            },
          ]}
        >
          <Ionicons name={icon} size={25} color={current.icon} />
        </View>

        <View style={styles.textArea}>
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
    minHeight: 92,
    borderRadius: 24,
    borderWidth: 1.4,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 5,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 18,
    borderWidth: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  textArea: {
    flex: 1,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 5,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12.5,
    lineHeight: 17,
  },
});