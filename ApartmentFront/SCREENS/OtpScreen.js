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

export default class OtpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '',
      otp: '',
    };
  }

  onLogin = async () => {
    console.log(this.state.phoneNumber);
    try {
      let res = await fetch('http://192.168.0.111:8080/user/createUser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: this.state.phoneNumber,
          otp: this.state.otp,
        }),
      });
      let res1 = await res.json();
      console.log('Test' + res1.phoneNumber);
      //console.log("Test"+res1);
      //Alert.alert('onPress', res.json.str);
      // Alert.alert('onPress', res1.json.phoneNumber);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <View Style={styles.container}>
        <View style={styles.InputContainer}>
          <TextInput
            value={this.state.phoneNumber}
            onChangeText={phoneNumber => this.setState({phoneNumber})}
            placeholder={'Phone Number'}
            style={styles.input}
          />
          <TextInput
            value={this.state.otp}
            onChangeText={otp => this.setState({otp})}
            placeholder={'OTP'}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>GET OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.resendOtp}>RESEND OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    alignItems: 'center',
    borderWidth: 2,
  },
  InputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    height: 350,
  },
  input: {
    margin: 20,
    borderWidth: 2,
    width: 300,
    textAlign: 'center',
    borderRadius: 10,
    fontSize:18
  },
  button: {
    marginRight: 50,
    marginLeft: 50,
    borderWidth: 2,
    width: 125,
    // margin: 50,
    padding: 15,
    textAlign: 'center',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // padding: 25,
    borderColor: 'black',

    // borderWidth: 2,
    marginBottom: 25,
  },
  resendOtp: {
    textAlign: 'center',
    // borderWidth: 2,
    fontSize:17
  },
});
