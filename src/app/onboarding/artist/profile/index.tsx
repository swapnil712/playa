import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import ImagePicker from "@/components/ImagePicker";
import Input from "@/components/Input";
import OnboardingTitle from "@/components/OnboardingTitle";
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
             title="Tell us a bit about yourself"
        />

        <ImagePicker label="Profile picture" hint="Please select a square image at least 800x800 pixels." />

        <Input label="Artist name" autoFocus={ true } autoCapitalize="words" placeholder="eg. John Smith" />
        <Input label="Email address" autoCapitalize="none" keyboardType="email-address" placeholder="eg. john@email.com" />
        <Input label="Artist Public Handle" placeholder="eg. @johnsmith" autoCapitalize="none" />

        <Input label="Bio" multiline={ true } placeholder="Tell fans who you are in a couple of sentences." />

        <Button type="primary" onPress={ () => router.navigate("/onboarding/artist/password") } label="Save and Continue" />
    
    </FormWrapper>
}