import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import Card from './Card'


const ItemCardDetail = ({item}) => {
    const [rerender, useRerender] = useState(item.favorite)
    const iconSize = 36

    const toggleFavorite = () => {
        useRerender( item.favorite = !item.favorite)
    }


    let stars = []
    for (let i = 0; i < item.stars; i++) {
      stars.push(<MaterialIcons name="star" size={24} color="gold" />)
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
                    item.favorite
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
        maxHeight: '50%'
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