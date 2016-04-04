'use strict';

const React = require('react-native');
const { Image, TouchableWithoutFeedback, StyleSheet } = React;

class DingToggle extends React.Component {
  render() {
    var img = this.props.old ? <Image style={styles.toggle} source={require('../toggle.png')} /> : <Image style={styles.toggle} source={require('../toggle-alt.png')} />;
    return (
      <TouchableWithoutFeedback style={styles.toggle} onPress={this.props.toggleSound}>
        { img }
      </TouchableWithoutFeedback>
    )
  }
}

var styles = StyleSheet.create({
  toggle: {
    borderRadius: 35,
    width: 70,
    height: 70
  }
});

module.exports = DingToggle;