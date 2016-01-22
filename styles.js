'use strict';

const React = require('react-native')
const { StyleSheet } = React

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6BBE53',
  },
  header: {
    width: 200
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  button: {
    width: 100,
    height: 100,
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 50
  },
  toggle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    width: 100,
    height: 50
  }
});

module.exports = styles;