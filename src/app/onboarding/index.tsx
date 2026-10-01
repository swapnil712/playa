import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import OnboardingTitle from "@/components/OnboardingTitle";
import SelectionBlock from "@/components/SelectionBlock";
import { router, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";



export default function Index() {

  const [active, setActive] = useState<string|undefined>(undefined)
  
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Get Started"
    })
  }, [])

  return (
    <FormWrapper>

      <OnboardingTitle
        title="How do you want to use Playa?"
      />

      <SelectionBlock
        isActive={ active === "listen" }
        onPress={ () => setActive("listen") }
        icon="musical-note"
        label="I’m here to listen"
        subtitle="Follow artists, save tracks and build playlists."
      />

      <SelectionBlock
        icon="person"
         onPress={ () => setActive("artist") }
        isActive={ active === "artist" }
        label="I am an artist"
        subtitle="Upload music, earn revenue and reach fans directly."
      />


      <Button disabled={ !active } onPress={ () => router.navigate( active === "listen" ? "/onboarding/user/profile" : "/onboarding/artist/disclaimer" ) } label="Continue to Next Step" type="primary" />
    </FormWrapper>
  );
}
