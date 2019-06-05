/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        {/* Top Half */}
        <View style={styles.half1}>
          <Text style={styles.text}>
            This is a test
          </Text>
        </View>

        {/* Bottom Half */}
        <View style={styles.half2}>

          <View style={[styles.half21, styles.half2x]}>
            <Text style={styles.text}>
              2-1
            </Text>
          </View>

          <View style={[styles.half22, styles.half2x]}>
            <Text style={styles.text}>
              2-2
            </Text>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  half1: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },


  half2: {
    flex: 1,
    flexDirection: 'row',
  },

  half2x: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  half21: { 
    backgroundColor: 'blue',
  },

  half22: { 
    backgroundColor: 'purple',
  },

  text: {
    color: 'white',
    fontSize: 30,
  }

});
