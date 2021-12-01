import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    FlatList
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {useNavigation} from '@react-navigation/core'
import { auth } from '../firebase'
//API CALL
import {COLORS,SIZES,} from '../constants';





const Home = () => {

    const navigation=useNavigation()
    const handleSingOut=()=>{
        auth
        .signOut()
        .then(()=>{
            navigation.replace("Login")
        })
        .catch(error=>alert(error.message))
    }


    return (
        <View style={styles.container}>
            <Text>Email:{auth.currentUser?.email}</Text>
            <TouchableOpacity
            onPress={handleSingOut}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Oturumu Kapat</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'#0782F9',
        width:'60%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:40,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
})
