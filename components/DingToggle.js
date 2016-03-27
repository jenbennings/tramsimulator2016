'use strict';

const React = require('react-native');
const { Image, TouchableWithoutFeedback } = React;
const styles = require('../styles.js');

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

module.exports = DingToggle;