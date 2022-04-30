import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DishListItem = ({ dish }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('Dish', { id: dish.id })} style={styles.container}>
            <View style={styles.descriptionContainer}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
                <Text style={styles.price}>$ {dish.price}</Text>
            </View>
            {dish.image && <Image source={{ uri: dish.image }} style={styles.image} />}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        padding: 10,
        flexDirection: 'row',
    },
    name: {
        fontSize: 16,
        fontWeight: '700'
    },
    description: {
        color: 'gray'
    },
    price: {
        fontWeight: '500'
    },
    image: {
        height: 75,
        aspectRatio: 1,
    },
    descriptionContainer: {
        flex: 1,
    }
})

export default DishListItem;