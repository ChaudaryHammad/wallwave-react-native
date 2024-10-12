import { StatusBar } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabHeader } from "../components/Header/TabHeader";

export const RootLayout = () => {
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <GestureHandlerRootView style={{ flexGrow: 1 }}>
        <StatusBar barStyle="dark-content" />
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
