import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Explore = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={()=><Text>Home</Text>} />
      <Tab.Screen name="Settings" component={()=><Text>settings</Text>} />
      <Tab.Screen name="Suggested" component={()=><Text>Suggested</Text>} />
    </Tab.Navigator>
  );
};

export default Explore;

const styles = StyleSheet.create({});
