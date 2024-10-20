import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import { SignedIn, useAuth, useUser } from "@clerk/clerk-expo";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Feather } from "@expo/vector-icons";
export const AccountScreen = () => {
  const { user } = useUser();
  const [email, setEmail] = useState(user?.primaryEmailAddress?.emailAddress);
  const [imageUrl, setImageUrl] = useState(user?.imageUrl);
  const [image, setImage] = useState("");
  const { signOut, sessionId } = useAuth();
  const handleSignOut = async () => {
    try {
      await signOut(); // Trigger the signOut action
      // You may want to navigate the user back to the login screen after signout
      console.log("User signed out successfully");
      alert("User signed out successfully");
    } catch (error) {
      console.error("Signout failed: ", error);
      alert("Signout failed");
    }
  };

  async function onUpdatePress() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.1,
        base64: true,
      });

      if (!result.canceled && result.assets[0].base64) {
        const base64 = result.assets[0].base64;
        const mimeType = result.assets[0].mimeType;

        const image = `data:${mimeType};base64,${base64}`;

        await user?.setProfileImage({
          file: image,
        });
      }
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 0.1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          margin: 10,
        }}
      >
        {email}
      </Text>
      <View
        style={{
          alignItems: "center",
          margin: 10,
        }}
      >
        <Image
          source={{
            uri: image || user?.imageUrl,
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Pressable
          style={{
            backgroundColor: "black",

            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={pickImage}
        >
          <Feather name="edit-3" color={"#fff"} size={20} />
        </Pressable>
      </View>

      <Button title="Update" onPress={onUpdatePress} />

      <SignedIn>
        <Button title="Sign Out" onPress={handleSignOut} />
      </SignedIn>
    </SafeAreaView>
  );
};
