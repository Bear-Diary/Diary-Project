import React, { useState } from "react";
import { StyleSheet, Button, View, Image, TouchableOpacity, ScrollView, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

function ShopScreen({ navigation }) {
  const ref = firestore().collection('diary');

  return (
    <View style={styles.mainBody}>
        <View style={styles.TopBody}>
            <View style={styles.TopCon0}/>
            <View style={styles.TopCon1}>
                <Image source={require('../images/Bear-B.png')}
                    style={styles.image}/>
            </View>
            <View style={styles.TopCon2}>
                <Image source={require('../images/Coin-state.png')}
                    style={styles.image3} resizeMode="cover"/>
            </View>
            <View style={styles.TopCon3}>
                <Image source={require('../images/Setting.png')}
                    style={styles.image4}/>
            </View>
        </View>
        <View style={styles.Body2}>
            <Image source={require('../images/Bear1.png')}
                style={styles.image6}/>
            <Text style={styles.nameText}>닉네임</Text>
        </View>
        <View style={styles.Body3}>
            <Image source={require('../images/shopicon.png')}
                style={styles.image7}/>
            <Image source={require('../images/closet.png')}
                style={styles.image7}/>
        </View>
        <View style={styles.Body4}>
            <View style={styles.Body4L}/>
            <View style={styles.Body4R}>
                <Text style={styles.optText}> 정보변경 > </Text>
                <Text style={styles.optText}> Q & A > </Text>
                <Text style={styles.optText}> MEMO > </Text>
                <Text style={styles.optText}> 공지 > </Text>
            </View>
        </View>
    </View>
  );
}

export default ShopScreen;

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
  Body2: {
    flex: 2.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Body3: {
    flex: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Body4: {
    flex: 3.25,
    flexDirection: 'row',
    alignItems: 'center',
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
  TopCon3: {
    width: '5%',
  },
  midLBody:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  midRBody:{
    flex:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Body4L: {
    width: '5%',
    backgroundColor: 'yellow',
  },
  Body4L: {
    width: '10%',
    backgroundColor: 'red',
  },
  image: {
    width: 70,
    height: 70,
  },
  image2: {
    width: 130,
    height: 130,
  },
  image3: {
    width: 160,
    height: 40,
  },
  image4: {
    width: 50,
    height: 50,
  },
  image5: {
    width: 255,
    height: 440,
  },
  image6: {
    width: 80,
    height: 80,
  },
  image7: {
    width: 150,
    height: 150,
  },
  imageBox: {
    height: '10%',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  optText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
