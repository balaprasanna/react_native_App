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
import {Easing} from 'react-native'; // Customize easing function (Optional)


export default class AwesomeProject1 extends Component {
  render() {
    // prepare your drawer content
  var drawerContent = (<View style={styles.drawerContent}>
    <View style={styles.leftTop}/>
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
  </View>);
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
      customStyles={{drawer: styles.drawer}}
      drawerPosition={Drawer.positions.Left}
      onDrawerOpen={() => {console.log('Drawer is opened');}}
      onDrawerClose={() => {console.log('Drawer is closed')}}
      easingFunc={Easing.ease}
    >
      {/* <View style={styles.content}>
        <Text>{Object.values(Drawer.positions).join(' ')}</Text>
        <Text>{Object.values(Drawer.types).join(' ')}</Text>
      </View> */}
      <View style={styles.container}>
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
      </View>
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
  nav_text_item:{
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
});

AppRegistry.registerComponent('AwesomeProject1', () => AwesomeProject1);
