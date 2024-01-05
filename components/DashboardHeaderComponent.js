import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import profilePic from "../assets/57.jpg";
import notify from "../assets/notification.jpg";

const DashboardHeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={profilePic} style={styles.image} />
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.header}>Hello Alex</Text>
        <Text style={styles.para}>It’s time to learn something new</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={notify} style={styles.icon} />
      </View>
    </View>
  );
};

export default DashboardHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "center",
    paddingVertical: 20,
    width: "100%",
  },
  textsContainer: {
    flex: 5,
    gap: 10,
  },
  header: {
    color: "#0592F6",
    fontWeight: "600",
    fontSize: 18,
  },
  para: {
    color: "#275A7F",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
  image: {
    width: 35,
    height: 35,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
