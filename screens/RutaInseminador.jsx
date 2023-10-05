
import { View, ImageBackground, StyleSheet, Text, ScrollView } from 'react-native';
import i18n from '../utils/internationalization/i18n';
import HeaderScreen from '../components/header/headerScreen';
import CardButtom from '../components/cardButtom/cardRoute';
import pruebaRuta from '../Information/pruebaRuta';

const MenuInseminador = ( {navigation} ) => {

    pruebaRuta.map( (ruta) => ruta.action = () => {navigation.navigate('Vacas'),{
        fincas : pruebaRuta.id
    }} )

    return (
    <View>
        <ScrollView>      
            <HeaderScreen textTittle={i18n.t('inseminationModule.menu.Ruta')} />
            <CardButtom.RederIndex data = {pruebaRuta} numColumns = {1}/> 
        </ScrollView>
    </View> 
    );
}

// 


export default MenuInseminador