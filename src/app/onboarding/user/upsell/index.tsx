import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import OnboardingTitle from "@/components/OnboardingTitle";
import PricingBox from "@/components/PricingBox";
import { welcome } from "@/constants/creatorRules";
import { pricingPlans } from "@/constants/pricing";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

export default function Page () {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: welcome.user
        })
    }, [])

    return  <FormWrapper>
    
        <OnboardingTitle
             title="Support your artists"
             subtitle="Playa works best when you get the best experience and the artists you love are incentivized to keep making great music."
        />

        { pricingPlans.map(( item, index) => <PricingBox key={ index } item={ item } /> )}

        <Button type="secondary" onPress={ () => null } label="I'll do this later" />

    </FormWrapper>
}