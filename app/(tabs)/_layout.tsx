import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Explore from "./explore";
import Index from "./index";
import User from "./user";

export default function BottomTabLayout() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="home" color={color} size={focused ? 25 : 20} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Index}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="map" color={color} size={focused ? 25 : 20} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="user" color={color} size={focused ? 25 : 20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
