import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    restaurantContainer: {
        width: "100%",
        marginVertical: 10,
        

    },
    Image: {
        width: "100%",
        aspectRatio: 17 / 9,
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,

    },
    subtitle: {
        color: 'gray',

    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
    },
    rating: {
        backgroundColor: '#c7ced9',
        width: 40,
        height: 30,
        borderRadius: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;