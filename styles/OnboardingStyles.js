import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height;

const styleSheet = StyleSheet.create({
  background: {
    backgroundColor: "#ffffff",
    height: ScreenHeight,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#5F19F2',
    borderRadius: 20,
    height: 50,
    width: '95%',
    marginBottom: 10,
    marginLeft: '2.5%',
  },
  buttonText : {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial',  // change to the font "Inter" later
  },
  loginText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 50,
    justifyContent: 'center',
  },
  HSlogo: {
    justifyContent : 'center',
    marginBottom : '70%'
  },
  OPlogo : {
    justifyContent : 'center',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  spotifyButton: {
    marginTop: 100,
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  amazonButton: {
    marginTop: 150,
    height: 60,
    borderRadius: 6,
  },
  appleButton: {
    marginTop: 200,
    height: 60,
    borderRadius: 6,
  },
  soundcloudButton: {
    marginTop: 200,
    paddingVertical: 6,
    height: 60,
    borderRadius: 6,
  }
})

export default styleSheet;