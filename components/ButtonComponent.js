import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ButtonComponent = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient colors={["#0592F6", "#006AB5"]} style={styles.background}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {},
  background: {
    paddingHorizontal: 11,
    paddingVertical: 15,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});
