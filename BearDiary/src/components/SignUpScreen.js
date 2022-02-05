//import * as React from 'react';
import React, {useState, createRef} from 'react';
//import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import { RadioButton } from 'react-native-paper';

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

function SignUpScreen({ navigation }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('')
  const [userPwChk, setUserPwChk] = useState('');
  const [userSex, setUserSex] = useState('');

  const ref = firestore().collection('user');

  function test() {
    console.log(userSex);
    console.log(userEmail);
    console.log(userId);
    console.log(userName);
    console.log(userPw);
    console.log(userPwChk);
  }
  async function signUp() {
     await ref.add({
        userEmail: userEmail,
        userId: userId,
        userName: userName,
        userPw: userPw,
        userSex: userSex
     });
  }
  return (
    <View style={styles.mainBody}>
          <Text style={styles.titleTextStyle}>SIGN UP</Text>
          <View style={styles.SectionStyle}>
            <TextInput
                style = {styles.inputStyle}
                onChangeText={(userName) => setUserName(userName)}
                placeholder="Name" //Name
                autoCapitalize="none"
                returnKeyType="next"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
                style = {styles.inputStyle}
                onChangeText={(userEmail) => setUserEmail(userEmail)}
                placeholder="E-mail" //E-mail
                autoCapitalize="none"
                returnKeyType="next"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
                style = {styles.inputStyle}
                onChangeText={(userId) => setUserId(userId)}
                placeholder="ID" //ID
                autoCapitalize="none"
                returnKeyType="next"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
                style = {styles.inputStyle}
                onChangeText={(userPw) => setUserPw(userPw)}
                placeholder="Password" //PWD
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
                style = {styles.inputStyle}
                onChangeText={(userPwChk) => setUserPwChk(userPwChk)}
                placeholder="Confirm Password" //PWD Check
            />
          </View>
          <View style={styles.SectionStyle}>
             <RadioButton
               value="male"
               status={ userSex === 'male' ? 'checked' : 'unchecked' }
               onPress={() => setUserSex('male')}
             /><Text>male</Text>
             <RadioButton
               value="female"
               status={ userSex === 'female' ? 'checked' : 'unchecked' }
               onPress={() => setUserSex('female')}
             /><Text>female</Text>
           </View>
          <View style={styles.MarginStyle}>
          </View>
          <Button style={styles.buttonStyle}
                title="Sign Up"
                onPress={() => signUp()}
          />
    </View>
  );
}

export default SignUpScreen;

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