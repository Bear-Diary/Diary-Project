/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from './src/components/HomeScreen';
import Login from './src/components/LoginScreen';
import DBTest from './src/components/DBTestScreen';

class App extends React.Component {
render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DBTest" component={DBTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
};

export default App;
