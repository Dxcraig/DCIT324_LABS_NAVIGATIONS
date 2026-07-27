import { Link } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Link href="/second/nested" push asChild>
        <Button title="Push to /second/nested"/>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
