import { listType } from "@/constants/dummyMusicData";
import { useGlobalStyle } from "@/constants/globals";
import { ruler } from "@/constants/ruler";
import { useColorTheme } from "@/context/Theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import IconButton from "./IconButton";

export default function MusicList ( { item } : { item : listType }) {
     const globalStyle = useGlobalStyle()
     const { colors } = useColorTheme()

     const rowPlace = { flexDirection: "row", alignItems: "center" } as const

    return <View style={{ ...rowPlace, gap: ruler.small }}>
        <Image source={{ uri: item.image }} style={{ width: 54, height: 54, borderRadius: ruler.tiny }} />
        <View style={{ flexGrow: 1 }}>
            <View style={{ ...rowPlace, gap: ruler.tiny / 2 }}>
                { item.isExplicit && <MaterialIcons name="explicit" size={ ruler.base } color={ colors.muted } /> }
                <Text style={ globalStyle.para}>{ item.title }</Text>
                { item.isAI && <MaterialIcons name="auto-awesome" size={ ruler.base } color={ colors.alert } /> }
            </View>
            <Text style={ globalStyle.subtitle}>{ item.subtitle }</Text>
        </View>
        <IconButton icon="ellipsis-vertical-outline" />
    </View>
}



export function AlbumList ( { item } : { item : listType }) {
     const globalStyle = useGlobalStyle()

    return <View style={{ alignItems: "center" }}>
        <Image source={{ uri: item.image }} style={{ width: 130, height: 130, borderRadius: ruler.small }} />
        <View style={{ paddingTop: ruler.tiny }}>
            <Text style={[ globalStyle.para, { textAlign: "center" } ]}>{ item.title }</Text>
            <Text style={[ globalStyle.subtitle, { textAlign: "center" } ]}>{ item.subtitle }</Text>
        </View>
    </View>
}

export function ArtistList ( { item } : { item : listType }) {
    const globalStyle = useGlobalStyle()

    return <View style={{ alignItems: "center" }}>
        <Image source={{ uri: item.image }} style={{ width: 72, height: 72, borderRadius: 1000 }} />
        <View style={{ paddingTop: ruler.tiny }}>
            <Text style={[ globalStyle.para, { textAlign: "center" } ]}>{ item.title }</Text>
            <Text style={[ globalStyle.subtitle, { textAlign: "center" } ]}>{ item.subtitle }</Text>
        </View>
    </View>
}
