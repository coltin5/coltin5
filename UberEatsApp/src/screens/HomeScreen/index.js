import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '/Users/coltin/Desktop/Projects/UberEatsProject/UberEatsUser/assets/data/restaurants.json'




export default function HomeScreen() {
    return (
        <View style={styles.page}>
            <FlatList
                style={{ borderRadius: '10%', padding: 2 }}
                data={restaurants}
                renderItem={({ item }) => <RestaurantItem restaurant={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        padding: 1,
    }
})



