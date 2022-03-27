import * as React from 'react';
import {useState, createRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
//import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from "react-native-image-picker"
import * as Progress from 'react-native-progress';
import Styled from 'styled-components/native';
import SelectDropdown from 'react-native-select-dropdown'
import {
  StyleSheet,
  SafeAreaView,
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

  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  const weather = ["sunny", "cloudy", "windy", "rainy", "snowy"]
  const mood = ["perfect", "good", "okay(soso)", "bad", "worst"]

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

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

  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(source);
        setImage(source);
      }
    });
  };

  const uploadImage = async () => {
    const { uri } = image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    setUploading(true);
    setTransferred(0);
    const task = storage()
      .ref(filename)
      .putFile(uploadUri);
    // set progress state
    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
      );
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    setUploading(false);
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!'
    );
    setImage(null);
  };

  return (
   <Container>
    <BGImageContainer
      source={require('../images/DiaryBackground.png')}
//      resizeMode="stretch"
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
            <View style={styles.TopBody} >
                <View style={styles.TitleStyle}>
                    <TextInput
                         style = {styles.TitleInputStyle}
                         onChangeText={(bTitle) => setBTitle(bTitle)}
                         placeholder="제목 입력"
                         autoCapitalize="none"
                         returnKeyType="next"
                    />
                </View>

                <View style={styles.optionStyle}>
                    <SelectDropdown
                        data={weather}
                        buttonStyle={{width: 70, height: 30, marginRight: 100}}
                        buttonTextStyle={{fontSize: 12}}
                        rowTextStyle={{fontSize: 12}}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                </View>

                <View style={styles.optionStyle}>
                    <SelectDropdown
                        data={mood}
                        buttonStyle={{width: 70, height: 30}}
                        buttonTextStyle={{fontSize: 12}}
                        rowTextStyle={{fontSize: 12}}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                </View>

            </View>

            <SafeAreaView style={styles.container}>
                  <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
                    <Text style={styles.buttonText}>Pick an image</Text>
                  </TouchableOpacity>
                  <View style={styles.imageContainer}>
                    {image !== null ? (
                      <Image source={{ uri: image.uri }} style={styles.imageBox} />
                    ) : null}
                    {uploading ? (
                      <View style={styles.progressBarContainer}>
                        <Progress.Bar progress={transferred} width={300} />
                      </View>
                    ) : (
                      <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
                        <Text style={styles.buttonText}>Upload image (test 전용)</Text>
                      </TouchableOpacity>
                    )}
                  </View>
            </SafeAreaView>

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
    marginTop: 10,
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


  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },
  selectButton: {
    borderRadius: 5,
    width: 90,
    height: 40,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadButton: {
    borderRadius: 5,
    width: 90,
    height: 40,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center'
  },
  progressBarContainer: {
    marginTop: 20
  },
  imageBox: {
    width: 300,
    height: 300
  },

  optionStyle: {
    width: 10,
    height: 30
  }
});