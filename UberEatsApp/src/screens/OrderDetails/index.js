import { View, Text, Image, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json'
import BasketDishItem from '../../components/BasketDish';

const order = orders[0];
const restaurant = restaurants[0];

const OrderDetailsHeader = () => {
    return (
        <SafeAreaView style={styles.page}>
            <Image
                source={{ uri: order.Restaurant.image }}
                style={styles.image}
                resizeMode='cover'
            />
            <View style={styles.container}>
                <Text style={styles.title}>{order.Restaurant.name}</Text>
                <Text style={styles.subtitle}>${order.Restaurant.deliveryFee.toFixed(2)} · {order.Restaurant.minDeliveryTime}-{order.Restaurant.maxDeliveryTime} minutes</Text>
                <Text style={styles.menuTitle}>Your Order {<Ionicons name="pizza" size={22} color="black" />}</Text>
            </View>
        </SafeAreaView>
    )
}

const OrderDetails = () => {
    return (
        <View style={styles.list}>
            <FlatList
                ListHeaderComponent={OrderDetailsHeader}
                data={restaurant.dishes}
                renderItem={({ item }) => <BasketDishItem basketDish={item}
                    keyExtractor={item => item.name}
                />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    page: {

    },
    image: {
        width: '100%',
        aspectRatio: 17 / 9,
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        margin: 10,
    },
    subtitle: {
        color: '#525252',
        fontSize: 15,
        fontWeight: '700',
        marginHorizontal: 10,
    },
    container: {
        margin: 0,
        flexDirection: 'column'
    },
    menuTitle: {
        marginVertical: 10,
        fontSize: 22,
        fontWeight: '800',
        letterSpacing: .7,
        alignSelf: 'center'

    },
    headContainer: {
        flexDirection: 'column'
    },

});



export default OrderDetails