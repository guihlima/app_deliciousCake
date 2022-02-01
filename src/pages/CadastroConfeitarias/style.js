import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FEFEFE',
        paddingLeft: 25,
        paddingRight: 25
    }, 
    btnBack:{
        // backgroundColor: 'blue',
        alignSelf: 'flex-start',
        // marginLeft: 20,
        marginBottom: 30


    },
    arrowBack:{
        fontSize: 30
    },
    title: {
        fontFamily: 'IBM',
        fontSize: 36,
        marginBottom: 29,
        color: '#D38C88'
    },
    label:{
        marginBottom: 10
    },
    input:{
        width: 330,
        height: 53,
        marginBottom: 29,
        // backgroundColor: '#c5c5c5',
        borderRadius: 4,
        padding: 10,
        borderWidth: 0.2
    },
    btnSalvar:{
        width: 330,
        height: 53,
        backgroundColor: '#D38C88',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    txtBtnSalvar: {
        color: '#FFF',
        fontFamily: 'IBM',
        fontSize: 18
    },
})

export default style