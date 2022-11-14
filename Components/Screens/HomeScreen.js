import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Button from '../Button';
import styleSheet from '../../styles/OnboardingStyles';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground 
        style={styleSheet.bgImage}
        source={require('../../assets/background-onboarding.png')}
      > */}
      <StatusBar style="auto" />
      <Image 
        source={require('../../assets/logo.png')}
        style={styleSheet.HSlogo}
      />
      <Button
        style={styles.button}
        title="LOG IN"
        onPress={() =>
          navigation.navigate('Onboarding')
        }
      />
      <Button
        style={styles.button}
        title="SIGN UP"
        onPress={() =>
          navigation.navigate()
        }
      />
      {/* </ImageBackground> */}
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