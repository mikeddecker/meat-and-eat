import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Card from './Card'
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';


const ItemCardDetail = ({item}) => {
    const iconSize = 36

    const [isFavorite, setIsFavorite] = useState(item.favorite)

    const toggleFavorite = () => {
        const itemRef = doc(db, 'meat-ups', item.id)
        updateDoc(itemRef, {
            favorite: !isFavorite
        })
        
        // for dynamic updates within this component
        setIsFavorite(!isFavorite)
    };

    let stars = []
    for (let i = 0; i < item.stars; i++) {
        const starKey = `star-${i}`;
        stars.push(<MaterialIcons key={starKey} name="star" size={24} color="gold" />)
    }

    return (
        <View style={styles.container}>
            <Card>
                <Text style={[styles.title]}>{item.title}</Text>
                <View style={styles.body}>
                    <Text style={[styles.text, styles.marginV]}>{item.address}</Text>
                    <Text style={[styles.description, styles.marginV]}>{item.description}</Text>

                    <View style={[styles.stars, styles.marginV]}>{stars}</View>
                </View>
                <View style={[styles.icons, styles.marginV]}>
                    {
                    isFavorite
                    ?
                    <MaterialIcons name="favorite" size={iconSize * 2} color="red" onPress={toggleFavorite}  style={styles.icon}/> :
                    <MaterialIcons name="favorite-border" size={iconSize * 2} color="coral" onPress={toggleFavorite} style={styles.icon} />
                    }
                </View>
            </Card>
        </View>
    )
}

export default ItemCardDetail

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%'
    },
    title: {
        // width: '100%',
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 12
    },
    description: {
        // width: '100%',
        fontSize: 24,
        textAlign: 'center'
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
    },
    marginV: {
        marginVertical: 8
    },
    stars: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        // flex: 'wrap',
    },
    body: {
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
})