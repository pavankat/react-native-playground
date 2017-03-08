import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LoginContainer from '../containers/LoginContainer';

class LoginScene extends Component{

  render(){
    return(
      <View style={styles.container}>
        <LoginContainer />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default LoginScene;
