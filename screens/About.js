import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../src/global/globalStyles'
import LayoutContainer from '../src/components/LayoutContainer'


const About = () => {
  return (
    <View style={globalStyles.container}>
      <LayoutContainer
        header={{
          title: 'About'
        }}
      >
        <Text style={styles.mike}>Mike</Text>
      </LayoutContainer>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  mike: {
    fontSize: 96,
    color: 'gold'
  }
})