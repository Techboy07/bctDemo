import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const OptionComponent = ({ header, para, image, background }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: background }}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.para}>{para}</Text>

      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
};

export default OptionComponent;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 10,
    paddingVertical: 30,
  },
  header: {
    color: "#275A7F",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },
  para: {
    color: "#275A7F",
    fontWeight: "400",
    lineHeight: 20,
  },
  imageContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  image: {},
});
