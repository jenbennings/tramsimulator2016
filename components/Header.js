'use strict';

const React = require('react-native');
const { View, Image, StyleSheet } = React;

import Dimensions from 'Dimensions';

class Header extends React.Component {
  render() {
    var header
    if (Dimensions.get('window').height >= 568) {
      header = <Image style={styles.header} source={require('../logo.png')} />
    } else {
      header = <Image style={styles.hidden} source={require('../logo.png')} />
    }
    return (
      <View>
        {header}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  header: {
    width: 180,
    height: (Dimensions.get('window').height >= 667) ? 140 : 80,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  hidden: {
    height: 0
  }
});

module.exports = Header;