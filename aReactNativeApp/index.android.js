/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

/*added this in here to use ImageAndStyle Component
=============================================================*/
import ImageAndStyle from './src/ImageAndStyle';
import ToggleButtonExample from './src/ToggleButtonExample';
import Props from './src/Props';
import PropsTwo from './src/PropsTwo';
import State from './src/State';
import Style from './src/Style';
import HeightAndWidth from './src/HeightAndWidth';
import Flex from './src/Flex';
import FlexDirection from './src/FlexDirection';
import JustifyContent from './src/JustifyContent';
import FlexAlign from './src/FlexAlign';
import TextInput from './src/TextInput';
import ScrollViewEx from './src/ScrollViewEx';
import ListViewBasics from './src/ListViewBasics';
import UseScene from './src/scene/UseScene'
/*=============================================================*/

//a View is similar to a div
//you can add Views, Texts, Lists inside of a View
//as a convention you should use the same name of the component and the file
//this is stateless because it doesn't support any of the lifecycle functions of React

//<ListViewBasics />
//<ScrollViewEx />
//<TextInput />
//<FlexAlign />
//<JustifyContent />
//<FlexDirection />
//<Flex />
//<HeightAndWidth />
//<Style />
//<State />
//<PropsTwo />
//<Props />
//<ToggleButtonExample />
//<ImageAndStyle />

export default class AnAppName extends Component {
  render() {
    return (
      <View>
        <UseScene />
      </View>
    );
  }
}

AppRegistry.registerComponent('AnAppName', () => AnAppName);
