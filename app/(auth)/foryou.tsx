import { View, Text, Button } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  useLibraryWallPapers,
  useLikedWallPapers,
  useSuggestedWallPapers,
} from "@/src/hooks/useWallpaper";
import { SplitScreen } from "@/src/components";
import { useTheme } from "@/src/context/ThemeContext";
import { SignedIn, useAuth, useUser } from "@clerk/clerk-expo";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const Foryou = () => {
  const Tab = createMaterialTopTabNavigator();
  const { currentTheme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: currentTheme === "dark" ? "white" : "black",
        tabBarStyle: {
          backgroundColor: currentTheme === "dark" ? "black" : "white",
        },
      }}
    >
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Recommeded} />
    </Tab.Navigator>
  );
};

export default Foryou;
function Library() {
  const { currentTheme } = useTheme();
  const wallPaper = useLibraryWallPapers();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: currentTheme === "dark" ? "black" : "white",
      }}
    >
      <SplitScreen wallPaper={wallPaper} />
    </View>
  );
}

function Liked() {
  const wallPaper = useLikedWallPapers();
  const { currentTheme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: currentTheme === "dark" ? "black" : "white",
      }}
    >
      <SplitScreen wallPaper={wallPaper} />
    </View>
  );
}

function Recommeded() {
  const wallPaper = useSuggestedWallPapers();
  const { currentTheme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: currentTheme === "dark" ? "black" : "white",
      }}
    >
      <SplitScreen wallPaper={wallPaper} />
    </View>
  );
}
