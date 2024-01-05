import { StyleSheet, ScrollView, View, Image } from "react-native";
import React from "react";
import OptionComponent from "./OptionComponent";
import blue from "../assets/clickhereBlue.png";
import gold from "../assets/clickHereGold.png";
import sky from "../assets/ClickhereSky.png";

const OptionsWrapper = () => {
  return (
    <View style={styles.container}>
      <OptionComponent
        header={"Assignment"}
        para={
          "Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi consectetur consectetur vestibulum t"
        }
        background={"#BFFDDC"}
        image={null}
      />

      <OptionComponent
        header={"Courses"}
        para={
          "Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi consectetur consectetur vestibulum t"
        }
        background={"#DDE7FF"}
        image={blue}
      />
      <OptionComponent
        header={"Timetable"}
        para={
          "Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi consectetur consectetur vestibulum t"
        }
        background={"#F2F8B3"}
        image={gold}
      />
      <OptionComponent
        header={"Quizzes"}
        para={
          "Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi consectetur consectetur vestibulum t"
        }
        background={"#CAF3FE"}
        image={sky}
      />
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
