import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Register() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Register Page</Text>
      <Link href="login" asChild>
        <Button title="Open Login Page" />
      </Link>
    </View>
  );
}
