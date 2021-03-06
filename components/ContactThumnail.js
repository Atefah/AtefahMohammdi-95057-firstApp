import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'


import colors from '../utils/colors'  
import Avatar from './Avatar'
export default function ContactThumnail({name, phone}){
    return (
        <View style={styles.thumnailContainer}>
            <Avatar name={name} size={90}/>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.phone}>
                {phone}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    thumnailContainer: {
        justifuContent: 'center',
        alignItems: 'center'
    },
    name: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    phone: {
        color: colors.white,
        fontSize: 16,
    }
})