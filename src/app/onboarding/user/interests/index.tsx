import Button from "@/components/Button";
import Capsule from "@/components/Capsule";
import FormWrapper from "@/components/FormWrapper";
import OnboardingTitle from "@/components/OnboardingTitle";
import { welcome } from "@/constants/creatorRules";
import { genres } from "@/constants/genres";
import { ruler } from "@/constants/ruler";
import { router, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { View } from "react-native";

export default function Page () {
    const [selected, setSelected] = useState<string[]>([]);
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: welcome.user
        })
    }, [])


    const toggle = (id: string) =>
        setSelected(prev => prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]);

    return  <FormWrapper>
    
        <OnboardingTitle
             title="What kind of music interests you?"
             subtitle="Please select at least three types."
        />

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: ruler.small }}>
            { genres.map(item => <Capsule key={ item.id } isActive={ selected.includes(item.id) } onPress={ () => toggle(item.id) } size="lg" text={ item.label } />)}
        </View>



        <Button type="primary" disabled={ selected.length < 3 } onPress={ () => router.navigate("/onboarding/user/upsell") } label="Continue" />

    </FormWrapper>
}