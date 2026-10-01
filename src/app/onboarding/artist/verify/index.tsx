import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import OnboardingTitle from "@/components/OnboardingTitle";
import SelectionBlock from "@/components/SelectionBlock";
import { welcome } from "@/constants/creatorRules";
import { useColorTheme } from "@/context/Theme";
import { useNavigation } from "expo-router";
import * as WebBrowser from 'expo-web-browser';
import { useLayoutEffect, useState } from "react";

export default function Page () {

    const [method, setMethod] = useState<string | undefined>(undefined)
    const navigation = useNavigation()
    const { colors } = useColorTheme()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: welcome.artist
        })
    }, [])
    
    const handleSelection = async () => {
        
        let preferredURL = method === "google" ? "https://google.com" : "https://veriff.com"

        await WebBrowser.openBrowserAsync(preferredURL, {
            presentationStyle: WebBrowser.WebBrowserPresentationStyle.PAGE_SHEET, // iOS only
            toolbarColor: colors.background.surface,
            controlsColor: colors.text,
        });
    }


    return  <FormWrapper>
    
        <OnboardingTitle
             title="Let’s get you verified"
             subtitle="Remember to verify before you publish your first track."
        />

        <SelectionBlock
            onPress={ () => setMethod("google") }
            icon="logo-google"
            isActive={ method === "google" }
            label="Connect your Google Account"
            subtitle="We match your handle to your artist name."
            />
        
        <SelectionBlock
            onPress={ () => setMethod("id-check") }
            icon="id-card"
            isActive={ method === "id-check" }
            label="Run and automated ID Check"
            subtitle="Scan a government ID. Takes about a minute."
            />

        <Button type="primary" disabled={ !method } onPress={ () => handleSelection() } label="Continue" />
        <Button type="secondary" onPress={ () => null } label="I'll do this later" />

    </FormWrapper>
}