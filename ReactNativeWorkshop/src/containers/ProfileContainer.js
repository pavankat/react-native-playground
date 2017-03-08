import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions/actions';

import GifList from '../components/gifs/GifList';

class ProfileContainer extends Component{

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.Actions.getLikes();
  }

  render(){

    let userGifs = this.props.user ? this.props.user.gifs : {};

    return(
      <View style={styles.container}>
        <GifList gifs={userGifs} />
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

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
