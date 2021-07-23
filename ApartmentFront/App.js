import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './SCREENS/LoginScreen'
import ErrorPage  from './SCREENS/ErrorPage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Apartment"
          component= {LoginScreen}
        />
        <Stack.Screen
          name="Error Page"
          component= {ErrorPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;