import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import MeetupDetailsScreen from '../../screens/MeetupDetailsScreen';
import AllMeetupsScreen from '../../screens/AllMeetupsScreen';
import Header from '../components/Header';
import AboutScreen from '../../screens/AboutScreen';


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const headerComponent = (navigation) => {
  return (
    <Header
      goBack={navigation.canGoBack() ? navigation.goBack : false}
    />
  );
}

const AllMeetupsStack = () => {
  return (
    <Stack.Navigator screenOptions={() => ({
      header: ({ navigation }) => headerComponent(navigation),
    })}>
      <Stack.Screen name="All Meetups" component={AllMeetupsScreen} />
      <Stack.Screen name="Details" component={MeetupDetailsScreen} />
    </Stack.Navigator>
  );
}

const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={() => ({
      header: ({ navigation }) => headerComponent(navigation),
    })}>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

const MeatAndEatNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="AllMeetupsTab"
      activeColor="gold" // f0edf6
      inactiveColor="#f0edf6" // 3e2465
      barStyle={styles.barStyle}
    >
      <Tab.Screen 
        name="AllMeetupsTab" 
        component={AllMeetupsStack}
        options={{
          title: 'Meat-ups',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-sharp" size={24} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="AboutTab" 
        component={AboutStack} 
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <Entypo name="info" size={24} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
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