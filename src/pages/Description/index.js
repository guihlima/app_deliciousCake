import React, {useState, useEffect} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons,FontAwesome5 ,AntDesign, Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import styles from './style'
export default function descriptionBolo({navigation}){

    const[fontsLoaded] = useFonts({
    
        IBM:require('../../../assets/fonts/IBMPlexSans-Medium.ttf'),
        IBMRegular:require('../../../assets/fonts/IBMPlexSans-Regular.ttf'),
        IBMLight:require('../../../assets/fonts/IBMPlexSans-Light.ttf'),
        IBMSemiBold:require('../../../assets/fonts/IBMPlexSans-SemiBold.ttf')
    })
    if(!fontsLoaded){
        return null
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
             <Image source={require('../../../assets/images/bolo.png')}/>
             <View style={styles.bolinhas}>
                 <Text style={styles.bolinhaBranca}></Text>
                 <Text style={styles.bolinha}></Text>
                 <Text style={styles.bolinha}></Text>
                 <Text style={styles.bolinha}></Text>
                 <Text style={styles.bolinha}></Text>
             </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.labelBolo}>Bolo de Frutas com recheio de coco</Text>
                <Text style={styles.labelConfeitaria}>Confeitaria Bezerra</Text>
                <View>
                    <View style={styles.viewTempoPorcoes}>
                        
                            <MaterialIcons name="timer" size={24} color="black" />
                            <Text style={styles.txtTimer}>Tempo: <Text style={styles.txtHoras}>8hrs</Text></Text>
                        
                        <MaterialIcons name="restaurant-menu" size={24} color="black" />
                        <Text>Porções: 20</Text>
                    </View>

                    <Text style={styles.txtDescricao}>Descrição</Text>
                    <Text style={styles.descriptionCake}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book.</Text>
                    <Text style={styles.txtIngredientes}>Ingredientes</Text>
                    {/* <Text style={styles.ingredientes}>Leite Ninho Fermento em pó Farinha de trigo Açúcar Ovos Margarina</Text> */}
                    <Text>Valor</Text>
                    <Text style={styles.preco}>R$ 89,99</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnAdd}>
                        <FontAwesome5 name="shopping-bag" size={24} color="#fff"/>
                        <Text style={styles.txtBtnAdd}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.nav}>
                <AntDesign name="home" size={24} color="black" style={styles.iconNav} onPress={()=> navigation.navigate('Home')}/>
                <AntDesign name="user" size={24} color="black" style={styles.iconNav} />
                <AntDesign name="search1" size={24} color="black" style={styles.iconNav} />
                <FontAwesome5 name="clipboard" size={24} color="black" style={styles.iconNav} />
                <Feather name="shopping-bag" size={24} color="black" style={styles.iconNav} />
            </View>
        </SafeAreaView>
    )
}