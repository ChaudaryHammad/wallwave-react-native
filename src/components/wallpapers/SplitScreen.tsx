import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "../ThemedView";
import { ImageCard } from "../cards";
import { useWallpaper, Wallpaper } from "@/src/hooks/useWallpaper";
import { DownloadPicture } from "../BottomSheat";
import { useTheme } from "@/src/context/ThemeContext";

export const SplitScreen = ({
  wallPaper,
  onScroll,
}: {
  wallPaper: Wallpaper[];
  onScroll?: (yOffset: number) => void;
}) => {
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<Wallpaper | null>();
  const { currentTheme } = useTheme();

  return (
    <>
      <FlatList
        onScroll={(e) => {
          let yOffset = e.nativeEvent.contentOffset.y / 1;
          onScroll && onScroll(yOffset);
        }}
        data={wallPaper
          .filter((_, index) => index % 2 === 0)
          .map((_, index) => [wallPaper[index], wallPaper[index + 1]])}
        keyExtractor={(item) => item[0].name}
        renderItem={({ item: [first, second] }) => (
          <View
            style={[
              styles.container,
              {
                backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
              },
            ]}
          >
            <View
              style={[
                styles.innerContainer,
                {
                  backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
                },
              ]}
            >
              <View style={styles.imageContainer}>
                <ImageCard
                  onPress={() => setSelectedWallpaper(first)}
                  wallPaper={first}
                />
              </View>
            </View>

            <View
              style={[
                styles.innerContainer,
                {
                  backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
                },
              ]}
            >
              {second && (
                <View style={styles.imageContainer}>
                  <ImageCard
                    onPress={() => setSelectedWallpaper(second)}
                    wallPaper={second}
                  />
                </View>
              )}
            </View>
          </View>
        )}
        nestedScrollEnabled={true}
      />

      {selectedWallpaper && (
        <DownloadPicture
          wallPaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },

  mainContainer: {
    flex: 1,
  },
});
