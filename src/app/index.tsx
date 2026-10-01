import Button from "@/components/Button";
import { ruler } from "@/constants/ruler";
import { useColorTheme } from "@/context/Theme";
import { router, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Image, Text, View } from "react-native";


const Logo = require("@/assets/images/logo_icon_playa.png");

export default function Index() {
  
  const navigation = useNavigation()
  const { colors } = useColorTheme()

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false 
    })
  }, [])

  return (
    <View style={{ flex: 1, alignItems: "center", flexDirection: "column" }}>

      <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
          <Image source={ Logo } style={{ width: 59, height: 77 }} />
        </View>

        <View style={{ padding: ruler.extraLarge, gap: ruler.base }}>
          <Text style={{ color: colors.text, fontSize: ruler.large, fontWeight: "bold", textAlign: "center" }}>Listen to the rebels</Text>
          <Text style={{ color: colors.muted, fontSize: ruler.base, textAlign: "center" }}>Playa is home to hundreds of artists who refused the label deal.</Text>
        </View>
      </View>

      <View style={{ gap: ruler.base, flexDirection: "column", width: "100%", padding: ruler.base }}>
          <Button type="primary" label="Get Started" onPress={ () => router.navigate("/onboarding") } />
          <Button type="secondary" label="Log in" onPress={ () => router.navigate("/login") } />
      </View>
    </View>
  );
}
