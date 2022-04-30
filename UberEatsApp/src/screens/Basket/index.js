import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import restaurants from '/Users/coltin/Desktop/Projects/UberEatsProject/UberEatsUser/assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons';
import BasketDishItem from '../../components/BasketDish';
import NextButton from '../../components/NextButton';
import { useNavigation } from '@react-navigation/native';
const Basket = () => {

    const restaurant = restaurants[0];
    const navigation = useNavigation();



    return (
        <SafeAreaView>

            <View style={styles.headContainer}>
                <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={35} color="black" style={styles.iconContainer} />
                <Text style={styles.restaurauntName}>{restaurant.name}</Text>
                <Text style={styles.yourItems}>Your Items</Text>
                <FlatList
                    ListFooterComponent={<NextButton />}
                    data={restaurant.dishes}
                    renderItem={({ item }) => <BasketDishItem basketDish={item} />}
                    keyExtractor={item => item.name}
                />
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        marginLeft: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headContainer: {
        padding: 10,
        flexDirection: 'column'
    },

    restaurauntName: {
        fontSize: 32,
        fontWeight: '800',
        marginLeft: 10,
        marginVertical: 20,
    },
    yourItems: {
        fontSize: 18,
        fontWeight: '700',
        color: 'gray',
    },
    flat: {
        height: 40,
    }
})

export default Basket;