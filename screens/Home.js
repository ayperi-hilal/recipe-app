import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';

import {COLORS} from '../constants';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView
        style={{
            flex:1,
            backgroundColor:COLORS.white
        }}>
            <FlatList
            />
        </SafeAreaView>
    )
}

export default Home;