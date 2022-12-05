import * as React from 'react';
import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground  } from 'react-native';
import Button from '../Button';
import styleSheet from '../../styles/OnboardingStyles'
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingPage = ({navigation}) => {
  return (
    <SafeAreaView style={styleSheet.background}>
      <View style={styleSheet.container}>
        <StatusBar style="auto" />
        { <ImageBackground 
          style={styleSheet.bgImage}
          source={require('../../assets/background-onboarding.png')}
        /> }
        <Image 
          source={require('../../assets/logo.png')}
          style={styleSheet.OPlogo}
        />
        <Text style={styleSheet.loginText}>Connect with VUSIC to share your music with friends </Text>
        <Button 
          style={styleSheet.spotifyButton}
          title="Continue with Spotify"
          onPress={() => navigation.navigate('Spotify')}
        />
        <Button 
          style={styleSheet.appleButton}
          title="Continue with Apple"
          onPress={() => navigation.navigate('Apple')}
        />
        <Button 
          style={styleSheet.amazonButton}
          title="Continue with Amazon Music"
          onPress={() => navigation.navigate('Amazon')}
        />
        <Button 
          style={styleSheet.soundcloudButton}
          title="Continue with Soundcloud"
          onPress={() => navigation.navigate('Soundcloud')}
        />
      </View>
    </SafeAreaView>


  
  );
};

export default OnboardingPage;