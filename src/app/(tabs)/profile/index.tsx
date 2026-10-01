import { useColorTheme } from "@/context/Theme";
import { Text } from "react-native";

export default function Page () {
    const {colors} = useColorTheme()
    return <Text style={{ color: colors.text }}>Profile</Text>
}