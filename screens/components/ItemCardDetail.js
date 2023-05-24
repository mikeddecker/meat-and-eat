import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Card from './Card'
import { toggleItemsFavorite } from '../../src/firebase/firebaseActions';

const ItemCardDetail = ({item}) => {
    const iconSize = 36
    const [isFavorite, setIsFavorite] = useState(item.favorite)
    
    const toggleFavorite = () => {
        toggleItemsFavorite(item, !isFavorite)
        
        setIsFavorite(!isFavorite) // for dynamic updates within this component
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
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 12
    },
    description: {
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
    },
    body: {
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
})