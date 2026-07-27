import { Link } from 'expo-router'
import { Button, StyleSheet, View } from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Link href='/EditProfile' push asChild>
        <Button title='Edit Profile'/>
      </Link>
      <Link href='/(drawer)/About' push asChild>
        <Button title='Main'/>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15
  },
})