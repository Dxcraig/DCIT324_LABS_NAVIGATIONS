import { Link } from 'expo-router'
import { Button, StyleSheet, View } from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.welcome}>
      <Link href='/(drawer)' push asChild>
        <Button title='Welcome'/>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  }
})