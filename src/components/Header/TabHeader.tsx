import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export const TabHeader = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" size={20} />
      </Pressable>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Account Info</Text>
      {/* <AccountActions/> */}
      <View style={{ width: 40 }} />
    </View>
  );
};
