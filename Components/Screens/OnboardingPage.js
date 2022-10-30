import * as React from 'react';
import { StatusBar, Text, View } from 'expo-status-bar';
import { StyleSheet } from 'react-native';


const OnboardingPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>This is the onboarding page!</Text>
      {/* <Text>This is {route.params.name}'s profile</Text> */}
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

export default OnboardingPage;