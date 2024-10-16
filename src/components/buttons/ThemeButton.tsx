import { View, Text, Pressable, useColorScheme } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ThemeButtonProps } from "@/src/types";
import { useTheme } from "@/src/context/ThemeContext";

export const ThemeButton = ({ title, onPress }: ThemeButtonProps) => {
  const { currentTheme } = useTheme();
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={[
          styles.btn,
          {
            borderColor: currentTheme === "dark" ? "white" : "black",
          },
        ]}
      >
        <Text
          style={{
            color: currentTheme === "dark" ? "white" : "black",
          }}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};
