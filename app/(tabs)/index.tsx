import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { useWallpaper, Wallpaper } from "@/src/hooks/useWallpaper";
import { SplitScreen } from "@/src/components";
import { useState } from "react";
import { useTheme } from "@/src/context/ThemeContext";

const Index = () => {
  const width = useWindowDimensions().width;
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<Wallpaper | null>();
  const wallPaper = useWallpaper();
  const [scrollY, setScrollY] = useState<number>(0);
  const TOB_BAR_HEIGHT = 250;
  const { currentTheme } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Animated.View
        style={[
          styles.header,
          {
            height: 250 - scrollY,
            backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
          },
        ]}
      >
        <Carousel
          loop
          width={width}
          autoPlay={true}
          data={wallPaper.slice(0, 3)}
          mode="parallax"
          scrollAnimationDuration={2000}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
              }}
            >
              <Image
                style={{
                  height: TOB_BAR_HEIGHT,
                  borderRadius: 10,
                  borderColor: currentTheme === "dark" ? "#fff" : "#000",
                }}
                source={{ uri: wallPaper[index].url }}
              />
            </View>
          )}
        />
      </Animated.View>

      <SplitScreen
        onScroll={(yOffset) => {
          setScrollY(yOffset);
        }}
        wallPaper={wallPaper}
      />
    </SafeAreaView>
  );
};

export default Index;
const styles = StyleSheet.create({
  header: {
    overflow: "hidden",
  },
});
