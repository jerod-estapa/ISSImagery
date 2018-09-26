/**
 * International Space Station Imagery App
 * https://github.com/jerodestapa/ISSImagery
 *
 */

import React, {Component} from 'react';
import {StyleSheet,
        Text, 
        View,
        ImageBackground,
        AppRegistry
        } from 'react-native';


const StationImages = [

  {
    url: "https://i.imgur.com/wVZYrMd.jpg",
    caption: "The ISS"
  },

  {
    url: "https://i.imgur.com/dggemYH.jpg",
    caption: "Florida, from above."
  },

  {
    url: "https://i.imgur.com/deI932c.jpg",
    caption: "LEGO Spaceman"
  },

  {
    url: "https://i.imgur.com/j69hRu8.jpg",
    caption: "Star Wars with the crew"
  },

  {
    url: "https://i.imgur.com/YUipl9m.jpg",
    caption: "Japanese drone aboard the ISS"
  },

  {
    url: "https://i.imgur.com/VcCPjaV.jpg",
    caption: "Not the ISS ..."
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  render() {
    const image = StationImages[this.state.index];

    return (
        <View style={styles.container}>
            <View style={styles.empty} />
            <ImageBackground source={{url: image.url}} style={styles.image}>
                <Text style={styles.imageCaption}>{image.caption}</Text>
            </ImageBackground>
            <View style={styles.empty} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D4B5E',
  },
  image: {
    flex: 2,
    width: 320,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageCaption: {
      textAlign: 'center',
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
      color: 'white',
      width: 320
  },
  empty: {
      flex: 1
  }
});
