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
    width: 200,
    height: (Dimensions.get('window').height == 568) ? 80 : 120,
    marginTop: (Dimensions.get('window').height == 568) ? 20 : 30,
    marginBottom: 10,
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
    fontFamily: 'DS-Digital-Italic',
    color: '#3C3C3C',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  dingsShadow: {
    fontSize: 24,
    fontFamily: 'DS-Digital-Italic',
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
  toggle: {
    borderRadius: 35,
    width: 70,
    height: 70
  },
  dingContainer: {
    borderWidth: 1,
    borderColor: "#919191",
    borderRadius: 5,
    alignItems: "center",
    padding: (Dimensions.get('window').height == 568) ? 20 : 40,
    marginBottom: 20,
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
    fontFamily: (Dimensions.get('window').height >= 200) ? 'Avenir-Medium' : 'DS-Digital-Italic',
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
    fontFamily: 'Avenir-Medium',
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