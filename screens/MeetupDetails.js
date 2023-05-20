import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import globalStyles from '../src/global/globalStyles'
import LayoutContainer from '../src/components/LayoutContainer'
import { MaterialIcons } from '@expo/vector-icons'; 
import ItemCardDetail from '../src/components/ItemCardDetail';

const MeetupDetails = ({ navigation, route }) => {
  const item = route.params
  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <LayoutContainer
        header={{
          title: 'Details',
          goBack: goBack
        }}
      >
        <View style={[globalStyles.containerLeft]}>
          <ItemCardDetail item={item} />
        </View>
      </LayoutContainer>
    </View>
  )
}

export default MeetupDetails

const styles = StyleSheet.create({})