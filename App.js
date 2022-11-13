import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Components/Screens/HomeScreen';
import OnboardingPage from './Components/Screens/OnboardingPage';
import Spotify from './Components/Screens/Spotify';
import Amazon from './Components/Screens/Amazon';
import Apple from './Components/Screens/Apple';
import Soundcloud from './Components/Screens/Soundcloud';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingPage} 
          options={{title: 'Onboarding'}}
        />
        <Stack.Screen
          name="Spotify"
          component={(Spotify)}
          options={{title: 'Spotify'}}
        />
        <Stack.Screen
          name="Apple"
          component={(Apple)}
          options={{title: 'Apple'}}
        />
        <Stack.Screen
          name="Amazon"
          component={(Amazon)}
          options={{title: 'Amazon'}}
        />
        <Stack.Screen
          name="Soundcloud"
          component={(Soundcloud)}
          options={{title: 'Soundcloud'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
