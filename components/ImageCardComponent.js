import { StyleSheet, Image, View } from "react-native";
import React from "react";

const ImageCardComponent = ({ mySource }) => {
  return (
    <View style={styles.container}>
      <Image source={mySource} style={styles.image} />
    </View>
  );
};

export default ImageCardComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    borderRadius: 10,
  },
});
