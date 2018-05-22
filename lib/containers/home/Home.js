import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './main'
import CurrentWeather from '../../components/current-weather'


// componentWillMount(){
//   const ciudad = document.querySelector(".ciudad");
//   const apiKey = 'f941c9d5ba61513ba6332b4d3bbea3bd';
//   const url = 'https://api.darksky.net/forecast/';
//
//   const lang = document.querySelector('.language').value;
//   const units = document.querySelector('.units').value;
//   //hago pedido de ubicacion del navegador
//    fetch('https://facebook.github.io/react-native/movies.json')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }


class Home extends Component{
  render() {
    return (
      <View>
        <CurrentWeather />
      </View>
    );
  }
}

export default Home;
