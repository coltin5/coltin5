import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetails';
import MenuItemScreen from '../screens/MenuItem';
import Basket from '../screens/Basket';
import NextButton from '../components/NextButton';
import OrderScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetails';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeTabs' component={HomeTabs} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={styles.tabs}>
            <Tab.Screen name="Home" component={HomeStackNavigator} options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }} />
            <Tab.Screen name="Orders" component={OrderStackNavigator} options={{ tabBarIcon: ({ color }) => <Ionicons name="albums" size={24} color={color} /> }} />
            <Tab.Screen name="Profile" component={OrderScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }} />
        </Tab.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Restaurants" component={HomeScreen} />
            <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
            <HomeStack.Screen name="Dish" component={MenuItemScreen} />
            <HomeStack.Screen name="Basket" component={Basket} />
        </HomeStack.Navigator>
    );
};

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator screenOptions={{ headerShown: false }}>
            <OrderStack.Screen name="Orders" component={OrderScreen} />
            <OrderStack.Screen name="Order" component={OrderDetails} />

        </OrderStack.Navigator>
    );
};
const styles = StyleSheet.create({
    tabs: {
        backgroundColor: 'white',

    }
});


export default RootNavigator;