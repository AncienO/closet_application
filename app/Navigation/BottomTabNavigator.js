import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';   
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Nav_Screens/HomeScreen';
import SearchScreen from './Nav_Screens/SearchScreen';
import ProfileScreen from './Nav_Screens/ProfileScreen';
import UploadScreen from './Nav_Screens/UploadScreen';
import ClosetScreen from './Nav_Screens/ClosetScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#8B5A2B',
          height: 80,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={28} color={focused ? '#fff' : '#ccc'}/>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="search" size={28} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          tabBarIcon: ({ focused }) => (
              <Icon name="add" size={28} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
      <Tab.Screen
        name="ClosetScreen"
        component={ClosetScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="grid" size={28} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="person" size={28} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
