'use strict';

const React = require('react-native')
const { StyleSheet } = React

import Dimensions from 'Dimensions';

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#242424',
    paddingBottom: 60
  },
  boltBarTop: {
    height: 30,
    position: 'absolute',
    top: 15,
    left: 15,
    right: 15
  },
  boltBarBottom: {
    height: 30,
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15
  },
  boltLeft: {
    position: 'absolute',
    left: 0
  },
  boltRight: {
    position: 'absolute',
    right: 0
  },
  bolt: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  header: {
    width: 180,
    height: 120,
    marginTop: 30,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  counterBackground: {
    backgroundColor: '#8A9089',
    width: 240,
    height: 35,
    justifyContent: 'center',
    borderRadius: 2
  },
  dings: {
    fontSize: 24,
    color: '#3C3C3C',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  dingsShadow: {
    fontSize: 24,
    color: '#737373',
    textAlign: 'center',
    position: 'absolute',
    top: 7,
    left: 1,
    right: 0
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 140,
    borderRadius: 70
  },
  buttonInnerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 114,
    height: 114,
    borderRadius: 58
  },
  buttonInner: {
    width: 116,
    height: 116,
    borderRadius: 58
  },
  dingContainer: {
    borderWidth: 1,
    borderColor: "#919191",
    borderRadius: 5,
    alignItems: "center",
    padding: (Dimensions.get('window').height == 568) ? 20 : 40,
    marginBottom: 10,
    width: 260
  },
  toggleContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  toggleTitleContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  toggleTitle: {
    fontSize: 12,
    color: '#D3D3D3'
  },
  counterShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: 240,
    height: 2,
    resizeMode: 'contain',
    borderRadius: 2
  },
  counterTitle: {
    fontSize: 12,
    color: '#D3D3D3',
    marginBottom: 15,
    marginTop: 5
  },
  counterContainer: {
    borderWidth: 1,
    width: 260,
    borderColor: "#919191",
    borderRadius: 5,
    alignItems: "center",
    padding: 10
  },
});

module.exports = styles;