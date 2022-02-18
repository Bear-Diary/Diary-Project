import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

function ShopScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>

        <View style={styles.BotBody}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                style={{ marginLeft: 10, marginRight: 10, marginTop: 30 }}
              >
                <Image
                    source={require('../images/product_top.jpg')}
                    style={styles.image}
                />

                <Image
                    source={require('../images/product_top.jpg')}
                    style={styles.image}
                />

                <Image
                    source={require('../images/product_top.jpg')}
                    style={styles.image}
                />

                <Image
                    source={require('../images/product_top.jpg')}
                    style={styles.image}
                />

                <Image
                    source={require('../images/product_top.jpg')}
                    style={styles.image}
                />

                <Image
                    source={require('../images/product_top.jpg')}
                    style={styles.image}
                />
            </ScrollView>
        </View>

    </View>
  );
}

export default ShopScreen;