import { useGlobalStyle } from "@/constants/globals";
import { useColorTheme } from "@/context/Theme";
import { Text, View } from "react-native";
import { ruler } from "../constants/ruler";


type OnboardingTitleType = {
    title: string,
    subtitle?: string
}

export default function OnboardingTitle ( { title, subtitle } : OnboardingTitleType) {
    const globalStyle = useGlobalStyle()
    const { colors } = useColorTheme()

    return <View style={{ flexDirection: "column", gap: ruler.tiny }}>
        <Text style={{ color: colors.text, fontSize: ruler.large, fontWeight: "bold" }}>{ title }</Text>
        { subtitle && <Text style={ globalStyle.subtitle }>{ subtitle }</Text> }
    </View>
}