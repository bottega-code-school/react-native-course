import { lightGrey } from "./../../colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
  },
  formGrid: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textInputWrapper: {
    width: "100%",
  },
  inputElement: {
    borderBottomColor: lightGrey,
    borderBottomWidth: 1,
    borderLeftColor: lightGrey,
    borderLeftWidth: 1,
    padding: 3,
  },
  textAreaElement: {
    height: 76,
  },
  buttonWrapper: {
    paddingRight: 15,
    paddingLeft: 15,
  },
});
