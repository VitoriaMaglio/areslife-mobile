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
    main: "#22D3EE",
    dark: "#062B3A",
    soft: "#0B1E35",
    
  },
  purple: {
    main: "#8B5CF6",
    dark: "#241348",
    soft: "#17123A",
    
  },
  orange: {
    main: "#F97316",
    dark: "#3A1807",
    soft: "#261006",
   
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
            borderColor: current.main,
            shadowColor: current.main,
          },
        ]}
      >
        <View style={[styles.sideBar, { backgroundColor: current.main }]} />

        <View
          style={[
            styles.iconBox,
            {
              backgroundColor: current.dark,
              borderColor: current.main,
            },
          ]}
        >
          <Ionicons name={icon} size={25} color={current.main} />
        </View>

        <View style={styles.textArea}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <View style={[styles.arrowCircle, { backgroundColor: current.dark }]}>
          <Ionicons name="arrow-forward" size={18} color={current.main} />
        </View>

        <View
          style={[
            styles.cornerDetail,
            {
              borderTopColor: current.main,
              borderRightColor: current.main,
            },
          ]}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  card: {
    position: "relative",
    minHeight: 92,
    borderRadius: 24,
    borderWidth: 1.4,
    backgroundColor: "#0A1028",
    marginBottom: 15,
    paddingVertical: 14,
    paddingLeft: 18,
    paddingRight: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    overflow: "hidden",
    shadowOpacity: 0.28,
    shadowRadius: 14,
    elevation: 6,
  },
  sideBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 20,
    borderWidth: 1.3,
    alignItems: "center",
    justifyContent: "center",
  },
  textArea: {
    flex: 1,
    paddingRight: 4,
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
    lineHeight: 17,
  },
  arrowCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  cornerDetail: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 28,
    height: 28,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderTopRightRadius: 24,
  },
});