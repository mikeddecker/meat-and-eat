import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useRef } from 'react'
import { TextInput } from 'react-native-paper'
import { Formik } from 'formik';
import { MaterialIcons } from '@expo/vector-icons'; 
import * as yup from 'yup';
import globalStyles from '../../src/global/globalStyles';

const AddMeetupLocation = ({ onClose, addLocation }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const touchableRef = useRef(null);

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={[globalStyles.container, styles.indent]} ref={touchableRef}>
        <MaterialIcons name="close" size={48} color="black" style={styles.icon} onPress={onClose} />
        <Formik
          initialValues={{ title: '', address: '', description: '', stars: '1' }}
          onSubmit={location => {
            addLocation(location)
            onClose()
          }}
          style={styles.formikContainer}
          validationSchema={yup.object().shape({
            title: yup
              .string()
              .min(4)
              .required('Please, provide a title!'),
            address: yup
              .string()
              .min(4)
              .required('Please, provide an address!'),
            description: yup
              .string()
              .min(8)
              .required('Please, provide a description!'),
            stars: yup
              .number()
              .min(1)
              .max(5)
              .required('Please, provide a number of stars!'),
          })}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
              <Text style={styles.error}>{touched.title && errors.title}</Text>

              <Text style={styles.label}>Addres</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                />
              <Text style={styles.error}>{touched.address && errors.address}</Text>

              <Text style={styles.label}>Description</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                multiline={true}
                numberOfLines={3}
              />
              <Text style={styles.error}>{touched.description && errors.description}</Text>

              <Text style={styles.label}>Stars (1-5)</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('stars')}
                onBlur={handleBlur('stars')}
                value={values.stars}
                inputMode='numeric'
              />
              <Text style={styles.error}>{touched.stars && errors.stars}</Text>
              
              <TouchableOpacity 
                disabled={Object.keys(errors).length > 0} 
                style={[styles.button, Object.keys(errors).length > 0 ? styles.backgroundColorGreyBlue : styles.backgroundColorBlue]} 
                onPress={handleSubmit}>
                <Text style={styles.buttonText}>Add new meat up</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default AddMeetupLocation

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