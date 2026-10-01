import { Platform } from "react-native";

const baseValue = Platform.OS === "ios" ? 17 : 16

export const ruler = {
    base: baseValue,
    small : baseValue / 1.15,
    tiny: baseValue / 2,
    medium: baseValue * 1.15,
    large: baseValue * 1.5,
    extraLarge: baseValue * 2
}