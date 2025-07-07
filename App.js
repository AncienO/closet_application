import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './app/Navigation/BottomTabNavigator';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import LaunchScreen from "./app/Screens/LaunchScreen";
import SignUp from './app/Screens/SignUp';
import LoginScreen from './app/Screens/LoginScreen';
import SignUpScreen from './app/Screens/SignUpScreen';

const Stack = createStackNavigator();

export default function App() {
  console.log('App Executed')

  return (
    //<LaunchScreen/>
    //<LoginScreen/>
    //<SignUpScreen/>

    // <NavigationContainer>
    //   <BottomTabNavigator/>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Signin" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

