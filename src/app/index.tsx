import { View, Text } from "react-native";
import { Link } from "expo-router";

const OnboardingScreen = () => {
  return (
    <View>
      <Text>OnboardingScreen</Text>
      <Link href="/sign-in" relativeToDirectory>
        Sign in
      </Link>
      <Link href="/sign-up" relativeToDirectory>
        Sign up
      </Link>
    </View>
  );
};

export default OnboardingScreen;
