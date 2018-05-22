import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { main } from './style'




const CurrentWeather = ({temp}) => (
  <View style={main.CurrentWeatherContainer}>
    <Text style={main.CurrentWeatherText}>18º</Text>
  </View>
)

export default CurrentWeather
