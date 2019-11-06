
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const styles = {
  container: {
    flex: 1
  },
  not: {
    flex: 1,
    background: '#567',
    textAlign: 'center',
    margin: '25px',
    padding: '15px',
    justifyContent: 'center'
  },
  notText: {
    fontSize: '16px',
    color: '#fff',
  },
  btn: {
    background: '#345',
    height: '50px',
    width: '50px',
    margin: '5px',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '25px',
  },
  body: {
    margin: '25px',
    flex: 1,
    justifyContent: 'center',
  },
  bodyWrapper: {
    flex: 8,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  winner: {
    background: '#ffffffaa',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: '100',
    padding: '50px',
    display: 'none',
  },
  winnerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '25px',
    background: '#567',
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
  }
}

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.winner}>
          <Text style={styles.winnerText}>Winner</Text>
        </View>
        <View style={styles.not}>
          <Text style={styles.notText}>Player One</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <View style={styles.body}>
            <View style={styles.row}>
              <TouchableOpacity onPress={this.openPopup}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>X</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.openPopup}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>O</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.btn}></View>
            </View>
            <View style={styles.row}>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
            </View>
            <View style={styles.row}>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
