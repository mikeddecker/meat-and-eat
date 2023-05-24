import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import globalStyles from '../src/global/globalStyles'
import LayoutContainer from '../src/components/LayoutContainer'
import { MaterialIcons } from '@expo/vector-icons'; 
import ItemCardDetail from '../src/components/ItemCardDetail';

const MeetupDetailsScreen = ({ navigation, route }) => {
  const item = route.params
  const goBack = () => {
    navigation.goBack()
  }

  return (
    <LayoutContainer>
      <View style={[globalStyles.containerLeft]}>
        <ItemCardDetail item={item} />
      </View>
    </LayoutContainer>
  )
}

export default MeetupDetailsScreen

const styles = StyleSheet.create({})