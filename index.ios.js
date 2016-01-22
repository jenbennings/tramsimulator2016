'use strict';

const React = require('react-native');
const { AppRegistry, Text, Image, TouchableHighlight, View } = React;
const Firebase = require('firebase');
const Sound = require('react-native-sound');
const DingToggle = require('./components/DingToggle');
const styles = require('./styles.js');


class tramsimulator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dings: 0,
      old: true
    }
  }

  componentWillMount() {
    this.firebaseRef = new Firebase("https://tramsimulator.firebaseio.com/ding");
    this.firebaseRef.on("value", function(dataSnapshot) {
      this.setState({
        dings: dataSnapshot.val().counter
      });
    }.bind(this));
  }

  _handleChange() {
    this.setState({old: !this.state.old});
  }

  _handleDing() {
    if (this.state.old == true) {
      var dingSrc = 'A_Class_one_gongl.mp3';
    } else {
      var dingSrc = 'Citadis_one_gong.mp3';
    }
    var ding = new Sound(dingSrc, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return console.log(error);
      }
      ding.play(destroy => { ding.release() });
    });
    this.firebaseRef.child('counter').transaction(function(currentValue) {
      return (currentValue || 0) + 1;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.header} source={require('./logo.png')} />
        <TouchableHighlight style={styles.button} onPress={this._handleDing.bind(this)}>
          <View />
        </TouchableHighlight>
        <DingToggle old={this.state.old} toggleSound={this._handleChange.bind(this)} />
        <Text style={styles.instructions}>
          {this.state.dings} dings have been dung so far
        </Text>
      </View>
    )
  }

}

AppRegistry.registerComponent('tramsimulator', () => tramsimulator);