import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../Button';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        {/* <Text>Home Screen :P</Text> */}
        <StatusBar style="auto" />
        <Button
          title="Go to Onboarding Page!"
          onPress={() =>
            navigation.navigate('Onboarding')
          }
        />
        {/* <Button 
          title="Go to Login Page!"
          // onPress={() =>
          //   navigation.navigate('Login', { name: 'Jane' })
          // }
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {

  }
});

export default HomeScreen;