import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Button = props => {

  return(
    <Pressable 
      style={styles.button} 
      onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '7770FF',
    borderBottomRightRadius: '23.71',
    borderBottomLeftRadius: '23.71',
    borderTopLeftRadius: '23.71',
    borderTopRightRadius: '23.71'
  },
  text : {
    textAlign: 'center',
    fontFamily: 'Arial',  // change to the font "Inter" later
  }
})

export default Button;