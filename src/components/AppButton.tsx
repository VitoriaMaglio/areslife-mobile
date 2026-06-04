import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type IconName = keyof typeof Ionicons.glyphMap;

type AppButtonProps = {
  title: string;
  subtitle?: string;
  icon: IconName;
  variant?: "blue" | "purple" | "orange";
  onPress: () => void;
};

const gradientByVariant = {
  blue: ["rgba(14,165,233,0.35)", "rgba(14,165,233,0.08)"],
  purple: ["rgba(168,85,247,0.35)", "rgba(168,85,247,0.08)"],
  orange: ["rgba(249,115,22,0.35)", "rgba(249,115,22,0.08)"],
};

const borderByVariant = {
  blue: colors.borderBlue,
  purple: colors.borderPurple,
  orange: colors.borderOrange,
};

const iconByVariant = {
  blue: colors.primary,
  purple: colors.purple,
  orange: colors.orange,
};

export default function AppButton({
  title,
  subtitle,
  icon,
  variant = "blue",
  onPress,
}: AppButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      <LinearGradient
        colors={gradientByVariant[variant] as [string, string]}
        style={[
          styles.container,
          {
            borderColor: borderByVariant[variant],
            shadowColor: borderByVariant[variant],
          },
        ]}
      >
        <View
          style={[
            styles.iconBox,
            {
              borderColor: borderByVariant[variant],
              backgroundColor: `${iconByVariant[variant]}20`,
            },
          ]}
        >
          <Ionicons name={icon} size={24} color={iconByVariant[variant]} />
        </View>

        <View style={styles.textBox}>
          <Text style={styles.title}>{title}</Text>

          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        <Ionicons name="chevron-forward" size={22} color={colors.textSecondary} />
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
  },
  container: {
    minHeight: 92,
    borderRadius: 22,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 6,
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    flex: 1,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 4,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 17,
  },
});