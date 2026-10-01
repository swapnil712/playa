import { useGlobalStyle } from "@/constants/globals";
import { PricingBoxType } from "@/constants/pricing";
import { ruler } from "@/constants/ruler";
import { useColorTheme } from "@/context/Theme";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Button from "./Button";
import Capsule from "./Capsule";

export default function PricingBox ( { item } : { item : PricingBoxType }) {
    const { colors } = useColorTheme()
    const globalStyle = useGlobalStyle()

    return <View style={{ backgroundColor: colors.element.resting, borderWidth: item.isHighlighted ? 2 : 1, borderColor: item.isHighlighted ? colors.accent : colors.border, gap: ruler.tiny, padding: ruler.medium, borderRadius: ruler.base }}>
        
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: ruler.base }}>
            <Text style={[ globalStyle.para, { fontWeight: "bold", flexGrow: 1, color: colors.accent } ]}>{ item.title }</Text>
            { item.isRecommended && <Capsule size="sm" isActive={ false } text="Recommended" />}
        </View>
        <Text style={{ color: colors.text, fontSize: ruler.large, fontWeight: "bold" }}>{ item.bigTitle }</Text>
        <Text style={ globalStyle.subtitle }>{ item.subtitle }</Text>

        { item.cta && <Button label={ item.cta.label } type={ item.cta.type } onPress={ () => null } /> }

        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: ruler.small }}>
            <Text style={ globalStyle.lead }>{ item.price }</Text>
            <Text style={ globalStyle.subtitle }>{ item.duration }</Text>
        </View>

        <Text style={ globalStyle.subtitle }>Includes</Text>

        <View style={{ flexDirection: "column", gap: ruler.small }}>
            { item.includes.map(( inc, index) => <View key={ index } style={ [globalStyle.row, { alignItems: "flex-start", width: "100%", flexGrow: 1 }] }>
                <Ionicons name={ inc.icon } size={ ruler.medium } color={ colors.muted } />
                <Text style={[ globalStyle.para, { flex: 1 }] }>{ inc.label }</Text>
            </View>)}
        </View>


    </View>
}