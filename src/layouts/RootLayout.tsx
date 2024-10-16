import { Platform, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabHeader } from "../components/Header/TabHeader";

import { ThemeProvider, useTheme } from "../context/ThemeContext"; // ThemeProvider and useTheme imported

export const RootLayout = () => {
  return (
    <ThemeProvider>
      <RootContent />
    </ThemeProvider>
  );
};

const RootContent = () => {
  const { currentTheme } = useTheme(); // Now inside the ThemeProvider

  useEffect(() => {
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
  }, [currentTheme]);
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <GestureHandlerRootView style={{ flexGrow: 1 }}>
        <StatusBar
          barStyle={currentTheme === "dark" ? "dark-content" : "light-content"}
        />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "red",
            },
          }}
          initialRouteName=""
        >
          <Stack.Screen
            name="(tabs)"
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
