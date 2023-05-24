import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import React from 'react'
import { useSelector } from 'react-redux';
import { favoriteCount } from '../../store/slicers/meatupSlice';
import { useRoute } from '@react-navigation/native';

const image = require('../../src/img/burger-bg-unsplash.jpg');

const Header = ({ goBack }) => {
  const count = useSelector(favoriteCount)
  const route = useRoute();

  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{count}</Text>
        <Text style={styles.text}>{route.name}</Text>
      </View>

      { goBack && (
        <MaterialIcons 
          name="backspace"
          size={48} 
          color="white" 
          style={styles.icon} 
          onPress={() => goBack()}/>
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