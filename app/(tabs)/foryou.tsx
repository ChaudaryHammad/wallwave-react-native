import { View, Text } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Foryou = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Recommeded} />
    </Tab.Navigator>
  );
};

export default Foryou;
function Library() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Library</Text>
    </View>
  );
}

function Liked() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Liked</Text>
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
