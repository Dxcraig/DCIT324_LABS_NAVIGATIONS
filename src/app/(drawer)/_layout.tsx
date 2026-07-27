
import { Drawer } from 'expo-router/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function _layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="(tabs)" options={{headerShown: false,  title: 'Home' }} />
        <Drawer.Screen name="home-nested" options={{headerShown: false, title: 'Second' }} />
        <Drawer.Screen name="index" options={{headerShown: false, title: 'Third' }} />
      </Drawer>
    </GestureHandlerRootView>
  )
}