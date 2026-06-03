import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { useTheme } from "../hooks/useTheme";

type AppButtonProps = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" |"outline";
    style?: ViewStyle;
};

export function AppButton({ 
    title,
    onPress,
    variant = "primary",
    style,
}: AppButtonProps) {
    const theme = useTheme();

    const isOutline = variant === "outline";

    const backgroundColor = 
        variant === "primary" 
            ? theme.colors.primary
            : variant === "secondary"
            ? theme.colors.secondary
            : "transparent";

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.button,
                {
                    backgroundColor,
                    borderColor: isOutline ? theme.colors.primary : backgroundColor,
                    borderWidth: isOutline ? 1.5 : 0,
                },
                style,
            ]}
        >
            <Text   
                style={[
                    styles.text,
                    {
                     color: isOutline ? theme.colors.primary : "#FFFFFF", 
                    },
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
}   
 
const styles = StyleSheet.create({
    button: {
     width: "100%",
     paddingVertical: 14,
     paddingHorizontal: 18,
     borderRadius: 16,
     alignItems: "center",
     justifyContent: "center", 
    },
    
    text:{
        fontSize: 15,
        fontWeight: "700",
    },
});