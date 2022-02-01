import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput,Image} from 'react-native'
import firebase from '../../config/firebase'
import {useFonts} from 'expo-font'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './style'

function Login({ navigation }) {
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // navigation.navigate('Task')
                navigation.navigate('Home')
                // ...
            })
            .catch((error) => {
                setErrorLogin(true)
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    }

    // Função usuario logado
    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // var uid = user.uid;
    //             navigation.navigate('Task', {idUser: user.uid})
    //             // ...
    //         }
    //     });
    // }, []);


    const[fontsLoaded] = useFonts({
                GrandHotel:require('../../../assets/fonts/GrandHotel-Regular.ttf'),
                IBM:require('../../../assets/fonts/IBMPlexSans-Medium.ttf'),
                IBMRegular:require('../../../assets/fonts/IBMPlexSans-Regular.ttf')
            })
        
            if(!fontsLoaded){
                return null
            }

    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <Text style={styles.title}>Delicious Cake</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    type='text'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Senha'
                    type='text'
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />
            </View>
            <View style={styles.esqSenha}>
                    <Text style={styles.txtEsqSenha}>Esqueceu a senha?</Text>
                </View>
            {errorLogin == true ?
                <View style={styles.alert}>
                    <MaterialIcons name="error-outline" size={24} color="red" />
                    <Text style={styles.warningAlert}>Email ou senha inválidos!</Text>
                </View>
                :
                <View>
                    {/* <Text style={styles.warningAlert}></Text> */}
                </View>
            }
            {/* Verifica se os campos estão vazios */}
            {email === '' || senha === '' ?
                <TouchableOpacity
                    disabled
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtBtnLogin}>Entrar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={loginFirebase}
                >
                    <Text style={styles.txtBtnLogin}>Entrar</Text>
                </TouchableOpacity>
            }
            <View>
            <Text style={styles.txtOu}>OU</Text>
                <View style={styles.redesSociais}>
                    {/* <Text></Text>
                    <Text></Text> */}
                    <FontAwesome name="google" size={24} color="black" style={styles.iconsSociais} />
                    <FontAwesome name="facebook" size={24} color="black" style={styles.iconsSociais}  />
                </View>
            </View>
            <Text style={styles.registration}>
                Não tem cadastro?
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => navigation.navigate('Register')}
                >
                    Registre-se agora...
                </Text>
            </Text>
            <View style={{ height: 100 }}></View>
        </KeyboardAvoidingView>
    )
}

//     return(
//     <KeyboardAvoidingView
//         style={styles.container}
//     >
//         <Text style={styles.title} >Delicious Cake</Text>

//         <View style={styles.inputUsuario}>

//             <TextInput
//             style={styles.input}
//             placeholder='Email'
//             type='text'
//             onChangeText={(text)=> setEmail(text)}
//             value={email}
//             />
//         </View>

//         <View style={styles.inputPass}>
            
//             <TextInput
//             style={styles.input}
//             placeholder='Senha'
//             type='text'
//             onChangeText={(text)=> setSenha(text)}
//             value={senha}
//             />
//             {/* <AntDesign name="eye" size={24} color="black" style={styles.iconPass}/> */}
//         </View>

        
//         <Text style={styles.txtEsqueceu}>Esqueceu a senha?</Text>
//         {errorLogin == true ?
//                 <View style={styles.alert}>
//                     <MaterialIcons name="error-outline" size={24} color="red" />
//                     <Text style={styles.warningAlert}>Email ou senha inválidos</Text>
//                 </View>
//                 :
//                 <View>
                    
//                 </View>
        
//         }

//             {email === '' || senha === '' ?
//                 <TouchableOpacity
//                     disabled
//                     style={styles.btnLogin}
//                 >
//                     <Text style={styles.txtBtnLogin}>Entrar</Text>
//                 </TouchableOpacity>
//                 :
//                 <TouchableOpacity
//                     style={styles.btnLogin}
//                     onPress={loginFirebase}
//                 >
//                     <Text style={styles.txtBtnLogin}>Entrar</Text>
//                 </TouchableOpacity>
//             }
//         <TouchableOpacity style={styles.btnLogin} onPress={()=>
//             navigation.navigate('Home')
//         }>
//             <Text style={styles.txtBtnLogin} onPress={loginFirebase}>Entrar</Text>
//         </TouchableOpacity>

//         <View>
//             <Text style={styles.txtOu}>OU</Text>
//             <View style={styles.redesSociais}>
//                 {/* <Text></Text>
//                 <Text></Text> */}
//                 <FontAwesome name="google" size={24} color="black" style={styles.iconsSociais} />
//                 <FontAwesome name="facebook" size={24} color="black" style={styles.iconsSociais}  />
//             </View>
//         </View>
//         <View>
//             <Text style={styles.registration}>
//                 Não tem cadastro?
                
//                 <Text style={styles.linkCreateAccount} onPress={()=> navigation.navigate('Home')}>
//                     Registre-se
//                 </Text>
//             </Text>
//         </View>
//         {/* <Image source={require('../../../assets/logo.png')} style={styles.img}/> */}
//     </KeyboardAvoidingView>
//     )
// }

export default Login