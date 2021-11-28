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

import {FONTS,COLORS,icons,images,dummyData} from '../constants';

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