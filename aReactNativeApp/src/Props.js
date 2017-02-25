import React, { Component } from 'react';
import { Image } from 'react-native';

export class Props extends Component {
  render() {
    let pic = {
    	//needs to be https for ios apps (default setting)
    	uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

export default Props;