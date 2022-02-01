import { StyleSheet ,Dimensions} from "react-native";

const altura = Dimensions.get('screen').height
const largura = Dimensions.get('screen').width
const style = StyleSheet.create({
    container:{
        height: altura
    },
    bolinhas:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 200
    },
    bolinhaBranca:{
        width: 12,
        height: 12,
        backgroundColor: '#FFF',
        borderRadius: 50,
        marginRight: 10
    },
    bolinha:{
        width: 12,
        height: 12,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        marginRight: 10,
    },
    description:{
        position: 'absolute', backgroundColor: '#fff',
        top: 250,
        left: 0,
        width: largura,
        height: altura,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 20
    },
    labelBolo:{
        fontFamily: 'IBMSemiBold',
        fontSize: 24
    },
    labelConfeitaria:{
        fontFamily: 'IBM',
        fontSize: 16,
        color: '#D38C88'
    },
    viewTempoPorcoes:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    txtTimer:{
        fontFamily: 'IBMSemiBold',
        fontSize: 14,
        marginRight: 15
    },
    txtHoras:{
        fontFamily: 'IBMRegular',
    },
    txtDescricao:{
        marginTop: 10,
        marginBottom: 5,
        fontFamily: 'IBMRegular',
        fontSize: 14
    },  
    descriptionCake:{
        fontSize: 17,
        fontFamily: 'IBMRegular'
    },
    txtIngredientes:{
        fontFamily: 'IBMRegular',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10
    },
    ingredientes:{
        flexDirection: 'column'
    },
    preco:{
        fontSize: 28,
        fontFamily: 'IBM',
        color: '#698199'
    },
    btnAdd:{
        width: 144,
        height: 50,
        backgroundColor: '#D38C88',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 10,
        
    },
    txtBtnAdd:{
        color: '#FFF',
        paddingLeft: 10,
        fontFamily: 'IBM'
    },
    nav:{
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
        bottom: 0,
    },
    iconNav:{
        padding: 25
    }
})

export default style