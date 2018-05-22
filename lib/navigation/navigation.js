
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from '../containers/home/Home.js'

export default createStackNavigator({
  Home: {
    screen: Home
  },
});
