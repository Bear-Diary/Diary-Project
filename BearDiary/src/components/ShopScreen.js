import React, { useState } from "react";
import { StyleSheet, Button, View, Image, TouchableOpacity, ScrollView, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

function ShopScreen({ navigation }) {
  const ref = firestore().collection('diary');

  const [toggle, setToggle] = useState(false);

  function handleOnClick(){
    setToggle(!toggle);
  }

  return (
    <View style={styles.mainBody}>
        <View style={styles.topBody}>
            <View style={styles.TopCon0}/>
            <View style={styles.TopCon1}>
                <Image source={require('../images/Bear-B.png')}
                    style={styles.image}/>
            </View>
            <View style={styles.TopCon2}>
                <Image  source={require('../images/Coin-state.png')}
                    style={styles.image3}
                    resizeMode="cover"
                />
            </View>
        </View>

        <View style={styles.midBody}>
            <View style={styles.midLBody}>
                <View style={styles.imageBox}>
                    <TouchableOpacity><Image source={require('../images/TOP.png')} style={styles.image4}/></TouchableOpacity>
                </View>
                <View style={styles.imageBox}>
                    <TouchableOpacity><Image source={require('../images/BOTTOM.png')} style={styles.image4}/></TouchableOpacity>
                </View>
                <View style={styles.imageBox}>
                    <TouchableOpacity><Image source={require('../images/ONE.png')} style={styles.image4}/></TouchableOpacity>
                </View>
                <View style={styles.imageBox}>
                    <TouchableOpacity><Image source={require('../images/SHOE.png')} style={styles.image4}/></TouchableOpacity>
                </View>
                <View style={styles.imageBox}>
                    <TouchableOpacity><Image source={require('../images/ACC.png')} style={styles.image4}/></TouchableOpacity>
                </View>
            </View>
            <View style={styles.midRBody}>
                <Image source={require('../images/Bear1_F.png')} style={styles.image5}/>
            </View>
        </View>
        <View style={styles.botBody}>
            <ScrollView horizontal
                showsHorizontalScrollIndicator={true}>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bear-B.png')} style={styles.image2}/></TouchableOpacity>
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
