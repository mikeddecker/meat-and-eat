import { StatusBar, StyleSheet, Text, ImageBackground, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useEffect, useRef, useState } from 'react'
import { collection, getCountFromServer, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import { favoriteCount } from '../../store/slicers/meatupSlice';


const image = require('../img/burger-bg-unsplash.jpg');

// const debouncedCountFetch = debounce(fetchData, 500)

const Header = ({options}) => {

  const count = useSelector(favoriteCount)
  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{count}</Text>
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