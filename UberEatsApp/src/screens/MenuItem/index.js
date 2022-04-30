import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import restaurants from '/Users/coltin/Desktop/Projects/UberEatsProject/UberEatsUser/assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import { useNavigation } from '@react-navigation/native';

const MenuItemScreen = () => {
    const dish = restaurants[0].dishes[0];
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
    const getTotal = () => {
        return dish.price * quantity;
    }

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    return (
        <SafeAreaView style={styles.main}>
            <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={35} color="black" style={styles.iconContainer} />
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>

            <View style={styles.bottomContainer}>
                <AntDesign name="minuscircleo" size={60} color="black" style={styles.icon} onPress={onMinus} />
                <Text style={styles.count}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={60} color="black" style={styles.icon} onPress={onPlus} />
            </View>
            <Pressable onPress={() => navigation.navigate('Basket')} style={styles.basketButton}>
                <Text style={styles.text}>Add {quantity} to basket   ·   ${getTotal().toFixed(2)}</Text>
            </Pressable>

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
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        padding: 10,
    },
    name: {
        fontSize: 25,
        fontWeight: '800',
        marginVertical: 20
    },
    description: {
        fontSize: 15,
        marginBottom: 25,
        color: 'gray',
        lineHeight: 25,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
    },
    icon: {
        marginHorizontal: 20
    },
    count: {
        fontSize: 24,
        fontWeight: '500',
    },
    basketButton: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center",
        borderRadius: 20,
    },
    main: {
        flex: 1,
        width: "100%",
        paddingVertical: 40, // temp fix
        padding: 10,
    },

    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },


})

export default MenuItemScreen;