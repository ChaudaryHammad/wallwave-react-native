import { Platform, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabHeader } from "../components/Header/TabHeader";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { ThemeProvider, useTheme } from "../context/ThemeContext"; // ThemeProvider and useTheme imported
import * as SecureStore from "expo-secure-store";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export const RootLayout = () => {
  return (
    <ThemeProvider>
      <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
        <ClerkLoaded>
          <RootContent />
        </ClerkLoaded>
      </ClerkProvider>
    </ThemeProvider>
  );
};

const RootContent = () => {
  const { currentTheme } = useTheme(); // Now inside the ThemeProvider

  const { isLoaded, isSignedIn } = useAuth();
  const segment = useSegments();
  const router = useRouter();
  useEffect(() => {
    if (!isLoaded) return;

    const inPublicGroup = segment[0] === "(public)";
    if (!inPublicGroup && isSignedIn) {
      router.replace("/");
    } else if (!isSignedIn) {
      router.replace("/sign-in");
    }

    // Force updating StatusBar style based on theme
    StatusBar.setBarStyle(
      currentTheme === "dark" ? "light-content" : "dark-content",
      true // Immediate effect
    );

    // Dependency array ensures the StatusBar updates whenever the theme changes
    if (Platform.OS === "android") {
      // Set background color according to the theme
      StatusBar.setBackgroundColor(
        currentTheme === "dark" ? "#000000" : "#FFFFFF",
        true
      );
    }
  }, [currentTheme, isSignedIn]);
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <GestureHandlerRootView style={{ flexGrow: 1 }}>
        <StatusBar
          barStyle={currentTheme === "dark" ? "dark-content" : "light-content"}
        />
        <Stack
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        >
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
              headerTitleAlign: "center",
              headerTitle: "tabs",
            }}
          />

          <Stack.Screen
            name="(public)"
            options={{
              headerShown: false,
              headerTitleAlign: "center",
              headerTitle: "tabs",
            }}
          />

          <Stack.Screen
            name="(nobottombar)/accountInfo"
            options={{
              header: ({ navigation }) => <TabHeader navigation={navigation} />,
              animation: "slide_from_bottom",
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
