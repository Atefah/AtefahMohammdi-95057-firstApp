import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'


import colors from '../utils/colors'  
export default function SearchScreen(){
    return (
    <View style={styles.searchContainer}>
       <TextInput placeholder="Search...." style={styles.searchInput}/>
       
    </View>
    )
}
const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:colors.secondry,
    },
    searchInput:{
        paddingHorizontal:20,
        paddingVertical:10,
        margin:20,
        backgroundColor:colors.white,
    }

})