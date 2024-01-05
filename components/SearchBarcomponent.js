import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from "react-native";
import React from "react";
import search from "../assets/search.png";

const SearchBarcomponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchContainer}>
        <Image source={search} style={styles.search} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search for courses, assignment, quizzes, or teacher "
      />
    </View>
  );
};

export default SearchBarcomponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    borderWidth: 1,
    borderColor: "#D5E3FC",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 12,
    justifyContent: "start",
    alignItems: "center",
    gap: 10,
    aspectRatio: 10,
  },
  search: {
    backgroundColor: "#fff",
    width: 15,
    height: 15,
  },
  searchContainer: {
    backgroundColor: "#fff",
  },
  input: {
    fontSize: 10,
    color: "#275A7F",
  },
});
