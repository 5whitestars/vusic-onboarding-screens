import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
    </View>
    // <Button
    //   title="Go to Jane's profile"
    //   onPress={() =>
    //     navigation.navigate('Profile', { name: 'Jane' })
    //   }
    // />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;