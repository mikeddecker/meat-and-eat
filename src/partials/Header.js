import { StatusBar, StyleSheet, Text, ImageBackground, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import React from 'react'

const image = require('../img/burger-bg-unsplash.jpg');


const Header = ({options}) => {  
  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.textContainer}>
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
    height: 80,
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
    
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
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