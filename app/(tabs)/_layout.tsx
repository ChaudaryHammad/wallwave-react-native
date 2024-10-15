import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Foryou from "./foryou";
import Index from "./index";
import UserAccount from "./account";

export default function BottomTabLayout() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="For you"
        component={Foryou}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Index}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={UserAccount}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cog" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
