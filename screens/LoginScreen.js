import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import InputComponent from "../components/InputComponents";
import ButtonComponent from "../components/ButtonComponent";
import ImageCardComponent from "../components/ImageCardComponent";
import formImg from "../assets/form.png";

const LoginScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ImageCardComponent mySource={formImg} />
        <Text style={styles.header}>Sign In</Text>
        <Text style={styles.para}>Enter your login details to get started</Text>

        <View style={styles.inputs}>
          <InputComponent label={"Student ID"} />
          <InputComponent label={"Password"} secure />
        </View>

        <ButtonComponent title={"Sign In"} />
        <View style={styles.buttomPara}>
          <Text style={{ ...styles.para }}>You do not have an account?</Text>
          <TouchableOpacity>
            <Text style={{ ...styles.para, fontWeight: "600" }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 15 : 0,
    width: "100%",
    paddingHorizontal: 18,
  },
  header: {
    margin: 0,
    padding: 0,
    color: "#0592F6",
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 12,
  },
  para: {
    color: "#275A7F",
    marginBottom: 40,
    marginTop: 5,
  },
  inputs: {
    gap: 20,
    marginBottom: 50,
  },
  buttomPara: {
    marginTop: 25,
    flexDirection: "row",
    gap: 4,
  },
});
