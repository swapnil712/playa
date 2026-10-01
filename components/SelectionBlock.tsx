import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useColorTheme } from "@/context/Theme";
import { ruler } from "../constants/ruler";

type Size = "lg" | "sm";

export type BlockProps = {
    isActive?: boolean,
    label: string,
    icon: keyof typeof Ionicons.glyphMap,
    subtitle?: string,
    size?: Size,
    onPress?: () => void
}

const spacing: Record<Size, { padding: number, gap: number }> = {
    lg: { padding: ruler.base, gap: ruler.tiny },
    sm: { padding: ruler.small, gap: ruler.tiny }
}

export default function SelectionBlock({ isActive, label, icon, subtitle, size = "lg", onPress }: BlockProps ) {

    const { colors } = useColorTheme()

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.block,
                spacing[size],
                { backgroundColor: colors.element.resting, borderColor: isActive ? colors.accent : colors.border }
            ]}
        >
            <Ionicons name={icon} size={ ruler.large } color={isActive ? colors.accent : colors.text}  style={{ flexShrink: 0 }}  />

            <View style={styles.textWrap}>
                <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
                {subtitle ? <Text style={[styles.subtitle, { color: colors.muted }]}>{subtitle}</Text> : null}
            </View>

            {isActive && <Ionicons name="checkmark" size={ ruler.large } color={colors.accent} style={{ flexShrink: 0 }} />}
        </TouchableOpacity>
    );
}


export function StaticBlock ( { label, icon, subtitle } : BlockProps ) {

    const { colors } = useColorTheme()

    return <View style={[ styles.block, spacing["sm"], { backgroundColor: colors.element.resting } ]}>
        <Ionicons name={icon} size={ ruler.large } color={ colors.text}  style={{ flexShrink: 0 }}  />

        <View style={styles.textWrap}>
            <Text style={[ styles.label, { color: colors.text } ]}>{ label }</Text>
            <Text style={[ styles.subtitle, { color: colors.muted } ]}>{ subtitle }</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    block: {
        gap: ruler.small,
        borderRadius: ruler.tiny,
        alignItems: "flex-start",
        flexDirection: "row",
    },
    textWrap: {
        flex: 1,
        flexDirection: "column",
        minWidth: 0
    },
    label: {
        fontSize: ruler.base,
        fontWeight: "600"
    },
    subtitle: {
        flexGrow: 1,
        flexWrap: "wrap",
        fontSize: ruler.small
    }
});