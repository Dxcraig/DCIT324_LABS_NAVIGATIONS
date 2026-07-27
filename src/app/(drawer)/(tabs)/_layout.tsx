
import { Stack, Tabs } from 'expo-router'
import { DrawerToggleButton } from 'expo-router/drawer'

export default function _layout() {
  return (
    <Tabs screenOptions={{headerLeft: () => <DrawerToggleButton/>}}/>
  )
}