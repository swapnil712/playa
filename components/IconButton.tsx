import { useColorTheme } from "@/context/Theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const { colors } = useColorTheme()

type IconType = {
    icon:  keyof typeof Ionicons.glyphMap,
    onPress?: () => void
}

export default function IconButton ( { icon, onPress } : IconType ) {
    return <Pressable onPress={ onPress }>
        <Ionicons name={ icon } size={ 24 } color={ colors.text } />
    </Pressable>
}