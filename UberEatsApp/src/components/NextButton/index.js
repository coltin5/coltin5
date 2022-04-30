import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
const restaurant = restaurants[0];

const NextButton = () => {



    return (

        <View>
            <View style={styles.basketButton}>
                <View style={styles.button}>
                    <Text style={styles.text}>Next · ${restaurant.dishes[0].price.toFixed(2)}</Text>
                </View>
            </View>
            <View>
                <View style={styles.total}>
                    <Text style={styles.totalText}>Subtotal</Text>
                    <Text style={styles.totalPrice}>${restaurant.dishes[0].price.toFixed(2)}</Text>
                </View>
                <View style={styles.total}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalPrice}>${restaurant.dishes[0].price.toFixed(2)}</Text>
                </View>
            </View>
        </View >





    )
}
const styles = StyleSheet.create({
    basketButton: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center",
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    total: {
        flexDirection: 'row',
        marginVertical: 6,
    },
    totalPrice: {
        marginLeft: 'auto',
        fontSize: 16,
        fontWeight: '500',
        color: 'gray',
    },
    totalText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'gray',
    },
})


export default NextButton;