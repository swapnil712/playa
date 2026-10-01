import { useColorTheme } from "@/context/Theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ruler } from "../constants/ruler";


type Size = "lg" | "sm";

type Props = {
    text: string,
    isActive: boolean,
    size?: Size,
    onPress?: () => void
}

export default function Capsule({ text, isActive, size = "lg", onPress }: Props) {

    const { colors } = useColorTheme()

    const spacing: Record<Size, { gap: number, padding?: number, paddingVertical?: number, paddingHorizontal?: number }> = {
        lg: { gap: 0, padding: ruler.base },
        sm: { gap: 0, paddingVertical: ruler.tiny / 2, paddingHorizontal: ruler.tiny }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.capsule,
                spacing[size],
                { backgroundColor: isActive ? colors.text : colors.background.container }
            ]}
        >
            <Text style={[styles.text, { color: isActive ? colors.background.surface : colors.text }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    capsule: {
        borderRadius: 999,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start"
    },
    text: {
        fontSize: ruler.base,
        fontWeight: "600"
    }
});
