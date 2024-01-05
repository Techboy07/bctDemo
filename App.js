import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native";
import LoginScreen from "./screens/LoginScreen";
import DashBoardScreen from "./screens/DashBoard";
import bubble from "./assets/bubble.png";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#e8e4f3",
            flex: 1,
            width: "100%",
          },
        }}
      >
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
      </Stack.Navigator>
      <TouchableOpacity style={styles.bubbleContainer}>
        <Image source={bubble} style={styles.bubble} />
      </TouchableOpacity>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bubble: {
    width: 50,
    height: 50,
  },
  bubbleContainer: {
    position: "absolute",
    bottom: 200,
    right: 0,
    elevation: 5,
  },
});
