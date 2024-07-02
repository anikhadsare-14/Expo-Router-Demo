import { Stack, useRouter } from "expo-router";
import React from 'react'
import { Button } from 'react-native'

export default function RootLayout() {

  const router = useRouter()

  return (
    <Stack 
      screenOptions={{
        // headerStyle : {
        //   backgroundColor : 'black',
        // },
        // headerTintColor : 'white'
      }}>
      <Stack.Screen name="index" options={{
        title : 'Home'
      }} />
      <Stack.Screen name="register" options={{
        title : 'Register',
        headerRight : () => (
          <Button title = 'Login' onPress={() => {
            router.push('/login')
          }} />)
      }}/>
      <Stack.Screen name="login" options={{
        title : 'Login',
        presentation: 'containedModal',
        animation: 'slide_from_bottom',
        animationDuration: 400,
      }}/>
      <Stack.Screen name="(tabs)" options={{
        headerShown : false
      }} />
      <Stack.Screen name="missing" options={{
        title : 'Page Not Found'
      }} />
    </Stack>
  );
}
