import React, {Component} from 'react';
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default class MainScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={{}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              {' '}
              Login using{' '}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.text}>Password</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('OtpScreen')}>
                <Text style={styles.text}>OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text> ------------OR-------------</Text>
        <View style={styles.signupContainer}>
          <Text style={{textAlign: 'center', marginBottom: 30, fontSize: 20}}>
            {' '}
            Register Here{' '}
          </Text>
          <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('RegisterScreen')} >
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    // borderWidth: 2,
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    fontSize:18
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    borderWidth: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 25,
    borderColor: 'black',
    // borderWidth: 2,
    marginBottom: 50,
    fontSize:18
  },
  button: {
    marginRight: 50,
    marginLeft: 50,
    borderWidth: 2,
    width: 125,
    margin: 50,
    padding: 15,
    borderRadius:20,
    fontSize:20
  },
  text: {
    textAlign: 'center',
  },
  signupContainer: {
    // borderWidth: 2,
    marginTop: 50,
    width: 300,
    height: 300,
    alignItems: 'center',
  },
});
