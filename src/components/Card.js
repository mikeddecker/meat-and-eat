import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = (props) => {
  return (
    <View key={props.key} style={styles.card}>
      {props.children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
      margin: 8,
      padding: 12,
      paddingBottom: 16,
      borderRadius: 8,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'center',
      // flexGrow: 0,
      display: 'flex',
      // flex: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
  },
})