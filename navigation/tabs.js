import React from 'react';
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Bookmark from "../screens/Bookmark";
import Search from "../screens/Search";

import {COLORS,icons} from "../constants";
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                elevation:0,
                backgroundColor:'#fff',
                borderTopColor:'transparent',
                height:100
            }
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused})=> <TabIcon 
                    focused={focused}
                    icon={icons.home}/>
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({focused})=> <TabIcon 
                    focused={focused}
                    icon={icons.search}/>
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={Bookmark}
                options={{
                    tabBarIcon: ({focused})=> <TabIcon 
                    focused={focused}
                    icon={icons.bookmark}/>
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused})=> <TabIcon 
                    focused={focused}
                    icon={icons.user}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;