import * as React from 'react';
import { StatusBar, Text, View } from 'expo-status-bar';

const OnboardingPage = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>This is {route.params.name}'s profile</Text>
    </View>

  
  );
};

export default OnboardingPage;