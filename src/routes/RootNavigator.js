import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MeatAndEatNavigation from './MeatAndEatNavigation'
import { useAuthStateContext } from '../contexts/AuthUserProvider'
import AuthNavigation from './AuthNavigation'

const RootNavigator = () => {
    const userContext = useAuthStateContext()

    if (userContext.initializing) return null


  return (
    <NavigationContainer>
        { userContext.user ? <MeatAndEatNavigation/> : <AuthNavigation/> }
        <StatusBar  
            animated={true}
            backgroundColor="saddlebrown"
            barStyle="auto"
        />
    </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})