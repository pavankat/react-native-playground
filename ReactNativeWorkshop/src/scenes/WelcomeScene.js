import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import { Actions as RouteActions } from 'react-native-router-flux';
import Colors from '../styles/colors';

class WelcomeScene extends Component{

  render(){
    return(
     <Image style = { styles.image } source={require('../assets/intro-background.png')}>
      <View style={styles.container}>
        <View style = { styles.logoContainer}>
          <Image style = { styles.logo } source={require('../assets/logo.png')} />
        </View>
        <View style = { styles.textContainer}>
          <Text style={styles.text}>Welcome to Lossless</Text>
          <Text style={styles.introText}>Never lose your favorite gifs again.</Text>
          <Text style={styles.underline}>______</Text>
        </View>
        <View style= { styles.buttonContainer }>
          <Button onPress={RouteActions.login} style={styles.button}>get started</Button>
        </View>
      </View>
    </Image>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignSelf:'stretch',
    backgroundColor: 'rgba(48,51,58, 0.8)',

  },
  image: {
   flex: 1,
   width: null,
   height: null,
   alignItems: 'center',
   justifyContent: 'center',

  },
  logoContainer:{
    flex:2,
    marginTop:150
  },
  logo:{
    alignSelf:'center'
  },
  textContainer:{
    flex:5,
    justifyContent:'flex-end'
  },
  text:{
    alignSelf:'center',
    color:Colors.grey,
    fontSize:30,
    fontWeight:'normal',
  },
  introText:{
    alignSelf:'center',
    fontSize:15,
    color:Colors.grey,
    paddingBottom:50
  },
  underline:{
    color:Colors.grey,
    width:40,
    alignSelf:'center',
  },
  buttonContainer:{
    flex:4
  },
  button: {
    alignSelf:'center',
    color:Colors.black,
    backgroundColor: Colors.yellow,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:70,
    paddingRight:70,
    marginTop:60,
    fontSize:17,
    letterSpacing:3
  }
});

export default WelcomeScene;
