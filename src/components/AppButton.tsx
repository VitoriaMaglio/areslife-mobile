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
    background: "rgba(0, 188, 212, 0.18)",
    border: "#22D3EE",
    glow: "rgba(34, 211, 238, 0.35)",
    iconBackground: "rgba(34, 211, 238, 0.10)",
    icon: "#22D3EE",
  },
  purple: {
    background: "rgba(108, 92, 255, 0.20)",
    border: "#6C5CFF",
    glow: "rgba(108, 92, 255, 0.38)",
    iconBackground: "rgba(108, 92, 255, 0.12)",
    icon: "#8B7CFF",
  },
  orange: {
    background: "rgba(249, 115, 22, 0.20)",
    border: "#F97316",
    glow: "rgba(249, 115, 22, 0.38)",
    iconBackground: "rgba(249, 115, 22, 0.12)",
    icon: "#F97316",
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
            styles.innerGlow,
            {
              backgroundColor: current.glow,
            },
          ]}
        />

        <View
          style={[
            styles.iconBox,
            {
              borderColor: current.border,
              backgroundColor: current.iconBackground,
            },
          ]}
        >
          <Ionicons name={icon} size={24} color={current.icon} />
        </View>

        <View style={styles.textArea}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <View style={styles.arrowBox}>
          <Ionicons
            name="chevron-forward"
            size={23}
            color={colors.textSecondary}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  card: {
    minHeight: 88,
    borderRadius: 24,
    borderWidth: 1.6,
    paddingHorizontal: 16,
    paddingVertical: 13,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    overflow: "hidden",
    shadowOpacity: 0.42,
    shadowRadius: 13,
    elevation: 6,
  },
  innerGlow: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    right: -50,
    top: -38,
    opacity: 0.18,
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 18,
    borderWidth: 1.3,
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
    fontSize: 12,
    lineHeight: 16,
  },
  arrowBox: {
    width: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});