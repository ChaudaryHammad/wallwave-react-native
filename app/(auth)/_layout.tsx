import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Foryou from "./foryou";
import Index from "./index";
import UserAccount from "./account";
import { useTheme } from "@/src/context/ThemeContext";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import Profile from "./profile";

export default function BottomTabLayout() {
  const { currentTheme } = useTheme();

  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="For you"
      activeColor={currentTheme === "dark" ? "white" : "black"}
      inactiveColor="grey"
      barStyle={{
        backgroundColor: currentTheme === "dark" ? "black" : "white",
      }}
    >
      <Tab.Screen
        name="For you"
        component={Foryou}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="home"
              color={focused ? "black" : color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Index}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="map"
              color={focused ? "black" : color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={UserAccount}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="cog"
              color={focused ? "black" : color}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
