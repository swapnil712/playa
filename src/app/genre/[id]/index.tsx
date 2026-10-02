import { genres } from "@/constants/genres";
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from "react";
import { ActivityIndicator } from "react-native";

export default function Page () {
    const { id } = useLocalSearchParams<{ id: string }>();
    const navigation = useNavigation()
    const activeGenre = id ? genres.find( ix => ix.id === id )?.label : ""

    useLayoutEffect(() => {
        navigation.setOptions({
            title: activeGenre
        })
    }, [ id ])

    return <ActivityIndicator />
}