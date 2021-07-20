import React, {Component} from 'react';
import { Alert, Button, TextInput, View, StyleSheet , Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  }
  
  

onLogin = async() => {
  console.log(this.state.email);
  try {
    let res = await fetch('http://192.168.0.111:8080/user/createUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {         
          email: this.state.email,
          password: this.state.password

        }
      ),
    });
    let res1 = await res.json();
    console.log("Test"+res1.email);
    //console.log("Test"+res1);
    //Alert.alert('onPress', res.json.str);
   // Alert.alert('onPress', res1.json.email);
  } catch (e) {
    console.error(e);
  }
};

 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Apartment App</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.button}
          onPress={this.onLogin}
        />
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
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5
  },
  heading :{
    fontSize:20,
    marginBottom:20,
    fontWeight:'bold'
  }  
});
