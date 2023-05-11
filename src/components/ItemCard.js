import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import Card from './Card'
import React from 'react'
import { useDispatch } from 'react-redux';
import { meatupDeleted } from '../../store/slicers/meatupSlice';

const ItemCard = ({ item, onNavigate, onFavorite }) => {
    const iconSize = 36
    const dispatch = useDispatch()

    const navigate = () => {
        onNavigate(item)
    }

    return (
        <View style={styles.cardContainer}>    
            <Card>
                <Text style={styles.text}>{item.title}</Text>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => navigate()}>
                        <MaterialIcons name="info" size={iconSize} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(meatupDeleted(item))}>
                        <MaterialIcons name="delete" size={iconSize} color="gold" style={styles.icon} />
                    </TouchableOpacity>
                    {
                        item.favorite ? 
                        <MaterialIcons name="favorite" size={iconSize} color="red" onPress={onFavorite}  style={styles.icon}/> : 
                        <MaterialIcons name="favorite-border" size={iconSize} color="coral" onPress={onFavorite} style={styles.icon} />
                    }
                </View>
            </Card>
        </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({

    cardContainer: {
        flex: 1
    },
    text: {
        width: '100%',
        textAlign: 'center',
        fontSize: 24,
        height: 56,
        margin: 5,
    },
    icons: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 5
    }
})