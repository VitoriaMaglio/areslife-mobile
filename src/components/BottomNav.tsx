import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type BottomNavProps = {
  active: "inicio" | "colonia" | "turistas" | "alertas";
};

type IconName = keyof typeof Ionicons.glyphMap;

type NavItem = {
  key: BottomNavProps["active"];
  label: string;
  icon: IconName;
  route: string;
};

const items: NavItem[] = [
  {
    key: "inicio",
    label: "Início",
    icon: "home-outline",
    route: "/",
  },
  {
    key: "colonia",
    label: "Colônia",
    icon: "planet-outline",
    route: "/dashboard",
  },
  {
    key: "turistas",
    label: "Turistas",
    icon: "people-outline",
    route: "/turistas",
  },
  {
    key: "alertas",
    label: "Alertas",
    icon: "notifications-outline",
    route: "/alerts",
  },
];

export default function BottomNav({ active }: BottomNavProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        const isActive = active === item.key;

        return (
          <Pressable
            key={item.key}
            style={styles.item}
            onPress={() => router.replace(item.route as never)}
          >
            <View
              style={[
                styles.iconBox,
                isActive && styles.iconBoxActive,
              ]}
            >
              <Ionicons
                name={item.icon}
                size={21}
                color={isActive ? colors.secondary : colors.textSecondary}
              />
            </View>

            <Text style={[styles.label, isActive && styles.labelActive]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 14,
    height: 76,
    borderRadius: 26,
    backgroundColor: "rgba(7, 12, 31, 0.96)",
    borderWidth: 1,
    borderColor: "rgba(138, 147, 194, 0.22)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    shadowColor: colors.secondary,
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 10,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    flex: 1,
  },
  iconBox: {
    width: 34,
    height: 30,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBoxActive: {
    backgroundColor: "rgba(34, 211, 238, 0.13)",
  },
  label: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "700",
  },
  labelActive: {
    color: colors.secondary,
  },
});