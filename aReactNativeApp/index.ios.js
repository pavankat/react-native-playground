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
import ToggleButtonExample from './src/ToggleButtonExample'; //button works, but only once
import Props from './src/Props';
import PropsTwo from './src/PropsTwo';
import State from './src/State';
import Style from './src/Style';
import HeightAndWidth from './src/HeightAndWidth';
import Flex from './src/Flex'; //flex: 1 on parent View doesn't show anything on the screen, setting height: 300 does
import FlexDirection from './src/FlexDirection';
import JustifyContent from './src/JustifyContent';
import FlexAlign from './src/FlexAlign'; //it gets cut off at the top half way, also when I set `justifyContent` to `flex-end`, I can't see it anymore.
import TextInput from './src/TextInput';
import ScrollViewEx from './src/ScrollViewEx';
import ListViewBasics from './src/ListViewBasics'; //if you change height to flex: 1 then it won't work. That's what the example does
import UseScene from './src/scene/UseScene' //doesn't work
/*=============================================================*/
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
