import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import styleSheet from "../styles/OnboardingStyles";

const Button = props => {

  return(
    <TouchableOpacity 
      style={styleSheet.button} 
      onPress={props.onPress}>
      <Text style={styleSheet.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;