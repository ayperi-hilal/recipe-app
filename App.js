import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";
import Landing from './screens/Landing';
import Home from './screens/Home';
import Profile from './screens/Profile';

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
                    name="Login"
                    component={Landing}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;