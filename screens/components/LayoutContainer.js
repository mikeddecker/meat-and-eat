import { StyleSheet, View } from 'react-native'
import React from 'react'
import globalStyles from '../../src/global/globalStyles'

const LayoutContainer = (props) => {
    return (
        <View style={globalStyles.container}>
            <View style={styles.body}>
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