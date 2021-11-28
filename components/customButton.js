import React from 'react';
import { 
    Text, 
    TouchableOpacity,
 } from 'react-native';
 import { LinearGradient } from 'expo-linear-gradient';

const CustomButton =({
    buttonText,buttonContainerStyle,color,
    onPress})=>{
        if(color.length>0){
            return(
                <TouchableOpacity
                onPress={onPress}>
                    <LinearGradient
                    start={{x:0,y:0}}
                    end={{x:1,y:0}}
                    colors={color}
                    style={{
                        ...buttonContainerStyle
                    }}>
                    <Text
                    style={{
                        textAlign:'center',
                        color:'#fff',
                        fontSize:16
                        
                    }}>{buttonText}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
        }
        else{
            return(
                <TouchableOpacity
                style={{
                    ...buttonContainerStyle
                }}
                onPress={onPress}>
                    <Text
                    style={{
                        textAlign:'center',
                        color:"#fff",
                        fontSize:16
                        
                    }}>{buttonText}</Text>
                </TouchableOpacity>
            )
        }
    }

export default CustomButton
