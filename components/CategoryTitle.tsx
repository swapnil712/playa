import Capsule from "@/components/Capsule";
import { useGlobalStyle } from "@/constants/globals";
import { ruler } from "@/constants/ruler";
import { useColorTheme } from "@/context/Theme";
import { Text, View } from "react-native";


export default function CategoryTitle ( { title, cta } : { title : string, cta?: { label: string, onPress: () => void }}) {
    const globalStyle = useGlobalStyle()
    const { colors } = useColorTheme()

    return <View style={ [globalStyle.row, { paddingHorizontal: ruler.tiny, paddingVertical: ruler.base } ]}>
        <Text style={[ globalStyle.lead, { flexGrow: 1, color: colors.accent  } ]}>{ title }</Text>
        { cta && <Capsule size="sm" text={ cta.label } isActive={ false } />}
    </View>
}