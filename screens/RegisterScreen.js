import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import { Formik } from 'formik';
import * as yup from 'yup';
import globalStyles from '../src/global/globalStyles';
import { auth } from '../src/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


const RegisterScreen = () => {
    const [succes, setSucces] = useState(false)
    const dismissKeyboard = () => {
        Keyboard.dismiss()
    };
    
    const touchableRef = useRef(null)

    const registerUser = (credentials) => {
        const name = credentials.name
        const email = credentials.email
        const password = credentials.password
        const repeatPassword = credentials.repeatPassword
        console.log('auth current user', auth.currentUser)

        if (name && email && password && repeatPassword) {
            if (password === repeatPassword) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredentials) => {
                        console.log(userCredentials)
                        console.log('auth current user', auth.currentUser)
                        updateProfile(auth.currentUser, { displayName: name})
                        setSucces(true)
                        return
                    })
                    .catch((err) => console.error(err))
            }
        }

        setSucces(false)
    }
    

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={[globalStyles.container, styles.indent]} ref={touchableRef}>
            <Formik
              initialValues={{ name: '', email: '', password: '', repeatPassword: '' }}
              onSubmit={(credentials, {resetForm}) => {
                let succes = registerUser(credentials)
                if (succes) { resetForm({ name: '', email: '', password: '', repeatPassword: '' }) }
              }}
              style={styles.formikContainer}
              validationSchema={yup.object().shape({
                name: yup
                  .string()
                  .min(4)
                  .required('Please, provide a name!'),
                email: yup
                  .string()
                  .email()
                  .required('Please, provide an email!'),
                password: yup
                  .string()
                  .min(8)
                  .required('Please, provide a password!'),
                repeatPassword: yup
                  .string()
                  .min(8)
                  .required('Please, repeat your password!'),
              })}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.form}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  <Text style={styles.error}>{touched.name && errors.name}</Text>
    
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
    
                  <Text style={styles.label}>Repeat password</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('repeatPassword')}
                    onBlur={handleBlur('repeatPassword')}
                    value={values.repeatPassword}
                  />
                  <Text style={styles.error}>{touched.repeatPassword && errors.repeatPassword}</Text>
                  
                  <TouchableOpacity 
                    disabled={Object.keys(errors).length > 0} 
                    style={[styles.button, Object.keys(errors).length > 0 ? styles.backgroundColorGreyBlue : styles.backgroundColorBlue]} 
                    onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Register</Text>
                  </TouchableOpacity>

                  { succes ? <Text>Succes</Text> : <Text></Text>}
                </View>
              )}
            </Formik>
          </View>
        </TouchableWithoutFeedback>
    )
}
    
export default RegisterScreen

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
    fontSize: 16,
    textAlign: 'center',
    },
    icon: {
    marginVertical: 8
    },
    error: {
    color: 'gold',
    fontSize: 18
    }
})