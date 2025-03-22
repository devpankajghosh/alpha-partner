import { View, Text, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

const OnboardingScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async function loadFonts() {
      await Font.loadAsync({
        "Inter-Regular": require("../assets/fonts/Inter/Inter-Regular.ttf"),
        "Inter-Medium": require("../assets/fonts/Inter/Inter-Medium.ttf"),
        "Inter-SemiBold": require("../assets/fonts/Inter/Inter-SemiBold.ttf"),
        "Inter-Bold": require("../assets/fonts/Inter/Inter-Bold.ttf"),

        "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),

        "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
      });

      setFontsLoaded(true);
    })();
  }, []);

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-background">
        <ActivityIndicator size="large" color="#2D9CDB" />
      </View>
    );
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-3xl text-center font-[Inter-Bold] text-textPrimary">
        Welcome, Physiotherapist!
      </Text>
      <Text className="text-2xl text-center font-[Inter-SemiBold]">
        Onboarding Screen
      </Text>
      <Link href="/sign-in" className="mt-4 text-blue-500 text-2xl">
        Sign in
      </Link>
      <Link href="/sign-up" className="mt-2 text-blue-500 text-2xl">
        Sign up
      </Link>
    </View>
  );
};

export default OnboardingScreen;
