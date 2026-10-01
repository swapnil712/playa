import CategoryTitle from "@/components/CategoryTitle";
import SelectionBlock from "@/components/SelectionBlock";
import { ruler } from "@/constants/ruler";
import { ScrollView, View } from "react-native";

export default function Page () {
    return <ScrollView>

        <View style={{ padding: ruler.tiny, gap: ruler.tiny}}>
            <SelectionBlock icon="sunny-outline" label="Most Recently Added" />
            <SelectionBlock icon="flame-outline" label="Top 100" />
        </View>

        <CategoryTitle title="Categories" />

    </ScrollView>
}