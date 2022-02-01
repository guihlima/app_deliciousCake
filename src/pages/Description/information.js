import React, {useState, useEffect} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons,FontAwesome5 ,AntDesign, Feather } from '@expo/vector-icons';

import firebase from 'firebase';

const db = firebase.firestore()

export default function information({navigation}){



    const [descriptionCake, setDescriptionCake] = useState([])

    useEffect(()=>{
        db.collection("Bolos").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setDescriptionCake(list)
        })
    },[])

    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('adicionarProduto')}>
                    <MaterialIcons name="arrow-back" size={24} color="black"/>
                </TouchableOpacity>
            </View>
            <FlatList
            data={descriptionCake}
            renderItem={({item})=>{
                return(
                    <View>
                        <Text>{item.nome}</Text>
                        <Text>{item.nomeConfeitaria}</Text>
                    </View>
                )
            }}
            />
        </SafeAreaView>
    )
}