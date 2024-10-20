import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, View, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Spinner from "react-native-loading-spinner-overlay";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Spinner visible={loading} />
      <View
        style={{
          marginHorizontal: 30,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Welcome Back
        </Text>
        <TextInput
          style={{
            borderRadius: 20,
            backgroundColor: "rgba(0, 0, 0, 0.1)",

            padding: 10,
            marginBottom: 20,
          }}
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
        <TextInput
          style={{
            borderRadius: 20,
            backgroundColor: "rgba(0, 0, 0, 0.1)",

            padding: 10,
            marginBottom: 10,
          }}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <Link href="/reset">
          <Text
            style={{
              textAlign: "right",
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
            }}
          >
            Forgot password?
          </Text>
        </Link>
        {/* <Button title="Sign In" onPress={onSignInPress} /> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            Sign in
          </Text>
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#8A4C7D",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="arrow-forward"
              size={24}
              color="white"
              onPress={onSignInPress}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",

            margin: 30,
            gap: 2,
          }}
        >
          <Text style={{ textAlign: "center" }}>Don't have an account?</Text>
          <Link href="/sign-up">
            <Text
              style={{
                textDecorationStyle: "solid",
                textDecorationLine: "underline",
              }}
            >
              Sign up
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
