import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import Card from './Card'
import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuthStateContext } from '../contexts/AuthUserProvider';

const ItemCard = ({ item, onNavigate, onFavorite }) => {
    const authStateContext = useAuthStateContext()
    const userIsAnonymous = authStateContext.user.isAnonymous

    const iconSize = 36

    const navigate = () => {
        onNavigate(item)
    }

    const deleteLocation = () => {
        deleteDoc(doc(db, 'meat-ups', item.id))
    }

    return (
        <View style={styles.cardContainer}>    
            <Card>
                <Text style={styles.text}>{item.title}</Text>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => navigate()}>
                        <MaterialIcons name="info" size={iconSize} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    {!userIsAnonymous && (
                        <TouchableOpacity onPress={deleteLocation}>
                        <MaterialIcons name="delete" size={iconSize} color="gold" style={styles.icon} />
                        </TouchableOpacity>
                    )}
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