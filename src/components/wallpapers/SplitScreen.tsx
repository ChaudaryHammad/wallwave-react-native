import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "../ThemedView";
import { ImageCard } from "../cards";
import { useWallpaper, Wallpaper } from "@/src/hooks/useWallpaper";
import { DownloadPicture } from "../BottomSheat";

export const SplitScreen = ({ wallPaper }: { wallPaper: Wallpaper[] }) => {
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<Wallpaper | null>();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <FlatList
            data={wallPaper.filter((_, index) => index % 2 === 0)}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  onPress={() => setSelectedWallpaper(item)}
                  wallPaper={item}
                />
              </View>
            )}
            nestedScrollEnabled={true}
          />
        </View>
        <View style={styles.innerContainer}>
          <FlatList
            data={wallPaper.filter((_, index) => index % 2 === 1)}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  onPress={() => setSelectedWallpaper(item)}
                  wallPaper={item}
                />
              </View>
            )}
            nestedScrollEnabled={true}
          />
        </View>
      </View>

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
