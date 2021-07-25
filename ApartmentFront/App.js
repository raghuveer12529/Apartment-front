import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './SCREENS/LoginScreen';
import ErrorPage from './SCREENS/ErrorPage';
import MainScreen from './SCREENS/MainScreen';
import OtpScreen from './SCREENS/OtpScreen';
import RegisterScreen from './SCREENS/RegisterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Apartment App" component={MainScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Error Page" component={ErrorPage} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
