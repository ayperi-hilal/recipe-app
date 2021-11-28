import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";
import Landing from './screens/Landing';
import Login from './screens/Login';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Landing'}
            >
                <Stack.Screen
                    name="Landing"
                    component={Landing}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;