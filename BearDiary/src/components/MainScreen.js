//import * as React from 'react';
import * as React from 'react';
import { StyleSheet, Button, View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function MainScreen({ navigation }) {
  return (
     <View style={styles.mainBody}>
        <View style={styles.bannerImage}>
        <Image
            source={require('BearDiary/src/Bear-B.png')}
            style={styles.image}
        />
        <View style={styles.bannerImage2}>
            <Image
                source={require('BearDiary/src/Coin-state.png')}
                style={styles.image3}
                resizeMode="cover"
            />
            <Text style={styles.coinNum}> 0</Text>
        </View>
        </View>
        <TouchableOpacity
            style={styles.plusImage}
            onPress={() => navigation.navigate('Details')} //새 캐릭터 생성 버튼
        >
              <Image
                source={require('BearDiary/src/Plus.png')}
                style={styles.image}
              />
        </TouchableOpacity>

        <View style={styles.menuBody}>
        <View style={styles.iconBody}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')} //아이콘 경로 이동
            >
            <Image
                source={require('BearDiary/src/Shop.png')}
                style={styles.image2}
            />
            <Text style={styles.menuTextStyle}>SHOP</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconBody}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')} //아이콘 경로 이동
            >
            <Image
                source={require('BearDiary/src/Diary.png')}
                style={styles.image2}
            />
            <Text style={styles.menuTextStyle}>DIARY</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconBody}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')} //아이콘 경로 이동
            >
            <Image
                source={require('BearDiary/src/Map.png')}
                style={styles.image2}
            />
            <Text style={styles.menuTextStyle}> MAP</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.iconBody}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')} //아이콘 경로 이동
            >
            <Image
                source={require('BearDiary/src/MyPage.png')}
                style={styles.image2}
            />
            <Text style={styles.menuTextStyle}>MyPage</Text>
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
    backgroundColor: '#FFF',
  },
  menuBody: {
    flex: 1,
    flexDirection: "row",
    marginTop: 250,
  },
  iconBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
  image2: {
    width: 60,
    height: 60,
  },
  image3: {
    width: 160,
    height: 40,
  },
  bannerImage: {
    marginTop: 15,
    marginLeft: 25,
    flexDirection: "row",
  },
  bannerImage2: {
    marginTop: 10,
    marginLeft: 10,
  },
  plusImage: {
   marginTop: 200,
   marginLeft: 160,
  },
  menuTextStyle: {
    color: '#675950',
    paddingVertical: 10,
    fontSize: 18,
    marginLeft: 9,
  },
  coinNum: {
    fontSize: 18,
    //paddingVertical: 10,
    marginLeft: 30,
    marginTop: -30,
    marginLeft: 130,
  },
});