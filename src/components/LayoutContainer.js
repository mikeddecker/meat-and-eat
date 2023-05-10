import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../partials/Header'
import globalStyles from '../global/globalStyles'

const LayoutContainer = (props) => {
    return (
        <View style={globalStyles.container}>
            <Header 
                options={props.header}
            />
            <View style={[styles.body, props.styles]}>
                {props.children}
            </View>
        </View>
    )
}

export default LayoutContainer

const styles = StyleSheet.create({
    body: {
        padding: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center'
    }
})