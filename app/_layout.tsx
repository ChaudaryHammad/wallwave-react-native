import { View, Text, StatusBar, Pressable, Button } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

const RootLayout = () => {
  const navigation = useNavigation();

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
              header: ({ navigation }) => (
                <CustomHeader navigation={navigation} />
              ),
              animation: "slide_from_bottom",
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default RootLayout;

const CustomHeader = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" size={20} />
      </Pressable>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Account Info</Text>
      <View style={{ width: 40 }} />
    </View>
  );
};
