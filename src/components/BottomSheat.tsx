import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "../hooks/useWallpaper";

import { Ionicons } from "@expo/vector-icons";

import { ThemedView } from "./ThemedView";
import { useTheme } from "../context/ThemeContext";

export const DownloadPicture = ({
  onClose,
  wallPaper,
}: {
  wallPaper: Wallpaper;
  onClose: () => void;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["95%"], []);
  const { currentTheme } = useTheme();
  // renders
  return (
    <BottomSheet
      onClose={onClose}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={styles.handleIndicator}
      enablePanDownToClose={true}
      handleStyle={{
        display: "none",
      }}
    >
      <BottomSheetView
        style={[
          styles.contentContainer,
          { backgroundColor: currentTheme === "light" ? "white" : "black" },
        ]}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: currentTheme === "dark" ? "black" : "white",
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: wallPaper.url,
            }}
          />

          <Pressable
            onPress={onClose}
            style={{
              position: "absolute",
              right: 10,
              top: 10,
            }}
          >
            <Ionicons
              name="close"
              size={24}
              color={"white"}
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 50,
                padding: 5,
              }}
            />
          </Pressable>

          <View
            style={{
              position: "absolute",
              left: 10,
              top: 10,
            }}
          >
            <Ionicons
              name="heart"
              size={24}
              color={"white"}
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 50,
                padding: 5,
              }}
            />
          </View>

          <View
            style={{
              position: "absolute",
              left: 10,
              top: 55,
            }}
          >
            <Ionicons
              name="share-social"
              size={24}
              color={"white"}
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 50,
                padding: 5,
              }}
            />
          </View>

          <Text
            style={[
              styles.label,
              {
                color: currentTheme === "dark" ? "white" : "black",
              },
            ]}
          >
            {wallPaper.name}
          </Text>

          <View style={styles.bottomContainer}>
            <Pressable
              style={[
                styles.btn,
                {
                  backgroundColor: currentTheme === "dark" ? "white" : "black",
                  borderColor: currentTheme === "dark" ? "white" : "black",
                },
              ]}
            >
              <View style={{ flexDirection: "row", gap: 6 }}>
                <Ionicons
                  name="download"
                  size={24}
                  color={currentTheme === "dark" ? "black" : "white"}
                />

                <Text
                  style={{
                    color: currentTheme === "dark" ? "black" : "white",

                    fontSize: 20,
                  }}
                >
                  Download
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  handleIndicator: {
    height: 0,
  },
  image: {
    height: "60%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bottomContainer: {
    gap: 10,
    paddingVertical: 40,

    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  btn: {
    alignItems: "center",

    padding: 10,
    borderRadius: 10,
    width: "60%",
  },
});
