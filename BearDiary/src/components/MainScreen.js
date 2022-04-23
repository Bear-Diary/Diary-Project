//import * as React from 'react';
import * as React from 'react';
import {useEffect, useState} from 'react';
import { StyleSheet, Button, View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MainScreen({ navigation }) {
  //const ref = firestore().collection('account');

  const [userCoin, setUserCoin] = useState(0);
  const [userData, setUserData] = useState('');

    async function getUserData()
    {
        const userData = await AsyncStorage.getItem('userData');
        setUserData(userData);
        const userInfo = JSON.parse(userData);
        setUserCoin(userInfo.userCoin);
    }
  getUserData();
/*
  async function addTodo() {
      await ref.add({
        id: "test",
        password: "",
        test:123
      });
   }*/
  return (
    <View style={styles.mainBody}>
        <View style={styles.TopBody}>
            <View style={styles.TopCon0}/>
            <View style={styles.TopCon1}>
                <Image
                    source={require('../images/Bear-B.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.TopCon2}>
                <Image
                    source={require('../images/Coin-state.png')}
                    style={styles.image3}
                    resizeMode="cover"
                />
                <Text style={styles.coinState}>{userCoin}</Text>
            </View>
        </View>
        <View style={styles.MidBody}>
            <View style={styles.MidCon}>
            <TouchableOpacity
                style={styles.plusImage}
                onPress={() => navigation.navigate('PlusCha')}>
                <Image
                    source={require('../images/Plus.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.BotBody}>
            <View style={styles.iconBody}>
            <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
                <Image source={require('../images/Shop.png')}
                    style={styles.image2}/>
                <Text>SHOP</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.iconBody}>
            <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
                <Image source={require('../images/Diary.png')}
                    style={styles.image2}/>
                <Text>DIARY</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.iconBody}>
            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                <Image source={require('../images/Map.png')}
                    style={styles.image2}/>
                <Text>MAP</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.iconBody}>
            <TouchableOpacity onPress={() => navigation.navigate('MP')}>
                <Image source={require('../images/MyPage.png')}
                    style={styles.image2}/>
                <Text>MyPage</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: 'white',
  },
  TopBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  MidBody: {
    flex: 6,
    justifyContent: 'center',
  },
  BotBody: {
    flex: 1.25,
    flexDirection: 'row',
  },
  TopCon0: {
    width: '5%',
  },
  TopCon1: {
    width: '25%',
  },
  TopCon2: {
    width: '50%',
  },
  MidCon: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
    image2: {
    width: 70,
    height: 70,
  },
    image3: {
    width: 160,
    height: 40,
  },
  coinState : {
    position: 'absolute',
    top: '15%',
    left: '20%',
    color: 'black'
  },
  iconBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});