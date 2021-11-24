import React from 'react';
import { 
    StyleSheet,
    Text, 
    View,
    TouchableOpacity,
    ImageBackground,
    StatusBar
 } from 'react-native';
 import {COLORS,SIZES,FONTS} from "../constants"

function Landing({navigation}) {
    return (
        <View style={styles.login}>
            <StatusBar barStyle="dark-content"/>
        </View>
    )
}
const styles = StyleSheet.create({
    login: {
      flex: 1,
      backgroundColor: '#000',
    },
  });
export default Landing
