import React, {useState, useEffect} from 'react'
import {KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePicker from 'expo-image-picker'
import { useFonts } from 'expo-font'
import { MaterialIcons } from '@expo/vector-icons';

import styles from './style'
import firebase from 'firebase'

const db = firebase.firestore()

function CadastroConfeitarias({navigation}){

    const [nome, setNome] = useState(null)
    const [cnpj, setCnpj] = useState(null)
    const [endereco, setEndereco] = useState(null)


    function addConfeitaria(){
        db.collection('Confeitarias').add({
            nome: nome,
            cnpj: cnpj,
            endereco: endereco
        })
        navigation.navigate('Home')
    }
    const[fontsLoaded] = useFonts({
        GrandHotel:require('../../../assets/fonts/GrandHotel-Regular.ttf'),
        IBM:require('../../../assets/fonts/IBMPlexSans-Medium.ttf'),
        IBMRegular:require('../../../assets/fonts/IBMPlexSans-Regular.ttf')
    })

    if(!fontsLoaded){
        return null
    }


    return(
        <SafeAreaView style={styles.container}>
            {/* <KeyboardAvoidingView  style={styles.container}> */}
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.btnBack}>
                        <MaterialIcons name="arrow-back" size={24} color="black" style={styles.arrowBack}/>
                    </TouchableOpacity>
                    
                    <Text style={styles.title}>Cadastro da Confeitaria</Text>
                <View>

                    
                    <View style={styles.inputs}>
                        <Text style={styles.label}>Nome:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Informe o nome'
                            onChangeText={setNome}
                            value={nome}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>CNPJ:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Informe o CNPJ'
                            onChangeText={setCnpj}
                            value={cnpj}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Endereço:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Informe o endereço'
                            onChangeText={setEndereco}
                            value={endereco}
                        />
                    </View>

                    <TouchableOpacity style={styles.btnSalvar} onPress={addConfeitaria}>
                        <Text  style={styles.txtBtnSalvar}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    )
}

export default CadastroConfeitarias
