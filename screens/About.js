import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globalStyles from '../src/global/globalStyles'
import LayoutContainer from '../src/components/LayoutContainer'
import { useAuthStateContext } from '../src/contexts/AuthUserProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../src/firebase'


const About = () => {
  const authStateContext = useAuthStateContext()

  const displayText = authStateContext.user.isAnonymous ? 'Anonymous' : authStateContext.user.displayName

  return (
    <View style={globalStyles.container}>
      <LayoutContainer
      >
        <Text style={styles.mike}>{ displayText }</Text>

        <TouchableOpacity 
          style={[styles.button, styles.backgroundColorBlue]} 
          onPress={() => signOut(auth)}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>

      </LayoutContainer>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  mike: {
    fontSize: 72,
    color: 'gold'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    marginTop: 36,
  },
  backgroundColorBlue: {
    backgroundColor: 'saddlebrown'
  },
  buttonText: {
    color: 'beige',
    fontSize: 16,
    textAlign: 'center',
  },
})