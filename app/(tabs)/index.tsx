import { Image, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";

import { useWallpaper, Wallpaper } from "@/src/hooks/useWallpaper";
import { SplitScreen } from "@/src/components";

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
        <SplitScreen wallPaper={wallPaper} />
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

export default Index;
