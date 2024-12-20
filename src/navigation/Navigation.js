import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NewPasswordName from '../screens/NewPasswordName';
import ForgotPassword from '../screens/ForgotPassword';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import HomePage from '../main/HomePage';
import MapPage from '../maps/MapPage';
import DestinationScreen from '../screens/DestinationScreen';
import RequestScreen from '../screens/RequesstScreen';
import ScrollBar from '../roles/ScrollBar';
import RideBar from '../roles/RideBar';
import DriveSummary from '../roles/DriveSummary';
import Mapp from '../maps/Mapp';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer initialRouteName='SignIn'>
        <Stack.Navigator >
            <Stack.Screen name='SignIn' component={SignInScreen}/>
            <Stack.Screen name='SignUp' component={SignUpScreen}/>
            <Stack.Screen name='NewPassword' component={NewPasswordName}/>
            <Stack.Screen name='ForgotPwd' component={ForgotPassword}/>
            <Stack.Screen name='Confirmemail' component={ConfirmEmailScreen}/>
            <Stack.Screen name='HomePage' component={HomePage}/>
            <Stack.Screen name='MapPage' component={MapPage}/>
            <Stack.Screen name='DestinationScreen' component={DestinationScreen}/>
            <Stack.Screen name='RequestScreen' component={RequestScreen}/>
            <Stack.Screen name='ScrollBar' component={ScrollBar}/>
            <Stack.Screen name='RideBar' component={RideBar}/>
            <Stack.Screen name='Mapp' component={Mapp}/>
     
            <Stack.Screen name='DriveSummary' component={DriveSummary}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})