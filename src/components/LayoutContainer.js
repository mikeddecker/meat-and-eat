import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../global/globalStyles'
import { totalFavorite } from '../../store/slicers/meatupSlice'
import { useSelector } from 'react-redux'
import Header from './Header'

const LayoutContainer = (props) => {
    const amount = useSelector(totalFavorite)
    
    return (
        <View style={globalStyles.container}>
            <Header
                options={props.header}
                amount={amount}
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