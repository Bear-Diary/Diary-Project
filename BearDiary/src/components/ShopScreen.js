import * as React from 'react';
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

function ShopScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>
        <View style={styles.topBody}>
            <View style={styles.TopCon0}/>
            <View style={styles.TopCon1}>
                <Image source={require('BearDiary/src/Bear-B.png')}
                    style={styles.image}/>
            </View>
            <View style={styles.TopCon2}>
                <Image  source={require('BearDiary/src/Coin-state.png')}
                    style={styles.image3}
                    resizeMode="cover"
                />
            </View>
        </View>
        <View style={styles.midBody}>
            <View style={styles.midLBody}>
                <View style={styles.imageBox}>
                    <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image4}/>
                </View>
                <View style={styles.imageBox}>
                    <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image4}/>
                </View>
                <View style={styles.imageBox}>
                    <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image4}/>
                </View>
                <View style={styles.imageBox}>
                    <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image4}/>
                </View>
                <View style={styles.imageBox}>
                    <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image4}/>
                </View>
            </View>
            <View style={styles.midRBody}>
                <Image source={require('BearDiary/src/Bear1_F.png')} style={styles.image5}/>
            </View>
        </View>
        <View style={styles.botBody}>
            <ScrollView horizontal
                showsHorizontalScrollIndicator={true}>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
                <Image source={require('BearDiary/src/Bear-B.png')} style={styles.image2}/>
            </ScrollView>
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
  topBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  midBody: {
    flex: 6.4,
    flexDirection: 'row',
  },
  botBody: {
    flex: 1.8,
    justifyContent: 'center',
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
    width: 40,
    height: 40,
  },
  image5: {
    width: 255,
    height: 440,
  },
  imageBox: {
    height: '10%',
  },
});