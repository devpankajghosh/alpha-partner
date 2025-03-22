import { useEffect } from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <Slot />
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
};

export default RootLayout;
