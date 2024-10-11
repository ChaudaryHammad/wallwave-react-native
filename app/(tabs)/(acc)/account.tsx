import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { DownloadPicture } from "@/components/BottomSheat";

const account = () => {
  const [pictureOpen, setPictureOpen] = useState<boolean>(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
      }}
    >
      <Button title="Open Bottom Sheat" onPress={() => setPictureOpen(true)} />

      <Link
        style={{
          padding: 10,
          backgroundColor: "blue",
          color: "white",
        }}
        href={"/accountInfo"}
      >
        Go to Account Info -->
      </Link>

      {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)} />}
    </View>
  );
};

export default account;
