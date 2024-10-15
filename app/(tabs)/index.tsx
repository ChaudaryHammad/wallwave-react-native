import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ImageCard } from "@/src/components";
import { useWallpaper, Wallpaper } from "@/src/hooks/useWallpaper";
import { FlatList } from "react-native-gesture-handler";
import { ThemedView } from "@/src/components/ThemedView";
import { DownloadPicture } from "@/src/components/BottomSheat";

const Index = () => {
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<Wallpaper | null>();
  const wallPaper = useWallpaper();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: "black",
          light: "white",
        }}
        headerImage={
          <Image style={{ flex: 1 }} source={{ uri: wallPaper[0].url ?? "" }} />
        }
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
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
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
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
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>

      {selectedWallpaper && (
        <DownloadPicture
          wallPaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </SafeAreaView>
  );
};

export default Index;

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
});
