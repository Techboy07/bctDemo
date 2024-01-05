import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import React from "react";
import DashboardHeaderComponent from "../components/DashboardHeaderComponent";
import SearchBarcomponent from "../components/SearchBarcomponent";
import OptionsWrapper from "../components/OptionsWrapper";

const DashBoard = () => {
  return (
    <ScrollView style={styles.container}>
      <DashboardHeaderComponent />
      <SearchBarcomponent />
      <OptionsWrapper />
    </ScrollView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECF1FB",
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    paddingTop: Platform.OS === "ios" ? 50 : 25,
  },
});
