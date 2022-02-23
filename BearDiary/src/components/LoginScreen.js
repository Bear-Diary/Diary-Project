//import * as React from 'react';
import React, {useState, createRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
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
  Alert
} from 'react-native';

function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const ref = firestore().collection('user');

  async function login() {
    try{
        const data = await ref.get();
        const userData = await AsyncStorage.getItem('userData');
        //setUsers(data._docs.map(doc => ({ ...doc.data(), id: doc.id })));
        const users = data._docs.map(doc => ({ ...doc.data(), id: doc.id }));
        var isUser = false;
        var pw="";
        for(var i=0; i<users.length; i++) {
            if(users[i].userId === userId) {
                isUser=true;
                pw=users[i].userPw;
            }
        }
        if(!isUser) {
            Alert.alert("아이디가 존재하지 않습니다.");
        }
        else {
            if(userPw !== pw) {
                Alert.alert("비밀번호가 일치하지 않습니다.");
            }
            else {
                Alert.alert("로그인 성공");
                AsyncStorage.setItem(
                'userData',
                JSON.stringify({
                 // token: token,
                  userId: userId
                })
              ).then(navigation.push('Home'));
              //navigation.navigate('Home');
            }
        }
    } catch (err) {
        console.log(err+"!");
    }
  }

  return (
     <View style={styles.mainBody}>
      <Text style={styles.loginTextStyle}>LOGIN</Text>
      <Text style={styles.loginTextStyle}>로그인</Text>
      <View style={styles.SectionStyle}>
      <TextInput
         style = {styles.inputStyle}
         onChangeText={(userId) => setUserId(userId)}
         placeholder="Enter ID" //ID
         autoCapitalize="none"
         returnKeyType="next"
      />
      </View>
      <View style={styles.SectionStyle}>
      <TextInput
          style = {styles.inputStyle}
          onChangeText={(userPw) => setUserPw(userPw)}
          placeholder="Enter Password" //PWD
          secureTextEntry={true}
      />
      </View>
      <Text
          style={styles.joinTextStyle}
          onPress={() => navigation.push('SignUp')} // 회원가입 화면으로 이동, 나중에 경로 수정 예정
      >회원가입</Text>
      <Button
          title="Login"
          color='#000000'
          onPress={() => login()} // 로그인 후 화면으로 이동, 나중에 경로 수정 예정
      />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
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
  LoginText: {
    backgroundColor: '#FFF',
    height: 40,
    borderWidth: 40,
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
  loginTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 20,
  },
  joinTextStyle: {
      color: '#c7c7c7',
      marginLeft: 190,
      marginBottom: 15,
      paddingVertical: 10,
      fontSize: 15,
    },
});