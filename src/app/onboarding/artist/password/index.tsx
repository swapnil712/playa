import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import Input from "@/components/Input";
import OnboardingTitle from "@/components/OnboardingTitle";
import SelectionBlock from "@/components/SelectionBlock";
import { welcome } from "@/constants/creatorRules";
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
             title="Account password"
             subtitle="Please set up a password in order to log back in."
        />

        <SelectionBlock
                   subtitle="Tap to change email address" icon="mail-open" label="you@example.com" onPress={ () => router.back() }
        />

        <Input label="Password" autoFocus={ true } autoCapitalize="none" secureTextEntry={ true } />
        <Input label="Repeat Password" autoCapitalize="none" secureTextEntry={ true } />

        <Button type="primary" onPress={ () => router.navigate("/onboarding/artist/verify") } label="Save and Continue" />

    </FormWrapper>
}