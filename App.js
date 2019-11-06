/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native'

import GameApp from './components/GameApp.js'
import Game from './game/game.js'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <GameApp />
        </SafeAreaView>
      </>
    )
  }
}
