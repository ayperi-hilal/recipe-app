import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,

} from 'react-native';
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
    return (
        <CustomButton
                    buttonContainerStyle={{
                        paddingVertical:10,
                        borderRadius:18
                    }}
                    buttonText="Giriş yap"
                    color={['#229879','#2AD699']}
                    onPress={()=>navigation.replace("Home")}
                    />
    )
}

export default Login;