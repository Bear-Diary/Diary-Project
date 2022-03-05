import * as React from 'react';
import {useState, createRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import Styled from 'styled-components/native';
//import RNPickerSelect from '@react-native-picker/picker';
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

const Container = Styled.SafeAreaView``;

const BGImageContainer = Styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

function DiaryScreen({ navigation }) {
  const [boardId, setBoardId] = useState('');
  const [bUserId, setBUserId] = useState('');
  const [bSpotId, setBSpotId] = useState('');
  const [bTitle, setBTitle] = useState('');
  const [bWeather, setBWeather] = useState('');
  const [bMood, setBMood] = useState('');
  const [bPicId, setBPicId] = useState('');
  const [bContent, setBContent] = useState('');

  const ref = firestore().collection('diary').doc('diary_board');

  async function registerDiary() {
    if(bTitle.length == 0) {
        Alert.alert("제목을 입력해주세요.");
    }
//    else if(userPw !== userPwChk) {
//        Alert.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
//    }
    else {
         await ref.add({
            boardId: boardId,
            bUserId: bUserId,
            bSpotId: bSpotId,
            bTitle: bTitle,
            bWeather: bWeather,
            bMood: bMood,
            bPicId: bPicId,
            bContent: bContent
         });
         Alert.alert("다이어리가 저장되었습니다.");
         navigation.navigate('PlusDiary');
     }
  }

  return (
   <Container>
    <BGImageContainer
      source={require('../images/DiaryBackground.png')}
      resizeMode="stretch"
    >
        <View style={styles.TopBody} >
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
            </View>
        </View>
        <View style={styles.MidBody}>
            <View style={styles.TitleStyle}>
                <TextInput
                     style = {styles.TitleInputStyle}
                     onChangeText={(bTitle) => setBTitle(bTitle)}
                     placeholder="제목 입력"
                     autoCapitalize="none"
                     returnKeyType="next"
                />
            </View>

            <View style={styles.ContentStyle}>
                <TextInput
                     style = {styles.ContentInputStyle}
                     onChangeText={(bContent) => setBContent(bContent)}
                     placeholder="일기 내용 입력"
                     autoCapitalize="none"
                     returnKeyType="next"
                />
            </View>
        </View>
        <View style={styles.BottomBody}>
        </View>
    </BGImageContainer>
   </Container>
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
//    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  TextStyle:{
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },
  TitleStyle: {
    flexDirection: 'column',
    height: 30,
    marginTop: 22,
    marginLeft: -70,
    marginRight: 30,
    margin: 10,
//    backgroundColor: "red"
  },
  TitleInputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 40,
    paddingTop: 0,
    paddingBottom: 0,
  },
  ContentStyle: {
    height: 100,
    marginTop: 22,
    marginLeft: 0,
    marginRight: 20,
    margin: 10,
//    backgroundColor: "yellow"
  },
  ContentInputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 40,
    paddingTop: 0,
    paddingBottom: 0,
  },
});