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

  _updateCounter(error) {
    this.firebaseRef.child('counter').transaction(function(currentValue) {
      if (error) {
        return currentValue;
      } else {
        return currentValue + 1;
      }
    });
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
    this._updateCounter();
  }

  _commafy(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.boltBarTop}>
          <View style={styles.boltLeft}>
            <Image style={styles.bolt} source={require('./bolt.png')} />
          </View>
          <View style={styles.boltRight}>
            <Image style={styles.bolt} source={require('./bolt.png')} />
          </View>
        </View>
        <View style={styles.boltBarBottom}>
          <View style={styles.boltLeft}>
            <Image style={styles.bolt} source={require('./bolt.png')} />
          </View>
          <View style={styles.boltRight}>
            <Image style={styles.bolt} source={require('./bolt.png')} />
          </View>
        </View>
        <Image style={styles.header} source={require('./logo.png')} />
        <View style={styles.dingContainer}>
          <View style={styles.toggleContainer}>
            <View style={styles.toggleTitleContainer}>
              <Text style={styles.toggleTitle}>Old</Text>
              <Text style={styles.toggleTitle}>New</Text>
            </View>
          <DingToggle old={this.state.old} toggleSound={this._handleChange.bind(this)} />
          </View>
          <Image style={styles.button} source={require('./button.png')}>
            <TouchableHighlight style={styles.buttonInnerContainer} onPress={this._handleDing.bind(this)}>
              <Image style={styles.buttonInner} source={require('./button-inner.png')} />
            </TouchableHighlight>
          </Image>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.counterTitle}>Number of dings</Text>
          <View style={styles.counterBackground}>
            <Image style={styles.counterShadow} source={require('./shadow.png')} />
            <Text style={styles.dingsShadow}>
              {this._commafy(this.state.dings)}
            </Text>
            <Text style={styles.dings}>
              {this._commafy(this.state.dings)}
            </Text>
          </View>
        </View>
      </View>
    )
  }

}

AppRegistry.registerComponent('tramsimulator', () => tramsimulator);