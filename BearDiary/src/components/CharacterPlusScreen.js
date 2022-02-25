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

function CharacterPlusScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>
        <View style={styles.TopBody}>
            <Text style={styles.txtStyle1}>캐릭터 선택</Text>
        </View>
        <View style={styles.midBody}>
            <View style={styles.midLBody}>
                <View style={styles.imageBox}>
                    <Image source={require('BearDiary/src/Bear1.png')}
                    style={styles.image}/>
                </View>
                <View style={styles.imageBox}>
                    <Image source={require('BearDiary/src/Bear2.png')}
                    style={styles.image}/>
                </View>
                <View style={styles.imageBox}>
                    <Image source={require('BearDiary/src/Bear3.png')}
                    style={styles.image}/>
                </View>
            </View>
            <View style={styles.midRBody}>
                <Image source={require('BearDiary/src/Bear1_F.png')}
                style={styles.image2}/>
            </View>
        </View>
        <View style={styles.botBody}>
            <View style={styles.botBodyL} />
            <View style={styles.botBodyR}>
                <Text style={styles.txtStyle2}
                onPress={() => navigation.navigate('Main')}> 선택완료 </Text>
            </View>
        </View>
    </View>
  );
}

export default CharacterPlusScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: 'white',
  },
  TopBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midBody: {
    flex: 6,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  botBody: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  midLBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  midRBody: {
    flex: 3,
  },
  botBodyL: {
    flex: 5,
  },
  botBodyR: {
    flex: 2,
  },
  imageBox: {
    height: '20%',
  },
  image: {
    width: 90,
    height: 90,
  },
  image2: {
    width: 290,
    height: 500,
  },
  txtStyle1:{
    fontWeight: 'bold',
    fontSize: 25,
  },
  txtStyle2:{
    fontWeight: 'bold',
    fontSize: 20,
  },
});