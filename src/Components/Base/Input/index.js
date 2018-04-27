import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const InputContainer = props => (
  <TextInput style={styles.textInput} {...props} />
);

export default InputContainer;
