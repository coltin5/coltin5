import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, Pressable } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import orders from '../../../assets/data/orders.json'
import { useNavigation } from '@react-navigation/native'

const date = new Date(2020, 3, 3, 2, 23, 44);
const OrderScreenItem = ({ order }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('Order', { id: order.id })} style={styles.main}>

            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
                </View>

                <View style={styles.col}>
                    <View><Text style={styles.name}>{order.Restaurant.name}</Text></View>
                    <View><Text style={styles.text}>items · $</Text></View>
                    <View><Text>{order.createdAt}</Text></View>
                </View>

            </View>
        </Pressable>
    )
}

const OrderScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.yourOrder}>Your Orders</Text>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderScreenItem order={item} style={styles.list} />}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',


    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 3,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        margin: 3,

    },
    col: {
        margin: 10,
        flexDirection: 'column'
    },
    imageContainer: {

    },
    image: {
        height: 80,
        aspectRatio: 1,
        marginLeft: 10,

    },
    name: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 'auto',
    },
    text: {
        marginVertical: 10,
    },
    yourOrder: {
        fontSize: 28,
        fontWeight: '900',
        flexGrow: 1,
        color: 'black',
        marginVertical: 30,
        alignSelf: 'center',

    },
    list: {
        alignSelf: 'flex-start'
    },

})

export default OrderScreen;