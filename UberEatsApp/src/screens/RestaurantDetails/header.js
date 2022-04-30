import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';


const Header = ({ restaurant }) => {
    return (
        <SafeAreaView style={styles.page}>
            <Image
                source={{ uri: restaurant.image }}
                style={styles.image}
                resizeMode='cover'
            />

            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>${restaurant.deliveryFee} · {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
                <Text style={styles.menuTitle}>Menu {<Ionicons name="pizza" size={16} color="black" />}</Text>

            </View>


        </SafeAreaView>
    );
}



export default Header;