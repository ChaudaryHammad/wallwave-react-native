import * as React from "react";
import { TextInput, Button, View, Text } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Spinner visible={loading} />
      {!pendingVerification && (
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
            Sign up for an account
          </Text>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Email..."
            onChangeText={(email) => setEmailAddress(email)}
            style={{
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, 0.1)",

              padding: 10,
              marginBottom: 20,
            }}
          />
          <TextInput
            style={{
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, 0.1)",

              padding: 10,
              marginBottom: 20,
            }}
            value={password}
            placeholder="Password..."
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />

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
              Sign Up
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
                onPress={onSignUpPress}
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
            <Text style={{ textAlign: "center" }}>
              Already have an account?
            </Text>
            <Link href="/sign-in">
              <Text
                style={{
                  textDecorationStyle: "solid",
                  textDecorationLine: "underline",
                }}
              >
                Sign In
              </Text>
            </Link>
          </View>
        </View>
      )}
      {pendingVerification && (
        <View
          style={{
            marginHorizontal: 30,
          }}
        >
          <Spinner visible={loading} />
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Verify your account
          </Text>
          <TextInput
            style={{
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, 0.1)",

              padding: 10,
              marginBottom: 20,
            }}
            value={code}
            placeholder="Code..."
            onChangeText={(code) => setCode(code)}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",

              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              Verify Email
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
                onPress={onPressVerify}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
