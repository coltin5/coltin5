import { StyleSheet } from 'react-native'



export default StyleSheet.create({
    name: {
        fontSize: 21,
        fontWeight: '800',
        marginLeft: 10,
    },


    row: {
        flexDirection: 'row',
        marginVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#dae6d8',
        paddingVertical: 12,
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