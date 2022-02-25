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

function DiaryScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>
            <View style={styles.TopBody}>
                <View style={styles.TopCon0}/>
                <View style={styles.TopCon1}>
                    <Image
                        source={require('../images//Bear-B.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.TopCon2}>
                    <Image
                        source={require('../images/Coin-state.png')}
                        style={styles.image3}
                        resizeMode="cover"
                    />
                </View>
            </View>
            <View style={styles.MidBody}>
                <View style={styles.MidCon}>
                    <TouchableOpacity
                        style={styles.plusImage}
                        onPress={() => navigation.navigate('PlusDiary')}>
                    <Image
                        source={require('../images/Plus.png')}
                        style={styles.image}/>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  );
}

export default DiaryScreen;

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

  image: {
    width: 70,
    height: 70,
  },
  image3: {
    width: 160,
    height: 40,
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
});