import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Wallpaper } from "@/src/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { Colors } from "@/src/constants/Colors";

export const ImageCard = ({
  wallPaper,
  onPress,
}: {
  wallPaper: Wallpaper;
  onPress: () => void;
}) => {
  const theme = useTheme().dark ? "dark" : "light";
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: wallPaper.url,
          }}
        />

        <View style={styles.labelContainer}>
          <View
            style={{
              justifyContent: "space-between",
              paddingHorizontal: 8,
              paddingVertical: 8,

              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.label}>
              {" "}
              {wallPaper.name.length > 10
                ? wallPaper.name.substring(0, 10) + "..."
                : wallPaper.name}
            </Text>

            <Ionicons
              name="heart"
              size={18}
              color={theme === "light" ? "white" : Colors.dark.icon}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 220,
    borderRadius: 20,
  },
  labelContainer: {
    position: "absolute",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.5)",
    bottom: 0,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  label: {
    color: "white",
    fontWeight: "bold",
  },
});
