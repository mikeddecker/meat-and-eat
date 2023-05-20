import { StatusBar, StyleSheet, Text, View, Button, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '../src/global/globalStyles'
import LayoutContainer from '../src/components/LayoutContainer'
import { FlatList } from 'react-native'
import ItemCard from '../src/components/ItemCard'
import AddMeetupLocation from '../src/components/AddMeetupLocation'
import { Entypo } from '@expo/vector-icons'; 
import {
  meatupAdded,
  meatupFavorized,
  selectMeatups,
} from '../store/slicers/meatupSlice'
import { useDispatch, useSelector } from 'react-redux'

const AllMeetups = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const meatups = useSelector(selectMeatups)
  const dispatch = useDispatch()

  const toggleFavorite = (item) => {
    dispatch(meatupFavorized(item))
  }

  const navigateTo = (item) => {
    navigation.navigate('MeetupDetails', item)
  }

  const addLocation = (location) => {
    let addToList = true

    for (let meatup of meatups) {
      if (meatup.address === location.address) {
        Alert.alert('Address already exists', location.address, [
          {text: 'OK'},
        ]);
        addToList = false
      }
    }

    if (addToList) {
      dispatch(meatupAdded(location))
    }
  }

  return (
    <View style={globalStyles.container}>
      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <AddMeetupLocation 
          onClose={() => setModalVisible(false)}
          addLocation={addLocation}
        />
      </Modal>

      <LayoutContainer 
        header={{
          title: 'Meat-ups'
        }}
      >
        <View style={styles.flatlistContainer}>
          <FlatList
            data={meatups}
            renderItem={({item}) => (
              <ItemCard 
                item={item} 
                onNavigate={navigateTo}
                onFavorite={() => toggleFavorite(item)}
                />
            )}
            horizontal={false}
            numColumns={2}
          >

          </FlatList>
        
        </View>

        <Entypo 
          name="add-to-list" 
          onPress={() => setModalVisible(true)}
          size={48} 
          color="black" 
          style={styles.icon}/>

      {/* Footer to switch, but I expect it to be in the nav */}
      </LayoutContainer>
    </View>
  )
}

export default AllMeetups

const styles = StyleSheet.create({
  flatlistContainer: {
    height: '90%',
    width: '100%',
    marginBottom: 15,
  },
})