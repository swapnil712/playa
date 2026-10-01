import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import OnboardingTitle from "@/components/OnboardingTitle";
import { StaticBlock } from "@/components/SelectionBlock";
import { creatorRules, welcome } from "@/constants/creatorRules";
import { router, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

export default function Page () {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: welcome.artist
        })
    }, [])


    return  <FormWrapper>
    
        <OnboardingTitle
         title="First things first"
         subtitle="A few things to know before you get started."
        />

        { creatorRules.map(( item, index) => <StaticBlock 
            key={ index }
            label={ item.label }
            subtitle={ item.subtitle }
            icon={ item.icon }
        />)}

        <Button type="primary" onPress={ () => router.navigate("/onboarding/artist/profile") } label="Got it, let's go!" />

    
    </FormWrapper>
}