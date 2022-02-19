import * as React from 'react';
//import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Modal,
  ScrollView,
} from 'react-native';

async function ttest()
{
    const userData = await AsyncStorage.getItem('userData');
    console.log(userData[1]);
    navigation.navigate('Home', userData);
}

function isLogin({ navigation }) {
  return (
    <View>
    <Button
                     title="SIGN UP" // 버튼 디자인 - 곰 인형 아이콘 등 추후 대체 예정
                     onPress={() => ttest()} // SignUp로 화면 이동
              />
    </View>
  );
}

export default isLogin;
