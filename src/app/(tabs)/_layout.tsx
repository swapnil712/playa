import IconButton from "@/components/IconButton";
import { ruler } from "@/constants/ruler";
import { useColorTheme } from "@/context/Theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Image } from "react-native";

type TabType = {
    name: string,
    title: string,
    icon: keyof typeof Ionicons.glyphMap
}

const tabInfo : TabType[] = [
    {
        name: "listen",
        title: "Listen",
        icon: "play-circle-outline"
    },
    {
        name: "discover",
        title: "Discover",
        icon: "list-circle-outline"
    },
    {
        name: "mixtape",
        title: "Mixtape",
        icon: "musical-notes-outline"
    },
    {
        name: "profile",
        title: "Profile",
        icon: "person-circle-outline"
    }
]

const logoImage = require("@/assets/images/logo_icon_playa.png")

export default function TabsLayout () {

    const { colors } = useColorTheme()
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Playa",
            headerLeft: () => <Image source={ logoImage } style={{ width: ruler.large, height: ruler.large }} resizeMode="contain" />,
            headerRight: () => <IconButton icon="search" onPress={ () => null } />
        })
    }, [])

    return <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: colors.element.resting,
            borderTopColor: colors.border
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        sceneStyle: {
            backgroundColor: colors.background.surface
        }
    }}>
        { tabInfo.map(( item ) => <Tabs.Screen 
            key={ item.name }
            name={ item.name }
            options={{
                title: item.title,
                tabBarIcon: ({ color, size } ) => (
                    <Ionicons name={ item.icon } size={ size } color={ color } />
                )
            }}
        />)}
    </Tabs>
}