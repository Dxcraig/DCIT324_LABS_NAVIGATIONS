import { Link } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Link href="/(drawer)/(tabs)/(stack)/EventDetails" push asChild>
        <Button title="Push to /home"/>
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
