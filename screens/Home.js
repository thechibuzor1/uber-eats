import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#eee",
  },
});
