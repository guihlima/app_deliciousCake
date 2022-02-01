import { StyleSheet, Dimensions } from "react-native"

const largura = Dimensions.get('screen').width
const altura = Dimensions.get('screen').height

const style = StyleSheet.create({
    container:{
        height: altura,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEFEFE'
        
    },
    title: {
        fontFamily: 'GrandHotel',
        fontSize: 36,
        marginBottom: 29,
        color: '#D38C88'
    },
    input:{
        marginLeft: 10,
        width: 300,
        height: 53,
        marginBottom: 15,
        // backgroundColor: '#c5c5c5',
        borderRadius: 2,
        padding: 10,
        borderWidth: 0.2
    },
    esqSenha:{
        width: largura-50,
        // backgroundColor: 'blue',
        marginTop: 10
    },
    txtEsqSenha:{
        fontFamily: 'IBM',
        fontSize: 14,
        textAlign: 'right',
        padding: 10
    },
    btnLogin:{
        width: 300,
        height: 53,
        backgroundColor: '#D38C88',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    txtBtnLogin: {
        color: '#FFF',
        fontFamily: 'IBM',
        fontSize: 18
    },
    alert: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    warningAlert: {
        paddingLeft: 10,
        fontSize: 16,
        color: 'red'
    },
    txtOu:{
        marginTop: 30,
        marginBottom: 30,
        textAlign: 'center',
    },
    redesSociais:{
        
        flexDirection: 'row',
        marginLeft: -20
    },
    iconsSociais:{
        backgroundColor: '#698199',
        width: 50,
        height: 50,
        textAlign: 'center',
        paddingTop: 13.5,
        color: '#FFF',
        borderRadius: 50,
        marginLeft: 20
        
    },
    registration:{
        marginTop: 27,
        fontFamily: 'IBMRegular',
        color: '#26223B'
    },
    linkSubscribe:{
        color: '#859BB3'
    },
    img:{
        width: 100
    }
});

export default style