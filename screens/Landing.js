import React from 'react';
import { 
    StyleSheet,
    Text, 
    View,
    TouchableOpacity,
    ImageBackground,
    StatusBar
 } from 'react-native';
 import {images,COLORS,SIZES,FONTS} from '../constants';
 import { LinearGradient } from 'expo-linear-gradient';
 import {customButton} from "../components";
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
                        COLORS.transparent,
                        COLORS.black
                    ]}
                    style={{
                        height:200,
                        justifyContent:'flex-end',
                        paddingHorizontal:SIZES.padding
                    }}
                    >
                        <Text
                        style={{
                            width:"100%",
                            color:COLORS.white,
                            ...FONTS.largeTitle,
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
                paddingHorizontal:SIZES.padding
            }}>
                <Text
                style={{
                    marginTop:SIZES.radius,
                    width:"70%",
                    color:COLORS.gray,
                    ...FONTS.body3
                }}>
                    En güzel tarifleri keşfet ve deneme şansı yakala...
                </Text>
                <View
                style={{
                    flex:1,
                    justifyContent:'center'
                }}>
                    <customButton
                    buttonText="Giriş yap"
                    color={[COLORS.darkGreen,COLORS.lime]}
                    onPress={()=>navigation.replace("Home")}
                    />
                    <customButton
                    buttonText="Üye ol"
                    color={[]}
                    onPress={()=>navigation.replace("Home")}
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
