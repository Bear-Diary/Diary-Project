import * as React from 'react';
//import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
              onPress={() => navigation.navigate('Login')} // Login로 화면 이동
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
      <Button
        title="Go to DBTest"
        onPress={() => navigation.navigate('DBTest')} // DBTest로 화면 이동
      />
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')} // Details로 화면 이동
      />
    </View>
  );
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