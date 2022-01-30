import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

function DBTestScreen({ navigation }) {
  const ref = firestore().collection('account');

  async function addTodo() {
      await ref.add({
        id: "test",
        password: "",
        test:123
      });
   }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DBTest Screen</Text>
      <Button
              title="Go to DBTest"
              onPress={() => addTodo()} // Details로 화면 이동
            />
    </View>
  );
}

export default DBTestScreen;