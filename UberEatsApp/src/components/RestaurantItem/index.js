import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";



const RestaurantItem = ({ restaurant }) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("Restaurant", { id: restaurant.id })
    }


    return (
        <Pressable onPress={onPress} style={styles.restaurantContainer}>
            {/* <Pressable onPress={navigation.navigate('Restaurant')}> */}
            <Image
                source={{ uri: restaurant.image }}
                style={styles.Image} />
            {/* </Pressable> */}
            {/* <Pressable onPress={navigation.navigate('Restaurant')}> */}
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>${restaurant.deliveryFee.toFixed(2)} · {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
                </View>
                <View style={styles.rating}>
                    <Text>{restaurant.rating.toFixed(1)}</Text>
                </View>
            </View>
            {/* </Pressable> */}
        </Pressable>

    );
};

export default RestaurantItem;

