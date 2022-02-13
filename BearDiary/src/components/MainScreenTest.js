//import * as React from 'react';
import * as React from 'react';
import { StyleSheet, Button, View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function MainScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>
        <View style={styles.TopBody}>
            <View style={styles.TopCon0}/>
            <View style={styles.TopCon1}>
                <Image
                    source={require('BearDiary/src/Bear-B.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.TopCon2}>
                <Image
                    source={require('BearDiary/src/Coin-state.png')}
                    style={styles.image3}
                    resizeMode="cover"
                />
            </View>
        </View>
        <View style={styles.MidBody}>
            <View style={styles.MidCon}>
            <TouchableOpacity
                style={styles.plusImage}
                onPress={() => navigation.navigate('Test')}>
                <Image
                    source={require('BearDiary/src/Plus.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.BotBody}>
            <View style={styles.iconBody}>
            <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                <Image source={require('BearDiary/src/Shop.png')}
                    style={styles.image2}/>
                <Text>SHOP</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.iconBody}>
            <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                <Image source={require('BearDiary/src/Diary.png')}
                    style={styles.image2}/>
                <Text>DIARY</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.iconBody}>
            <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                <Image source={require('BearDiary/src/Map.png')}
                    style={styles.image2}/>
                <Text>MAP</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.iconBody}>
            <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                <Image source={require('BearDiary/src/MyPage.png')}
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
  iconBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});