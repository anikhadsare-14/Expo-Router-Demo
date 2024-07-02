import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Page</Text>
      <Link href="register" asChild>
        <Button title="Open Register Page" />
      </Link>
      <Link href="one" asChild>
        <Button title="Open Tabs" />
      </Link>
    </View>
  );
}
