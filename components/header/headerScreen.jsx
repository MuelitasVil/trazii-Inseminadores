import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window'); // Captura de dimensiones

import {
    Text,
    View,
    StyleSheet,
    Image,
  } from 'react-native';

const HeaderScreen=({textTittle})=>{
    return(
        <View style ={styles.container}>
            <View style={[styles.logoContainer]}>
                <Image style = {styles.logo}
                    source = { require('../../assets/icons/logo.png')}/> 
                <Text style={[styles.label]}>{textTittle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    
    container:{ 
        width : width,
        height : height * 0.20,
        marginTop : height * 0.08,
        flexDirection:'column',
        alignContent : 'center',
        alignItems : 'center',
    },
    
    logoContainer:{
        alignItems : 'center',
        marginBottom : height * 0.04,
    },
  
    logo:{ 
        width: width/2, 
        height: height/11,
        resizeMode: 'contain'
    },

    label:{
        textAlign : 'justify',
        fontSize: 24,
        fontWeight:'bold',
        color:'#075755',       
    }
})

export default HeaderScreen;