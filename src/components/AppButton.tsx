import { Ionicons } from "@expo/vector-icons";
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

const backgroundByVariant = {
  blue: "rgba(34, 211, 238, 0.10)",
  purple: "rgba(108, 92, 255, 0.14)",
  orange: "rgba(249, 115, 22, 0.12)",
};

const borderByVariant = {
  blue: colors.borderBlue,
  purple: colors.borderPurple,
  orange: colors.borderOrange,
};

const iconByVariant = {
  blue: colors.blue,
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
      <View
        style={[
          styles.container,
          {
            backgroundColor: backgroundByVariant[variant],
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
              backgroundColor: `${iconByVariant[variant]}22`,
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
      </View>
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