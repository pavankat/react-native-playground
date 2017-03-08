import React, { Component, PropTypes} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

/**
 * Navigation Tab
 */
const Tab = ({selected, title}) => {

  let defaultStyles = {
    color: selected ? '#FFCA2E' :'black',
    alignItems: 'flex-start',
    fontSize: 12,
    marginBottom: -6,
    marginLeft: -5
  };

  return (
    <Text style={defaultStyles}>{title}</Text>
  );

};

export default Tab;
