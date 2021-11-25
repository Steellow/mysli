import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import ListWrapper from "./components/ListWrapper";

const App = () => (
  <View style={s.container}>
    <ExpoStatusBar style="auto" />

    {/* Top bar */}
    <Text style={s.title}>Mysli</Text>

    {/* List of items */}
    <ListWrapper />

    {/* Bottom bar */}
  </View>
);

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20, // Always good to have some horizontal amrgin for spacing purposes
    marginTop: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    paddingBottom: 12,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
  },
});

export default App;
