import React from 'react'
import { auth } from '../src/firebase'
import { signOut } from 'firebase/auth'
import { useAuthStateContext } from '../src/contexts/AuthUserProvider'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import LayoutContainer from './components/LayoutContainer'

const AboutScreen = () => {
  const authStateContext = useAuthStateContext()

  const displayText = authStateContext.user.isAnonymous ? 'Anonymous' : authStateContext.user.displayName

  return (
    <LayoutContainer>
      <Text style={styles.smaller}>{ authStateContext.user.email }</Text>
      <Text style={styles.mike}>{ displayText }</Text>

      <TouchableOpacity 
        style={[styles.button, styles.backgroundColorBlue]} 
        onPress={() => signOut(auth)}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </LayoutContainer>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  mike: {
    fontSize: 72,
    color: 'gold'
  },
  smaller: {
    fontSize: 28,
    color: 'brown'
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