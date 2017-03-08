import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Button from 'react-native-button';
import Colors from '../../styles/colors';

class LoginForm extends Component{

  constructor(props) {
    super(props);

    this.state = {username: ''};

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render(){

    return(
      <View style={styles.container}>
        <View style = { styles.logoContainer}>
          <Image style = { styles.logo } source={require('../../assets/logo.png')} />
        </View>
        <View style = { styles.textInputContainer} >
          <TextInput
            placeholder="username"
            style={styles.textInput}
            onChangeText={(text) => {this.setState({username: text})}}
          />
        </View>
        <View style = { styles.buttonContainer} >
          <Button onPress={this.handleSubmit} style={styles.button}>Login</Button>
        </View>
      </View>
    )

  }

  handleSubmit() {
    this.props.onSubmit(this.state.username);
  }

}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black
  },
  logoContainer:{
    flex:2,
    marginTop:150
  },
  text:{
    color: Colors.grey,
    fontSize:17,
    letterSpacing:3
  },
  textInputContainer:{
    flex:1
  },
  textInput: {
    width:300,
    height: 50,
    margin: 20,
    borderColor: Colors.grey,
    borderWidth: 1,
    color: Colors.grey,
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
  },
  logoContainer:{
    flex:2,
    marginTop:150
  },
  logo:{
    alignSelf:'center'
  },
})

export default LoginForm;
