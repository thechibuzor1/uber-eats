import { View, Text, SafeAreaView,StyleSheet,StatusBar } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTabs />
    </SafeAreaView >
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
});