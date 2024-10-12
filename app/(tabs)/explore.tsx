import { View, Text } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Explore = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Feed} />
      <Tab.Screen name="Suggested" component={Recommeded} />
    </Tab.Navigator>
  );
};

export default Explore;
function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>home!</Text>
    </View>
  );
}

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>feed!</Text>
    </View>
  );
}

function Recommeded() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Recommended!</Text>
    </View>
  );
}
