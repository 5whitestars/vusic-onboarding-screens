import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Components/Screens/HomeScreen';
import ProfileScreen from './Components/Screens/OnboardingPage';
import OnboardingPage from './Components/Screens/OnboardingPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Onboarding" component={OnboardingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
