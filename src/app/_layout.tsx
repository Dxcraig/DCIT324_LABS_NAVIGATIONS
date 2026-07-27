import { Stack, Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{headerShown: false}}  />
        <Stack.Screen name="Welcome" options={{headerShown: false}} />
        <Stack.Screen name="EditProfile" options={{headerShown: false}} />
      </Stack>
    </GestureHandlerRootView>
  );
}
