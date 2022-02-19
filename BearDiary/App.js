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

import isLogin from './src/components/isLogin';
import Home from './src/components/HomeScreen';
import Login from './src/components/LoginScreen';
import DBTest from './src/components/DBTestScreen';
import SignUp from './src/components/SignUpScreen';
import Main from './src/components/MainScreen';
import Shop from './src/components/ShopScreen';
import Diary from './src/components/DiaryScreen';
import Map from './src/components/MapScreen';
import MyPage from './src/components/MyPageScreen';

class App extends React.Component {
render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="isLogin" component={isLogin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DBTest" component={DBTest} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Diary" component={Diary} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="MyPage" component={MyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
};

export default App;
