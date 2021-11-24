import React from 'react';
import { 
    Text, 
    TouchableOpacity,
 } from 'react-native';
 import {COLORS,FONTS} from '../constants';
 import { LinearGradient } from 'expo-linear-gradient';

const customButton =({
    buttonText,buttonContainerStyle,colors,
    onPress})=>{
        if(colors.length>0){
            return(
                <TouchableOpacity
                onPress={onPress}>
                    <Text
                    style={{
                        textAlign:'center',
                        color:COLORS.white,
                        ...FONTS.h2
                        
                    }}>{buttonText}</Text>
                </TouchableOpacity>
            )
        }
        else{
            return(
                <TouchableOpacity
                onPress={onPress}>
                    <Text
                    style={{
                        textAlign:'center',
                        color:"red",
                        ...FONTS.h2
                        
                    }}>{buttonText}</Text>
                </TouchableOpacity>
            )
        }
    }

export default customButton
