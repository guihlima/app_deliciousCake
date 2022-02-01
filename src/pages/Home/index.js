import React, {useState, useEffect} from 'react'
import { View,Text,Button, Touchable,KeyboardAvoidingView, FlatList,Image,ScrollView,TouchableOpacity} from 'react-native'
import { FontAwesome5,AntDesign, Feather  } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';


import styles from './style'
import firebase from 'firebase';

const db = firebase.firestore()

function Home({navigation}){

    const [confeitaria, setConfeitaria] = useState([])

    useEffect(()=>{
        db.collection("Confeitarias").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setConfeitaria(list)
        })
    },[])
    const[fontsLoaded] = useFonts({
        GrandHotel:require('../../../assets/fonts/GrandHotel-Regular.ttf'),
        IBM:require('../../../assets/fonts/IBMPlexSans-Medium.ttf'),
        IBMRegular:require('../../../assets/fonts/IBMPlexSans-Regular.ttf'),
        IBMLight:require('../../../assets/fonts/IBMPlexSans-Light.ttf')
    })

    if(!fontsLoaded){
        return null
    }
    
    const dados = [
        {key: 'Todos'},
        {key: 'Bolos'},
        {key: 'Tortas'},
        {key: 'Pudim'},
        {key: 'Cupcake'}
    ]

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.logo}>Delicious Cake</Text>
                    {/* <FontAwesome5 name="user" size={24} color="black" style={styles.perfil}/> */}
                    <Image style={styles.perfil} source={require('../../../assets/images/profile.png')}/>
                </View>
                <View>
                    <Text style={styles.title}>
                        Encontre as melhores delícias em confeitarias da região
                    </Text>
                </View>

                <View style={styles.filters}>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dados}
                    renderItem={({item}) => 
                        <Text style={styles.itemFilter}>{item.key}</Text>
                    }
                />
                </View>
                
        
                {/* <View style={styles.filters}>
                    <Text style={styles.itemFilter}>Todos</Text>
                    <Text style={styles.itemFilter}>Bolos</Text>
                    <Text style={styles.itemFilter}>Tortas</Text>
                    <Text style={styles.itemFilter}>Pudim</Text>
                </View> */}

                    <View style={styles.area}>
                        <Text style={styles.tagTitle}>Mais comprados</Text>
                        <Text style={styles.tagSubtitle}>Ver mais</Text>
                    </View>
                <View style={styles.areaCakes}>
                    <View style={styles.card}>
                        <Image style={styles.imgCake} source={require('../../../assets/images/bolo.png')}/>
                        <Text onPress={()=> navigation.navigate('descriptionBolo')}>Bolo de Frutas com recheio de coco</Text>
                        <Text>Confeitaria Bezerra</Text>
                        <Text>R$ 89,99</Text>
                    </View>
                    
                    <View style={styles.card}>
                        <Image style={styles.imgCake} source={require('../../../assets/images/bolo_brigadeiro.jpg')}/>
                        <Text>Bolo de Brigadeiro com Prestigio</Text>
                        <Text>Confeitaria das Amigas</Text>
                        <Text>R$ 70,00</Text>
                    </View>
                </View>
                <View style={styles.area}>
                        <Text style={styles.tagTitle}>Mais comprados</Text>
                        <Text style={styles.tagSubtitle}>Ver mais</Text>
                </View>
                <View style={styles.areaConfeitarias}>
                    <FlatList
                    horizontal={true}
                        showsVerticalScrollIndicator={false}
                        data={confeitaria}
                        renderItem={({item})=>{
                            return(
                                <View style={styles.confeitaria}>
                                    <Text>{item.nome}</Text>
                                    <Text>{item.endereco}</Text>
                                </View>
                            )
                        }}
                    />
                    <TouchableOpacity onPress={()=>navigation.navigate('CadastroConfeitarias')}>
                        <Text>Adicionar Confeitaria</Text>
                    </TouchableOpacity>
                </View>

                
            </ScrollView>
            <View style={styles.nav}>
                <AntDesign name="home" size={24} color="black" style={styles.iconNav}/>
                <AntDesign name="user" size={24} color="black" style={styles.iconNav} />
                <AntDesign name="search1" size={24} color="black" style={styles.iconNav} />
                <FontAwesome5 name="clipboard" size={24} color="black" style={styles.iconNav} />
                <Feather name="shopping-bag" size={24} color="black" style={styles.iconNav} />
            </View>
        </SafeAreaView>
    )
}



export default Home