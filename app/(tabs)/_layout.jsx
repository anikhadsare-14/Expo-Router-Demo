import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="one"
        options={{
          tabBarLabel: "Tab One",
          headerTitle: "First Tab Screen",
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarLabel: "Tab Two",
          headerTitle: "Second Tab Screen",
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
            tabBarLabel : "Posts",
            headerTitle : 'Posts',
            headerShown : false
        }} />
    </Tabs>
  );
}
