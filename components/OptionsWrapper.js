import { StyleSheet, ScrollView, View, Image } from "react-native";
import React from "react";
import OptionComponent from "./OptionComponent";
import blue from "../assets/clickhereBlue.png";
import gold from "../assets/clickHereGold.png";
import sky from "../assets/ClickhereSky.png";

const myOptions = [
  {
    headtext: "Assignment",
    image: null,
    background: "#BFFDDC",
  },
  {
    headtext: "Assignment",
    image: blue,
    background: "#DDE7FF",
  },
  {
    headtext: "Assignment",
    image: gold,
    background: "#F2F8B3",
  },
  {
    headtext: "Assignment",
    image: sky,
    background: "#CAF3FE",
  },
];

const OptionsWrapper = () => {
  return (
    <View style={styles.container}>
      {myOptions.map((elem, idx) => (
        <OptionComponent
          header={elem.headtext}
          para={
            "Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi consectetur consectetur vestibulum t"
          }
          background={elem.background}
          image={elem.image}
          key={idx}
        />
      ))}
    </View>
  );
};

export default OptionsWrapper;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 15,
    marginBottom: 100,
  },
});
