import Capsule from "@/components/Capsule";
import CategoryTitle from "@/components/CategoryTitle";
import MusicList, { AlbumList, ArtistList } from "@/components/MusicListing";
import { artistsInFocus, hotAndTrending, noteworthyAlbums, playYourMixtape } from "@/constants/dummyMusicData";
import { genres } from "@/constants/genres";
import { useGlobalStyle } from "@/constants/globals";
import { ruler } from "@/constants/ruler";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";


export default function Page () {
    const globalStyle = useGlobalStyle()

    return <ScrollView>
        <ScrollView horizontal={ true }>
            <View style={[ globalStyle.row, { gap: ruler.tiny }] }>
                { genres.map(( item, index) => <Capsule text={ item.label } size="lg" onPress={ () => router.navigate(`/genre/${ item.id }`) } isActive={ false } key={ index } />)}
            </View>
        </ScrollView>

        <CategoryTitle title="Hot & Trending" cta={{ label: "Play all", onPress:() => null }} />
        <View style={{ paddingHorizontal: ruler.tiny, gap: ruler.small }}>
            { hotAndTrending.map(( item, index) => <MusicList key={ index } item={ item } />)}
        </View>
        
        <CategoryTitle title="Artists in Focus" cta={{ label: "Play all", onPress:() => null }} />
        <ScrollView horizontal>
            <View style={ [globalStyle.row, { paddingHorizontal: ruler.tiny} ]}>
                { artistsInFocus.map(( item, index) => <ArtistList key={ index } item={ item } />)}
            </View>
        </ScrollView>
        
        
        <CategoryTitle title="Noteworthy Albums" cta={{ label: "Play all", onPress:() => null }} />
        <ScrollView horizontal>
            <View style={ [globalStyle.row, { paddingHorizontal: ruler.tiny} ]}>
                { noteworthyAlbums.map(( item, index) => <AlbumList key={ index } item={ item } />)}
            </View>
        </ScrollView>


        <CategoryTitle title="Play Your Mixtape" cta={{ label: "Play all", onPress:() => null }} />
        <View style={{ paddingHorizontal: ruler.tiny,  gap: ruler.small  }}>
            { playYourMixtape.map(( item, index) => <MusicList key={ index } item={ item } />)}
        </View>

    </ScrollView>
}