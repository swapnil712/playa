import { ruler } from "@/constants/ruler";
import { useColorTheme } from "@/context/Theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


type ButtonType = "primary" | "secondary" | "tertiary";

export type ButtonProps = {
    label: string,
    disabled?: boolean,
    onPress: () => void,
    type: ButtonType
}


export default function Button({ label, onPress, disabled, type }: ButtonProps) {
    const { colors } = useColorTheme()

    const backgroundColors: Record<ButtonType, string> = {
        primary: colors.accent,
        secondary: colors.element.resting,
        tertiary: "transparent"
    }

    const labelColors: Record<ButtonType, string> = {
        primary: colors.permanent.white,
        secondary: colors.text,
        tertiary: colors.text
    }

    const buttonWrap = <View
            style={[styles.button, { backgroundColor: backgroundColors[type] }]}
        >
            <Text style={[styles.label, { color: labelColors[type] }]}>{label}</Text>
        </View>

    if ( disabled ) {
        return <View style={{ opacity: 0.4 }}>{ buttonWrap }</View>
    }

    return (
        <TouchableOpacity onPress={onPress}>
            { buttonWrap }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        padding: ruler.base,
        borderRadius: ruler.tiny,
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        fontSize: ruler.base,
        textAlign: "center",
        fontWeight: "600"
    }
});
