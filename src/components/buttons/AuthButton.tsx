import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AuthButtonProps } from "@/src/types";
import { styles } from "./styles";
import { useTheme } from "@/src/context/ThemeContext";

export const AuthButton = ({ title, icon }: AuthButtonProps) => {
  const { currentTheme } = useTheme();
  return (
    <View>
      <Pressable
        style={[
          styles.btn,
          {
            borderColor: currentTheme === "dark" ? "white" : "black",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
            gap: 6,
          }}
        >
          <Ionicons
            name={icon}
            size={24}
            color={currentTheme === "dark" ? "white" : "black"}
          />
          <Text
            style={{
              color: currentTheme === "dark" ? "white" : "black",
            }}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
