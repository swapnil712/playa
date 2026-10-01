import { useColorTheme } from "@/context/Theme";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { colors } = useColorTheme()

  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: colors.background.surface,
    },
    headerShadowVisible: false,
    headerTintColor: colors.text,
    headerBackButtonDisplayMode: "minimal",
    contentStyle: {
      backgroundColor: colors.background.surface
    }
  }} />;
}
