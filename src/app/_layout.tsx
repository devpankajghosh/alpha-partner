import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

const RootLayout = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Slot />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default RootLayout;
