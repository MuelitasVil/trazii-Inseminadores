
import { View, ImageBackground, StyleSheet, Text, ScrollView } from 'react-native';
import i18n from '../utils/internationalization/i18n';
import HeaderScreen from '../components/header/headerScreen';
import CardButtom from '../components/cardButtom/cardCow';

import pruebaVacas from '../Information/pruebaVacas'
import pruebaRuta from '../Information/pruebaRuta'

const MenuInseminador = ( {navigation, fincas} ) => {

    pruebaVacas.map( (ruta) => ruta.action = () => console.log("holamundo"))

    console.log(fincas)

    return (
        <View>
            <ScrollView>
                <HeaderScreen textTittle={i18n.t('inseminationModule.menu.Ruta')} />
                <CardButtom.RederIndex data = {pruebaVacas} numColumns = {1}/>
            </ScrollView>
        </View>  
    );
} 


export default MenuInseminador