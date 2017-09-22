/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Drawer from 'react-native-drawer-menu';
import { Easing, Image } from 'react-native'; // Customize easing function (Optional)

class HomePageView extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Text>Hello {this.props.name}!</Text>
        <Blink text='Why did they ever take this out of HTML' />
        <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue} onPress={() => console.log("Pressed.")}>
          just bigblue
        </Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
      </View>
    );
  }
}

class DrawerView extends Component {
  render() {
    return (
    <View style={styles.drawerContent}>
      <View style={styles.leftTop} />
      <View>
        <Text style={styles.nav_text_item}></Text>
      </View>
      <View style={styles.leftBottom}>
        <View style={styles.nav_container}>
          <Text style={styles.nav_text_item}>
            Drawer Content1
        </Text>
        </View>
        <View style={styles.nav_container}>
          <Text style={styles.nav_text_item}>
            Drawer Content2
        </Text>
        </View>
        <View style={styles.nav_container}>
          <Text style={styles.nav_text_item}>
            Drawer Content3
      </Text>
        </View>
      </View>
    </View>

    )
  }
}

export default class AwesomeProject1 extends Component {
  render() {
    // prepare your drawer content
    var drawerContent = (
      <DrawerView />
    );
    // customize drawer's style (Optional)
    var customStyles = {
      drawer: {
        shadowColor: '#ABF',
        shadowOpacity: 0.4,
        shadowRadius: 10
      },
      mask: {}, // style of mask if it is enabled
      main: {} // style of main board
    };
   

    return (
      <Drawer
        style={styles.container}
        drawerWidth={300}
        drawerContent={drawerContent}
        type={Drawer.types.Overlay}
        customStyles={{ drawer: styles.drawer }}
        drawerPosition={Drawer.positions.Left}
        onDrawerOpen={() => { console.log('Drawer is opened'); }}
        onDrawerClose={() => { console.log('Drawer is closed') }}
        easingFunc={Easing.ease}
      >
        {/* <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Block Chain App!
        </Text>
        <Text style={styles.instructions}>
          Bitcoins |  Blockchain
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View> */}
        <HomePageView name="test" />

      </Drawer>
    );


    // return (

    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  nav_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FFFF',
  },
  nav_text_item: {
    color: '#000',
    fontSize: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
 
AppRegistry.registerComponent('AwesomeProject1', () => AwesomeProject1);
