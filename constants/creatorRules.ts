import { BlockProps } from "@/components/SelectionBlock";

export const welcome = {
    artist: "Make music with Playa",
    user: "Listen to Playa"
}

export const creatorRules : BlockProps[] = [
    {
        label: "You own your music",
        subtitle: "Playa never takes ownership. It's yours, always.",
        icon: "shield-checkmark-outline"
    },
    {
        label: "Leave anytime, rights and all",
        subtitle: "Remove your songs whenever you want. The moment you do, Playa holds no rights to them going forward.",
        icon: "log-out-outline"
    },
    {
        label: "Payout is based on streams",
        subtitle: "The more you're played, the more you earn. Simple as that.",
        icon: "trending-up-outline"
    },
    {
        label: "Original work only",
        subtitle: "Upload music you made. Our team reviews content from time to time to keep things legit.",
        icon: "checkbox-outline"
    },
    {
        label: "AI content isn't monetizable",
        subtitle: "We detect AI-generated tracks by their signature, plus flags from listener reports or reviewers. AI tracks can be streamed but won't earn payouts.",
        icon: "ban-outline"
    }
]