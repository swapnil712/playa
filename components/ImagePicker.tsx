import { useGlobalStyle } from "@/constants/globals";
import { ruler } from "@/constants/ruler";
import { useColorTheme } from "@/context/Theme";
import { Ionicons } from "@expo/vector-icons";
import * as ExpoImagePicker from "expo-image-picker";
import { useMemo, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Capsule from "./Capsule";

type Props = {
    label?: string,
    hint?: string,
    onChange?: (asset: ExpoImagePicker.ImagePickerAsset | null) => void
}

export default function ImagePicker({ label, hint, onChange }: Props) {
    const { colors } = useColorTheme();
    const globalStyle = useGlobalStyle()

    const styles = useMemo(() => createStyles(colors), [colors]);
    const [image, setImage] = useState<ExpoImagePicker.ImagePickerAsset | null>(null);

    const pick = async () => {
        const result = await ExpoImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        });
        if (result.canceled) return;
        setImage(result.assets[0]);
        onChange?.(result.assets[0]);
    };

    const remove = () => {
        setImage(null);
        onChange?.(null);
    };

    return (
        <View style={{ flexDirection: "column", gap: ruler.small }}>

            {!!label && <Text style={ globalStyle.para }>{label}</Text>}

            <TouchableOpacity onPress={pick}  style={ globalStyle.row }>
                <View style={styles.square}>
                    {image
                        ? <Image source={{ uri: image.uri }} style={styles.image} />
                        : <Ionicons name="camera-outline" size={ ruler.large } color={colors.text} />}
                </View>

                <View style={styles.side}>
                    {!!hint && <Text style={ globalStyle.subtitle }>{hint}</Text>}
                    {!!image && (<Capsule isActive={ false } onPress={ remove } text="Change" />)}
                </View>

            </TouchableOpacity>
        </View>
    );
}

const createStyles = (colors: ReturnType<typeof useColorTheme>["colors"]) => StyleSheet.create({
    square: {
        width: ruler.base * 5,
        height: ruler.base * 5,
        borderRadius: ruler.tiny,
        backgroundColor: colors.element.resting,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    side: {
        flex: 1,
        gap: ruler.tiny,
        alignItems: "flex-start"
    },
    remove: {
        color: colors.accent,
        fontSize: ruler.base,
        fontWeight: "600"
    }
});
