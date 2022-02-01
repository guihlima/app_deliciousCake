import { StyleSheet,StatusBar, Dimensions } from "react-native";


var largura = Dimensions.get('screen').width
const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: StatusBar.currentHeight,
        // backgroundColor: '#FEFEFE'
        
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        width:  largura,
        marginTop: 20,
        marginBottom: 29,
        paddingLeft: 20,
        paddingRight: 20,
    },
    logo:{
        fontFamily: 'GrandHotel',
        fontSize: 30,
        height: 49,
        
        color: '#26223B'
    },
    perfil:{
        width: 40,
        height: 40,
    },
    title:{
        fontFamily: 'IBMLight',
        fontSize: 28,
        width: largura-50,
        marginBottom: 24,
        color: '#26223B',
        paddingLeft: 20,
        // paddingRight: 20,
    },
    filters:{
        paddingLeft:5,
        width: largura
    },
    itemFilter:{
        paddingTop: 7,
        marginLeft: 10,
        marginBottom: 24,
        marginRight: 10,
        // borderWidth: 0.2,
        width: 80,
        height: 37,
        textAlign: 'center',
        borderRadius: 10,
        // borderColor: '#454545',
        backgroundColor: '#FEFEFE',
        fontFamily: 'IBM',
        fontSize: 15,
        color: '#454545',
    },
    area:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: largura,
        alignItems: 'center',
        marginBottom: 18,
        paddingLeft: 20,
        paddingRight: 20,
        // width: largra,
    },
    tagTitle:{
        textAlign: 'center',
        fontFamily: 'IBM',
        fontSize: 18
    },
    tagSubtitle:{
        fontSize: 12,
        fontFamily: 'IBMRegular'
    },
    areaCakes:{
        // marginHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 24,
        paddingLeft: 20,
        paddingRight: 20,
    },  
    card:{
        width: 150,
        marginRight: 80,
    },
    imgCake:{
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: 200,
        height: 150

    },
    areaConfeitarias:{

        alignItems: 'center',
        width: largura,
        height: 100,
        
    },
    confeitaria:{
        paddingRight: 20,
        justifyContent: 'center',
        
    },
    nav:{
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    iconNav:{
        padding: 25
    }
})

export default style