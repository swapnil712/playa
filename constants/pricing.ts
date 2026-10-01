import { ButtonProps } from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";

export type PricingBoxType = {
  title: string;
  bigTitle: string;
  subtitle: string;
  price: string;
  duration: string;
  isRecommended: boolean;
  isHighlighted: boolean;
  cta?: ButtonProps;
  includes: { icon: keyof typeof Ionicons.glyphMap; label: string }[];
};



export const pricingPlans: PricingBoxType[] = [
  {
    title: "Playa Plus",
    bigTitle: "Everything Essential",
    subtitle: "Stream freely, your way",
    price: "$2.99",
    duration: "/month",
    isRecommended: true,
    isHighlighted: true,
    cta: {
      label: "Get Essentials",
      type: "primary",
      onPress: () => null
    },
    includes: [
      { icon: "play-circle-outline", label: "Unlimited streaming" },
      { icon: "thumbs-up-outline", label: "Like tracks and get recommended better" },
      { icon: "bookmark-outline", label: "Create unlimited playlists" },
      { icon: "person-add-outline", label: "Follow your favorite artists" },
    ],
  },
  {
    title: "Playa Pro",
    bigTitle: "Next Level",
    subtitle: "For the die-hard fan in you",
    price: "$4.99",
    duration: "/month",
    isRecommended: false,
    isHighlighted: false,
    cta: {
      label: "Get Pro",
      type: "secondary",
      onPress: () => null
    },
    includes: [
      { icon: "add", label: "Everything in Plus, plus:" },
      { icon: "chatbox-ellipses-outline", label: "Comment on tracks and join the conversation" },
      { icon: "musical-notes-outline", label: "High-quality / lossless streaming" },
      { icon: "car-outline", label: "CarPlay & Android Auto support" },
      { icon: "star-outline", label: "Early access to new releases from artists you follow" },
    ],
  },
];