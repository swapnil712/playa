import { useGlobalStyle } from "@/constants/globals";
import { ruler } from "@/constants/ruler";
import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

export default function FormWrapper ( { children } : { children : ReactNode }) {
    const globalStyle = useGlobalStyle()

    return <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={ Platform.OS === "ios" ? "padding" : "height" }
        keyboardVerticalOffset={ Platform.OS === "ios" ? ruler.base * 4 : 0 }
    >
        <ScrollView
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            automaticallyAdjustKeyboardInsets
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={ globalStyle.container}>
                { children }
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
}