import { FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import Header from './header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';




const RestaurantDetailsScreen = () => {

    const route = useRoute();

    const id = route.params.id;

    const restaurant = restaurants[id - 1];

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.page}>


            <FlatList
                ListHeaderComponent={() => <Header restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({ item }) => <DishListItem dish={item} />}
                keyExtractor={(item) => item.id}
            />
            <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back-circle"
                size={45} color="white"
                style={styles.iconContainer}

            />

        </SafeAreaView>
    );
}



export default RestaurantDetailsScreen;