import { colorsDark, colorsLight } from "@/constants/colors";
import { useColorScheme } from "react-native";

export function useColorTheme() {
  const scheme = useColorScheme();
  const resolvedTheme = scheme === "dark" ? "dark" : "light";
  const colors = resolvedTheme === "dark" ? colorsDark : colorsLight;

  return { resolvedTheme, colors };
}