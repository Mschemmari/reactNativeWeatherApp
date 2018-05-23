import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './main'
import CurrentWeather from '../../components/current-weather'


class Home extends Component{
  constructor(){
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      currentTemp: 0,
      currentSummary: '',
      currentPosition: '',
    }
  }
  componentWillMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude, position.coords.longitude);
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            })
      }
    ).then(
      getWeather = (position) => {
        const apiKey = 'f941c9d5ba61513ba6332b4d3bbea3bd';
        const url = 'https://api.darksky.net/forecast/';
        const lat = this.state.latitude;
        const lon = this.state.longitude;
        const lang = 'es'
        const units = 'ca'
        fetch(url+ apiKey + "/" + lon + "," + lat+ '?lang='+ lang +'&units='+units,)
        .then(function(response) {
          console.log(response);
          return response.json();
        })
        .then((response) => {
          console.log(response);
          this.setState({
            currentTemp: response.currently.temperature,
            currentSummary: response.currently.summary,
            currentPosition: response.currently.temperature,
          });
          // console.log(data.currently, 'state');
        });
        console.log(this.state.currently);
      }
    )
  }

  render() {

    return (
      <View>
        <CurrentWeather
          temp={this.state.currentTemp}
          summary={this.state.currentSummary}

        />
      </View>
    );
  }
}

export default Home;
