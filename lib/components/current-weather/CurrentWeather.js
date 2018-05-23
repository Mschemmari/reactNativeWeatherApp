import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { main } from './style'

const CurrentWeather = ({ temp, summary}) => (
  <View style={main.CurrentWeatherContainer}>
    <Text style={main.CurrentWeatherText}>{temp}</Text>
    <Text style={main.CurrentSummaryText}>{summary}</Text>
  </View>
)

export default CurrentWeather
