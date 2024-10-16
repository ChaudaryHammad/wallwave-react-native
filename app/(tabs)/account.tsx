import { View, Text, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { AuthButton, ThemeButton } from "@/src/components";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/src/components/ThemedView";
import { useTheme } from "@/src/context/ThemeContext";

const Account = () => {
  const { currentTheme, setTheme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: currentTheme === "dark" ? "black" : "white",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",

            justifyContent: "space-between",
          }}
        >
          <Text
            style={[
              styles.title,
              {
                color: currentTheme === "dark" ? "white" : "black",
              },
            ]}
          >
            Panels
          </Text>
          <Ionicons
            name="person-circle"
            size={40}
            color={currentTheme === "dark" ? "white" : "black"}
          />
        </View>
        <Text
          style={[
            styles.titleLight,
            {
              color: currentTheme === "dark" ? "white" : "black",
            },
          ]}
        >
          Sign in to save your data
        </Text>
        <View
          style={{
            marginTop: 10,

            gap: 10,
            padding: 10,

            justifyContent: "center",
          }}
        >
          <AuthButton title="Sign in" icon="logo-google" />
          <AuthButton title="Sign in" icon="logo-apple" />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text
            style={[
              styles.title,
              {
                color: currentTheme === "dark" ? "white" : "black",
              },
            ]}
          >
            Settings
          </Text>
          <Text
            style={[
              styles.titleLight,
              {
                color: currentTheme === "dark" ? "white" : "black",
              },
            ]}
          >
            Themes
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              padding: 10,

              justifyContent: "center",
            }}
          >
            <ThemeButton title="Light" onPress={() => setTheme("light")} />
            <ThemeButton title="Dark" onPress={() => setTheme("dark")} />
            <ThemeButton title="System" onPress={() => setTheme("system")} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  titleLight: {
    fontSize: 17,
  },
});
