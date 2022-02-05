import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')} // Details로 화면 이동
      />
      <Button
        title="Go to DBTest"
        onPress={() => navigation.navigate('DBTest')} // Details로 화면 이동
      />
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')} // Details로 화면 이동
      />
    </View>
  );
}

export default HomeScreen;