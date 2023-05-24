import { StatusBar, StyleSheet, Text, View, Button, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '../src/global/globalStyles'
import LayoutContainer from '../src/components/LayoutContainer'
import { FlatList } from 'react-native'
import ItemCard from '../src/components/ItemCard'
import AddMeetupLocation from '../src/components/AddMeetupLocation'
import { Entypo } from '@expo/vector-icons'; 
import { collection, doc, getDocs, onSnapshot, query, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../src/firebase'

const AllMeetups = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const [meatups, setMeatups] = useState([])

  const totalFavorites = meatups.reduce(
    (total, meatup) => total += meatup.favorite ? 1 : 0,
    0
  )

  useEffect(()=> {
    const dbRef = collection(db, "meat-ups")

    const unsubscribe = onSnapshot(dbRef,
        (qs) => setMeatups(qs.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        }
    )))

    return () => unsubscribe()
  }, [])




  const toggleFavorite = (item) => {
    const itemRef = doc(db, 'meat-ups', item.id)
    updateDoc(itemRef, {
      favorite: !item.favorite
    })
};

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
      let meatupRef = collection(db, 'meat-ups')
      setDoc(doc(meatupRef), location)
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
          title: 'Meat-ups',
          amount: totalFavorites
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