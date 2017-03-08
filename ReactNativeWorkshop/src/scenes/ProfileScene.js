import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ProfileContainer from '../containers/ProfileContainer';

class ProfileScene extends Component{

  render(){
    return(
      <View style={styles.container}>
        <ProfileContainer />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  }
})

export default ProfileScene;
