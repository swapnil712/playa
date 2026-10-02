import CategoryTitle from "@/components/CategoryTitle";
import SelectionBlock from "@/components/SelectionBlock";
import { genres } from "@/constants/genres";
import { useGlobalStyle } from "@/constants/globals";
import { ruler } from "@/constants/ruler";
import { useColorTheme } from "@/context/Theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Page () {
    const globalStyle = useGlobalStyle()
    const {colors} = useColorTheme()

    return <ScrollView>

        <View style={{ padding: ruler.tiny, gap: ruler.tiny}}>
            <SelectionBlock icon="sunny-outline" label="Most Recently Added" />
            <SelectionBlock icon="flame-outline" label="Top 100" />
        </View>

        <CategoryTitle title="Categories" />

        <View style={{ flexDirection: "row", gap: ruler.small, padding: ruler.small, flexWrap:"wrap" }}>
            { genres.map(( item, index ) => <TouchableOpacity key={ index } style={{ width: "48%"}} onPress={ () => router.navigate(`/genre/${ item.id }`) }>
                    <View style={{ borderRadius: ruler.small, backgroundColor: colors.element.resting, padding: ruler.base }}>
                        <View style={{ flexDirection: "row",justifyContent: "flex-end", width: "100%", marginBottom: ruler.small}}>
                            <Ionicons name={ item.icon } size={ ruler.large } color={ colors.muted } />
                        </View>
                    <Text style={ globalStyle.lead }>{ item.label }</Text>
                </View>
            </TouchableOpacity>)}
        </View>

    </ScrollView>
}