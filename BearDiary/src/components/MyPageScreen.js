
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { styles } from './globalStyles';

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

function MyPageScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>

    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 10, marginRight: 10, marginTop: 30 }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Detail")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#5facdb",
          }}
        >
          <Image
            source={require("../images/MyPage.png")}
            style={{ height: 24, width: 24 }}
          />
        </TouchableOpacity>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#ff5c83",
            marginHorizontal: 22,
          }}
        >
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 66,
            width: 66,
            borderRadius: 50,
            backgroundColor: "#ffa06c",
          }}
        >
        </View>
      </ScrollView>

    </View>

  );
}

export default MyPageScreen;