import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const MainTouchable = props => (
  <TouchableOpacity style={styles.mainTouchable} {...props}>
    <Text style={styles.text}>{props.children}</Text>
  </TouchableOpacity>
);

export default MainTouchable;
