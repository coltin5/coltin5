import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



const BasketDishItem = ({ basketDish }) => {

    const string = basketDish.name;
    let tail = '';
    if (string.length > 28) {
        tail = '..'
    }

    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text style={styles.count}>
                    1
                </Text>
            </View>

            <Text style={styles.name}>{string.slice(0, 28) + tail}</Text>
            <Text style={styles.price}>${basketDish.price.toFixed(2)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    name: {
        fontSize: 15,
        fontWeight: '800',
        marginLeft: 10,
    },


    row: {
        flexDirection: 'row',
        marginVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#dae6d8',
        paddingVertical: 12,
        marginHorizontal: 10,
    },


    price: {
        marginLeft: 'auto',
        color: 'black',
        fontSize: 18,
        fontWeight: '500',

    },


    quantityContainer: {
        backgroundColor: '#dae6d8',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },


    count: {
        fontSize: 16,
        fontWeight: '500',
    },


});

export default BasketDishItem;
