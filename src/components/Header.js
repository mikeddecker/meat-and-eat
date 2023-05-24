import { StatusBar, StyleSheet, Text, ImageBackground, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useEffect, useRef, useState } from 'react'
import { collection, getCountFromServer, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { debounce } from 'lodash';


const image = require('../img/burger-bg-unsplash.jpg');

// const debouncedCountFetch = debounce(fetchData, 500)

const Header = ({options, amount}) => {
  // console.debug('rerender header?');
  const countRef = useRef(-3);
  const [count, setCount] = useState(-3)

  async function fetchData() {
    const coll = collection(db, 'meat-ups');
    const q = query(coll, where('favorite', '==', true));
    const snapshot = await getCountFromServer(q);
    setCount(snapshot.data().count);
    // console.debug('count is', snapshot.data().count);
  
    return snapshot.data().count
  }

  // DEBOUNCE
  
  // async function fetchWrapper() {
  //   const favorites = debouncedCountFetch()
  //   setCount(favorites)
  // }

  
  if (count === countRef.current) {
    // Could be better, but i can't think of a better way to limit requests.
    // He was requesting 3 times, a little to much to my norms
    // console.debug('count and ref are equal', countRef.current)
    fetchData();
  } else {
    countRef.current = count
  }


  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{countRef.current}</Text>
        <Text style={styles.text}>{options.title}</Text>
      </View>
      {options.goBack && (
        <MaterialIcons 
          name="backspace"
          size={48} 
          color="white" 
          style={styles.icon} 
          onPress={() => options.goBack()}/>
      )}
    </ImageBackground>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    opacity: 1
  },
  textContainer: {
    flex: 1,
    // backgroundColor: 'green',
    
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'gold',
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 3,
  },
  icon: {
    position: 'absolute',

    marginLeft: 35,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 4
  }
})