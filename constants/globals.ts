import { useColorTheme } from "@/context/Theme";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { ruler } from "./ruler";

export function useGlobalStyle() {
    const { colors } = useColorTheme()

    return useMemo(() => StyleSheet.create({
        container : {
            padding: ruler.base,
            gap: ruler.small
        },
        row: {
            flexDirection: "row",
            alignItems: "center",
            gap: ruler.base
        },
        lead : {
            fontSize: ruler.medium,
            fontWeight: "bold",
            color: colors.text
        },
        para : {
            fontSize: ruler.base,
            color: colors.text
        },
        subtitle : {
            fontSize: ruler.small,
            color: colors.muted
        }
    }), [colors])
}
