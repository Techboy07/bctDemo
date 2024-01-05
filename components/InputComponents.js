import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const InputComponents = ({ label, secure }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.input} secureTextEntry={secure} />
    </View>
  );
};

export default InputComponents;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  input: {
    backgroundColor: "#F7F8FA",
    borderWidth: 1,
    borderColor: "#CDDBF8",
    borderRadius: 13,
    paddingHorizontal: 24,
    width: "100%",
    aspectRatio: 7,
  },
  text: {
    color: "#275A7F",
  },
});
