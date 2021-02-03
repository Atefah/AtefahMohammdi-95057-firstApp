import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import colors from '../utils/colors'
import ContactListItem from '../components/ContactListItem'
const contacts = [
    { id: '1', name: 'Atefah', phone: '0789454645', email: 'Atefah@gmail.com'},
    { id: '2', name: 'Shokofa', phone: '079346873', email: 'Shokofa@gmail.com'},
    { id: '3', name: 'Aqidah', phone: '0771338435', email: 'Aqidah@gmail.com'},
    { id: '4', name: 'Yaser', phone: '075498385', email: 'yaser@gmail.com'},
    { id: '5', name: 'layegah', phone: '079433084848', email: 'layegah@gmail.com'},
    { id: '6', name: 'Lyla', phone: '07896500084387', email: 'Laya@gmail.com'},
    { id: '7', name: 'Rabiya', phone: '072434012', email: 'Rabiya@gmail.com'},
    { id: '8', name: 'Bhnaz', phone: '07328282828', email: 'Bhnaz@gmail.com'},
    { id: '9', name: 'Behnam', phone: '075665663', email: 'Behnam@gmail.com'},
    { id: '10', name: 'Marya', phone: '0799457437', email: 'marya@gmail.com'},
]
export default function Contacts(){
   return (
    <FlatList
    data={contacts}
    keyExtractor={(item)=>item.id}
    renderItem={({item}) => {
        return <ContactListItem name={item.name} phone={item.phone} />
    }}
    />
   )

}
const styles = StyleSheet.create({

})