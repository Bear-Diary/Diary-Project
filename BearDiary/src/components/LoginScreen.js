//import * as React from 'react';
import React, {useState, createRef} from 'react';
import { StyleSheet, Button, View, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  return (
     <View style={styles.mainBody}>
      <Text style={styles.loginTextStyle}>LOGIN</Text>
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
          onChangeText={(userPw) => setUserId(userPw)}
          placeholder="Enter Password" //PWD
      />
      </View>
      <Button style={styles.buttonStyle}
              title="Login"
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
});