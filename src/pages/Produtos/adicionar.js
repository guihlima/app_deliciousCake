import React,{useState} from 'react'
import {View, Text, Image, TouchableOpacity, TextInput,Button,ActivityIndicator, KeyboardAvoidingView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import styles from './style'
import firebase from 'firebase'
// const storage = firebase.storage();

const db = firebase.firestore()

import * as ImagePicker from 'expo-image-picker'

export default function adicionarProduto({navigation}){
    
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false)

    const [nome, setNome] = useState(null)
    const [description, setDescription] = useState(null)
    const [nomeConfeitaria, setNomeConfeitaria] = useState(null)
    const [tempo, setTempo] = useState(null)
    const [porcoes, setPorcoes] = useState(null)
    const [linkImage, setLinkImage] = useState(null)
    const [ingredientes, setingredientes] = useState(null)

    

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async() =>{
      const blob = await new Promise((resolve, reject) =>{
          const xhr = new XMLHttpRequest()
          xhr.onload = function(){
              resolve(xhr.response)
          };
          xhr.onerror = function(){
              reject(new TypeError('Network request faile'))
          };
          xhr.responseType = 'blob'
          xhr.open('GET', image, true)
          xhr.send(null)
      });

      const ref = firebase.storage().ref().child(new Date().toISOString())
      const snapshot = ref.put(blob)


      snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,
        ()=>{
        setUploading(true)
        
      },
      (error)=>{
          setUploading(false)
          console.log(error)
          blob.close()
          return url
      },
      ()=>{
          snapshot.snapshot.ref.getDownloadURL().then((url)=>{
              setUploading(false)
              console.log("download url :", url)
              blob.close()
              
              
                db.collection('Bolos').add({
                    nome: nome,
                    description: description,
                    nomeConfeitaria:nomeConfeitaria,
                    tempo:tempo,
                    porcoes:porcoes,
                    linkImage:url,
                    ingredientes:ingredientes
                })
                navigation.navigate('Home')
           
              return url
          });
        }
      );
  };

 
    
    return(
        // <SafeAreaView>
            <KeyboardAvoidingView>
            <View>
                <Text>Adicione seu produto</Text>

                <View>
                        <Text style={styles.label}>Imagem do Produto:</Text>
                        <Image source={{uri: image}} style={{width: 300, height: 300}}/>
                        <Button title='Escolha a imagem' onPress={pickImage}/>
                        {!uploading?<Button title='upload' onPress={uploadImage}/>:<ActivityIndicator size="large" color="black"/>}
                </View>
                <View>
                    {/* <TextInput
                        placeholder='imagem aqui'
                        onChangeText={setLinkImage}
                        value={linkImage}
                    /> */}
                </View>
                <View style={styles.inputs}>
                        <Text style={styles.label}>Nome do Produto:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Informe o nome'
                            onChangeText={setNome}
                            value={nome}
                        />
                </View>
                <View style={styles.inputs}>
                        <Text style={styles.label}>Nome da Confeitaria:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Informe o nome'
                            onChangeText={setNomeConfeitaria}
                            value={nomeConfeitaria}
                        />
                </View><View style={styles.inputs}>
                        <Text style={styles.label}>Tempo de preparo:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Informe o nome'
                            keyboardType='numeric'
                            onChangeText={setTempo}
                            value={tempo}
                        />
                </View>
                <View style={styles.inputs}>
                        <Text style={styles.label}>Porções:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Informe o nome'
                            keyboardType='numeric'
                            onChangeText={setPorcoes}
                            value={porcoes}
                        />
                </View>
                <View style={styles.inputs}>
                        <Text style={styles.label}>Descrição:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Informe o nome'
                            onChangeText={setDescription}
                            value={description}
                        />
                </View>
                <View style={styles.inputs}>
                        <Text style={styles.label}>Ingredientes:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Informe o nome'
                            onChangeText={setingredientes}
                            value={ingredientes}
                        />
                </View>
                <TouchableOpacity onPress={uploadImage}>
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        
    )
}