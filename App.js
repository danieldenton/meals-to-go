import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.search}>
        <Text>Search:</Text>
      </View>
      <View style={styles.list}>
        <Text>Blank Drugs</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 11,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
  },
});
