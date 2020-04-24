import { dark } from "./../../colors";
import { StyleSheet } from "react-native";
import Contstants from "expo-constants";

export default StyleSheet.create({
  container: {
    backgroundColor: dark,
    padding: 15,
    height: "100%",
    paddingTop: Contstants.statusBarHeight,
  },
});
