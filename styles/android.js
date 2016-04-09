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
    paddingTop: 50,
    paddingBottom: 50
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
  dings: {
    fontSize: 24,
    color: '#3C3C3C',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 140,
    borderRadius: 70
  },
  buttonInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    width: (Dimensions.get('window').height >= 568) ? 280 : 200,
    flex: 1,
    borderWidth: 1,
    borderColor: "#919191",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 10
  },
  toggleContainer: {
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').height >= 667) ? 30 : 10,
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
  counterTitle: {
    fontSize: 12,
    color: '#D3D3D3',
    marginBottom: 15,
    marginTop: 5
  },
  counterContainer: {
    width: (Dimensions.get('window').height >= 568) ? 280 : 200,
    borderWidth: 1,
    borderColor: "#919191",
    borderRadius: 5,
    alignItems: 'center',
    padding: 10
  },
  counterBackground: {
    width: (Dimensions.get('window').height >= 568) ? 260 : 180,
    backgroundColor: '#8A9089',
    height: 35,
    justifyContent: 'center',
    borderRadius: 2
  }
});

module.exports = styles;