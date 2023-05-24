import { StyleSheet, View, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '../src/global/globalStyles'
import LayoutContainer from '../src/components/LayoutContainer'
import { FlatList } from 'react-native'
import ItemCard from '../src/components/ItemCard'
import AddMeetupLocation from '../src/components/AddMeetupLocation'
import { Entypo } from '@expo/vector-icons'; 
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../src/firebase'
import { useDispatch } from 'react-redux'
import { meatupsSetted } from '../store/slicers/meatupSlice'
import { useAuthStateContext } from '../src/contexts/AuthUserProvider'
import { Ionicons } from '@expo/vector-icons'; 
import { toggleItemsFavorite } from '../src/firebase/firebaseActions'

const AllMeetups = ({ navigation, route }) => {
  const authStateContext = useAuthStateContext()
  const userIsAnonymous = authStateContext.user.isAnonymous

  const [modalVisible, setModalVisible] = useState(false)
  const [meatups, setMeatups] = useState([])
  const dispatch = useDispatch();

  useEffect(()=> {
    const dbRef = collection(db, "meat-ups")

    const unsubscribe = onSnapshot(dbRef,
        (qs) => setMeatups(qs.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        }
    )))

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (meatups.length) {
      dispatch(meatupsSetted(meatups));
    }
  }, [dispatch, meatups]);


  const toggleFavorite = (item) => {
    if (!userIsAnonymous) {
      toggleItemsFavorite(item, !item.favorite)
    }
  }

  const navigateTo = (item) => {
    navigation.navigate('Details', item)
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
        
        {
          userIsAnonymous ? 
          <Ionicons name="fast-food-outline" size={48} color="black" />
          :
          <Entypo 
          name="add-to-list" 
          onPress={() => setModalVisible(true)}
          size={48} 
          color="black" 
          style={styles.icon}/>
        }

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