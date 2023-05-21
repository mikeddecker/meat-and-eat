import { StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import AllMeetups from '../../screens/AllMeetups';
import About from '../../screens/About';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeetupDetails from '../../screens/MeetupDetails';
import { Ionicons, Entypo } from '@expo/vector-icons'; 


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();


const AllMeetupsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllMeetupsScreen" component={AllMeetups} />
      <Stack.Screen name="MeetupDetails" component={MeetupDetails} />
    </Stack.Navigator>
  );
}

const MeatAndEatNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="AllMeetups"
        activeColor="gold" // f0edf6
        inactiveColor="#f0edf6" // 3e2465
        barStyle={styles.barStyle}
      >
        <Tab.Screen 
          name="AllMeetups" 
          component={AllMeetupsStack}
          options={{
            title: 'Meat-ups',
            tabBarIcon: ({ color }) => (
              <Ionicons name="people-sharp" size={24} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="About" 
          component={About} 
          options={{
            title: 'About',
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

export default MeatAndEatNavigation

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