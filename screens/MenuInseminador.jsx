
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import i18n from '../utils/internationalization/i18n';
import HeaderScreen from '../components/header/headerScreen';
import cardButtom from '../components/cardButtom/cardButtom';
import CardButtom from '../components/cardButtom/cardButtom';


const MenuInseminador = ( {navigation} ) => {

    const InseminationButtoms = [
        { 
            title: i18n.t('inseminationModule.menu.Ruta'),
            image: require('../assets/icons/cow-grup.png'),
            action: () => { navigation.navigate('Ruta') }
        },
        { 
            title: i18n.t('inseminationModule.menu.Procedimiento'),
            image: require('../assets/icons/insemination.png'),
            action: () => { console.log("asd") }
        },
        { 
            title: i18n.t('inseminationModule.menu.Pago'), 
            image: require('../assets/icons/team.png'), 
            action: () => { console.log("asd") } 
        },
    ]

    return (
        <View>
            <HeaderScreen textTittle={i18n.t('inseminationModule.menu.Tittle')} />
            <CardButtom.RederIndex data = {InseminationButtoms} numColumns = {1}/>
        </View>  
    );
}

// 


export default MenuInseminador