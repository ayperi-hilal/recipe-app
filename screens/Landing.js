import React from 'react';
import { 
    StyleSheet,
    Text, 
    View,
    TouchableOpacity,
    ImageBackground,
    StatusBar
 } from 'react-native';

import {images,SIZES} from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../components/CustomButton';


function Landing({navigation}) {
    function renderHeader(){
        return(
            <View 
            style={{
                height: SIZES.height > 700 ? "65%" : "60%"
            }}>
                <ImageBackground 
                source={images.loginBackground}
                style={{
                    flex:1,
                    justifyContent:'flex-end'
                }}
                resizeMode="cover">
                    <LinearGradient
                    start={{ x:0,y:0 } }
                    end={{ x:0,y:1 }}
                    colors={[
                        'transparent',
                        '#000'
                    ]}
                    style={{
                        height:200,
                        justifyContent:'flex-end',
                        paddingHorizontal:24
                    }}
                    >
                        <Text
                        style={{
                            width:"100%",
                            color:'#fff',
                            fontSize:40,
                            lineHeight:45
                        }}>
                            En güzel tariflerini deneyin!
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>

        )
    }
    function renderDetail(){
        return(
            <View 
            style={{
                flex:1,
                paddingHorizontal:24
            }}>
                <Text
                style={{
                    marginTop:12,
                    width:"70%",
                    color:"#777777",

                }}>
                    En güzel tarifleri keşfet ve deneme şansı yakala...
                </Text>
                <View
                style={{
                    flex:1,
                    justifyContent:'center'
                }}>
                    <CustomButton
                    buttonContainerStyle={{
                        paddingVertical:10,
                        borderRadius:18
                    }}
                    buttonText="Giriş yap"
                    color={['#229879','#2AD699']}
                    onPress={()=>navigation.push("Login")}
                    />
                    <CustomButton
                    buttonContainerStyle={{
                        marginTop:8,
                        paddingVertical:10,
                        borderRadius:18,
                        borderColor:'#1A8871',
                        borderWidth:1
                    }}
                    buttonText="Üye ol"
                    color={[]}
                    onPress={()=>navigation.push("SignUp")}
                    />
                </View>
            </View>

        )
    }

    return (
        <View style={styles.login}>
            <StatusBar barStyle="light-content"/>
            {renderHeader()}
            {renderDetail()}
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
      flex: 1,
      backgroundColor: '#000',
    }
  });
export default Landing
