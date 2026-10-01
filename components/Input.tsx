import { ruler } from "@/constants/ruler";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

import { useGlobalStyle } from "@/constants/globals";
import { useColorTheme } from "@/context/Theme";
import IconButton from "./IconButton";



type IconName = keyof typeof Ionicons.glyphMap;

type Props = TextInputProps & {
    label?: string,
    leftIcon?: IconName,
    onLeftIconPress?: () => void,
    rightIcon?: IconName,
    onRightIconPress?: () => void,
    hint?: string
}

export default function Input({
    label,
    leftIcon,
    onLeftIconPress,
    rightIcon,
    onRightIconPress,
    hint,
    style,
    ...inputProps
}: Props) {

    const { colors } = useColorTheme()
    const globalStyle = useGlobalStyle()

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            gap: ruler.tiny
        },
        field: {
            flexDirection: "row",
            alignItems: "center",
            gap: ruler.tiny,
            borderRadius: ruler.tiny,
            backgroundColor: colors.element.resting,
            borderWidth: 1,
            borderColor: colors.border
        },
        input: {
            flex: 1,
            padding: ruler.small,
            color: colors.text,
            fontSize: ruler.base
        }
    });


    return (
        <View style={styles.container}>
            {!!label && <Text style={ globalStyle.para }>{label}</Text>}
            <View style={styles.field}>
                {!!leftIcon && (
                    <IconButton icon={leftIcon} onPress={onLeftIconPress} />
                )}
                <TextInput
                    placeholderTextColor={colors.muted}
                    {...inputProps}
                    style={[styles.input, style]}
                />
                {!!rightIcon && (
                    <IconButton icon={rightIcon} onPress={onRightIconPress} />
                )}
            </View>
            {!!hint && <Text style={ globalStyle.subtitle }>{hint}</Text>}
        </View>
    );

    
}
