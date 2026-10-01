import Button from "@/components/Button";
import Input from "@/components/Input";
import { useGlobalStyle } from "@/constants/globals";
import { router, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { View } from "react-native";



export default function Index() {
  
  const globalStyle = useGlobalStyle()
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Log in"
    })
  }, [])

  return (
    <View style={ globalStyle.container }>
        <Input label="Email address" placeholder="eg. john@email.com" autoCapitalize="none" autoFocus={ true } keyboardType="email-address" />
        <Input label="Password" secureTextEntry={ true } autoCapitalize="none" />

        <Button type="primary" onPress={ () => [ router.dismissAll(), router.replace("/(tabs)/listen")] } label="Log in" />
    </View>
  );
}
