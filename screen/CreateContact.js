import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'


import colors from '../utils/colors'  
export default function CreateContact({name, phone, email}){
    return (
    <View style={styles.formContainer}>
       <TextInput placeholder="Name" style={styles.input}/>
       <TextInput placeholder="Email" style={styles.input} keyboardType="email-address"/>
       <TextInput placeholder="Phone" style={styles.input}  keyboardType="numeric"/>
       <TouchableOpacity style={[styles.button,{backgroundColor:colors.primary}]}>
           <Text style={styles.buttonTxt}>Save</Text>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.button,{backgroundColor:'red'}]}>
           <Text style={styles.buttonTxt}>Cancle</Text>
       </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
   formContainer:{
       borderRadius:30,
       marginTop:60,
       paddingVertical:20,
       paddingHorizontal:40,
       backgroundColor:colors.white
   },
   input:{
       paddingBottom:10,
       marginBottom:10,
       borderBottomColor:colors.secondary,
       borderBottomWidth:1
   },
   button:{
    padding:20,
    marginBottom:10,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'

    
   },
   buttonTxt:{
       color:colors.white
   }
})