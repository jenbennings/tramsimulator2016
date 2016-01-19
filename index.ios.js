'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
} = React;

var Firebase = require('firebase');
var Sound = require('react-native-sound');

var DingToggle = React.createClass({
  render: function() {
    var text = this.props.old ? 'old' : 'new';
    return (
      <TouchableHighlight style={styles.toggle} onPress={this.props.toggleSound}>
        <Text>
          {text}
        </Text>
      </TouchableHighlight>
    );
  }
});

var tramsimulator = React.createClass({
  getInitialState: function() {
    return {
      dings: 0,
      old: true
    };
  },

  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://tramsimulator.firebaseio.com/ding");
    this.firebaseRef.on("value", function(dataSnapshot) {
      this.setState({
        dings: dataSnapshot.val().counter
      });
    }.bind(this));
  },

  _handleChange: function() {
    this.setState({old: !this.state.old});
  },

  _handleDing: function() {
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
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.header} source={require('./logo.png')} />
        <TouchableHighlight style={styles.button} onPress={this._handleDing}>
          <View />
        </TouchableHighlight>
        <DingToggle old={this.state.old} toggleSound={this._handleChange} />
        <Text style={styles.instructions}>
          {this.state.dings} dings have been dung so far
        </Text>
      </View>
    );
  }
});

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

AppRegistry.registerComponent('tramsimulator', () => tramsimulator);