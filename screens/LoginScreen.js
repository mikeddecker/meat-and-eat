import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import { Formik } from 'formik';
import * as yup from 'yup';
import globalStyles from '../src/global/globalStyles';
import { auth } from '../src/firebase';
import { signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons'; 



const LoginScreen = () => {
    const dismissKeyboard = () => {
        Keyboard.dismiss()
    };

    
    const touchableRef = useRef(null)

    const LoginUser = (credentials) => {
        const email = credentials.email
        const password = credentials.password

        if (email && password) {
            signInWithEmailAndPassword(auth, email, password).catch((err) => console.error(err))
        }
    }

    const signInIcognito = () => {
        signInAnonymously(auth).catch((err) => console.error(err))
    }
    

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={[globalStyles.container, styles.indent]} ref={touchableRef}>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(credentials, {resetForm}) => {
                let couldLogin = LoginUser(credentials)
                if (couldLogin) { resetForm({ email: '', password: '' }) }
              }}
              style={styles.formikContainer}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .email()
                  .required('Please, provide an email!'),
                password: yup
                  .string()
                  .min(8)
                  .required('Please, provide a password!'),
              })}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.form}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    />
                  <Text style={styles.error}>{touched.email && errors.email}</Text>
    
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <Text style={styles.error}>{touched.password && errors.password}</Text>
    
                  <TouchableOpacity 
                    disabled={Object.keys(errors).length > 0} 
                    style={[styles.button, Object.keys(errors).length > 0 ? styles.backgroundColorGreyBlue : styles.backgroundColorBlue]} 
                    onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    disabled={Object.keys(errors).length > 0} 
                    style={[styles.button, Object.keys(errors).length > 0 ? styles.backgroundColorGreyBlue : styles.backgroundColorBlue]} 
                    onPress={signInIcognito}>
                    <MaterialIcons name="device-unknown" size={36} color="black" style={styles.icognito} />
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </TouchableWithoutFeedback>
    )
}
    
export default LoginScreen

const styles = StyleSheet.create({
    label: {
    fontSize: 24,
    marginTop: 8,
    marginBottom: 12,
    color: 'black'
    },
    textInput: {
    width: '100%',
    borderTopLeftRadius: 10, // TextInput gets borderTopLeftRadius: 4 if nothing specified
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    },
    form: {
    width: '100%',
    },
    indent: {
    paddingHorizontal: 25,
    paddingVertical: 15
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
    backgroundColorGreyBlue: {
    backgroundColor: '#008080'
    },
    buttonText: {
    color: 'beige',
    fontSize: 24,
    textAlign: 'center',
    },
    icognito: {
        alignSelf: 'center',
    },
    icon: {
    marginVertical: 8
    },
    error: {
    color: 'gold',
    fontSize: 18
    }
})