import * as React from 'react';
import {useEffect, useState} from 'react';
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


function HomeScreen({ navigation }) {
  const [userData, setUserData] = useState('');
  const [userId, setUserId] = useState('');
  function logout()
  {
    AsyncStorage.removeItem('userData');
    setUserData('');
    navigation.navigate('Home');
  }

  async function getUserData()
  {
      const userData = await AsyncStorage.getItem('userData');
      setUserData(userData);
      const userInfo = JSON.parse(userData);
      if(userInfo) setUserId(userInfo.userId);
  }
  getUserData();
/*
  useEffect(() => {
    getUserData();
  }, []);
  */
  if(userData === "" || userData === null) {
    return (
        <View style={styles.mainBody}>
          <Text style={styles.titleTextStyle}>Bear Diary</Text>
          <Button
                 title="SIGN UP" // 버튼 디자인 - 곰 인형 아이콘 등 추후 대체 예정
                 onPress={() => navigation.navigate('SignUp')} // SignUp로 화면 이동
          />
          <View style={styles.MarginStyle}>
          </View>
          <Button
                  title="LOGIN"
                  onPress={() => navigation.push('Login')} // Login로 화면 이동
          />
          <View style={styles.MarginStyle}>
          </View>
          <View style={styles.sideBar}>
           <Button
                   title="EXIT"
                   onPress={() => navigation.navigate('Details')} // Details로 화면 이동
                   style={{margin: 30}}
           />
          </View>
          <View style={styles.MarginStyle}>
          </View>
        </View>
      );
  }
  else {
  return (
          <View style={styles.mainBody}>
          <Text style={styles.titleTextStyle}>Bear Diary</Text>
          <Text>'{userId}'님 반갑습니다.</Text>
          <Button
                  title="LOGOUT"
                  onPress={() => logout()} // 로그아웃
          />

         <Button
                 title="GO TO Main"
                 onPress={() => navigation.navigate('Main')} // 메인 화면 이동
         />
         </View>
      );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  sideBar: {
    borderWidth:1,
    position:'absolute',
    bottom:0,
    alignSelf:'flex-end'
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    alignItems: 'center' ,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
      flex: 1,
      color: 'black',
      paddingLeft: 30,
      paddingRight: 30,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
  },
  MarginStyle: {
      margin: 5,
  },
  buttonStyle: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  titleTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 20,
  },
});