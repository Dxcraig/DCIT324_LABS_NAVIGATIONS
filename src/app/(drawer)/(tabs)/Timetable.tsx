import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Timetable() {
  return (
    <View style={styles.container}>
        <Link href="/(drawer)/(tabs)/(stack)/EventDetails" push asChild>
            <Button title="Push to /home"/>
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})