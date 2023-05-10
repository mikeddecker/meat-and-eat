import { StatusBar, StyleSheet, Text, View, Button, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../src/global/globalStyles'
import LayoutContainer from '../src/components/LayoutContainer'
import { FlatList } from 'react-native'
import MeatUpPlaces from '../src/global/MeatUpPlaces'
import ItemCard from '../src/components/ItemCard'
import AddMeetupLocation from '../src/components/AddMeetupLocation'
import uuid from 'uuid'
import { Entypo } from '@expo/vector-icons'; 


const AllMeetups = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const [rerender, useRerender] = useState(false)

  const toggleFavorite = (item) => {
      item.favorite = !item.favorite
      useRerender(!rerender)
  }

  const navigateTo = (item) => {
    navigation.navigate('MeetupDetails', item)
  }

  const addLocation = (location) => {
    let addToList = true

    for (let meatId in MeatUpPlaces) {
      let meat = MeatUpPlaces[meatId]
      if (meat.address === location.address) {
        Alert.alert('Address already exists', location.address, [
          {text: 'OK'},
        ]);
        addToList = false
      }
    }

    if (addToList) {
      location.favorite = false
      MeatUpPlaces.push(location)
      location.id = uuid.v4()
    }
    // add new id
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
            data={MeatUpPlaces}
            renderItem=
            {
              ({item}) => (
                <View key={item} style={{flex: 1}}>
                  <ItemCard
                  item={item}
                  onNavigate={(item) => navigateTo(item)}
                  onFavorite={() => toggleFavorite(item)}
                  />
                </View>
              )
            }
            horizontal={false}
            numColumns={2}
          />
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