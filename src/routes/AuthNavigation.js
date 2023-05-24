import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';


const Tab = createMaterialBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        activeColor="gold" // f0edf6
        inactiveColor="#f0edf6" // 3e2465
        barStyle={styles.barStyle}
      >
        <Tab.Screen 
          name="LoginTab" 
          component={LoginScreen}
          options={{
            title: 'Login',
            tabBarIcon: ({ color }) => (
              <Ionicons name="people-sharp" size={24} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="RegisterTab" 
          component={RegisterScreen} 
          options={{
            title: 'Register',
            tabBarIcon: ({ color }) => (
              <Entypo name="info" size={24} color={color} />
            ),
          }} 
        />
      </Tab.Navigator>
      <StatusBar  
        animated={true}
        backgroundColor="saddlebrown"
        barStyle="auto"
      />
    </NavigationContainer>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    barStyle: {
      backgroundColor: 'saddlebrown',
      paddingTop: 5
    }
  });