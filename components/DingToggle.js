'use strict';

const React = require('react-native');
const { Text, TouchableHighlight } = React;
const styles = require('../styles.js');

class DingToggle extends React.Component {
  render() {
    var text = this.props.old ? 'old' : 'new';
    return (
      <TouchableHighlight style={styles.toggle} onPress={this.props.toggleSound}>
        <Text>
          {text}
        </Text>
      </TouchableHighlight>
    )
  }
}

module.exports = DingToggle;