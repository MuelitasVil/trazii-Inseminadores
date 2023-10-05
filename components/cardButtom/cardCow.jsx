// CarButton2 

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native';

import { Card } from 'react-native-paper';

//Dimensiones de pantalla
const { width, height } = Dimensions.get('window');

const CardButtomRoute = ({ item }) => {
    // Este componente se usa con FlatList from react para el mapeo
    return (
        <View style={{alignItems:'center', margin:'2%'}}>
        <Card style={styles.cardButtom}>
            <TouchableOpacity
                style={{alignItems:'center'}}
                onPress={item.action}>
                <Text style={styles.carLabel}>{ 'Nombre la vaca : '} {item.nombre}</Text>
                <Text style={styles.carLabel}>{ 'Semen : '} {item.semen}</Text>
            </TouchableOpacity>
        </Card>
        </View>
    );
};

const RederIndex = ({ data, numColumns}) => {
    return (
        <View style={{alignItems: 'center' }}>
            <FlatList
                data = {data}
                renderItem = {CardButtomRoute}
                keyExtractor={(item, index) => index.toString()}
                numColumns={numColumns}
                contentContainerStyle={{ alignItems: 'center'}}/>
        </View>
    )
}
const styles = StyleSheet.create({

    cardButtom: {
        width: width * 0.90 ,
        borderStyle: 'solid',
        borderColor: '#8BBF46',
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        padding: '6%',
        margin: '4%'
    },

    cardImage: {
        height: height / 10,
        width: width / 4,
        resizeMode: 'contain',
    },

    carLabel: {
        margin : 2,
        color: '#075755',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 16
    },
});

export default {CardButtomRoute, RederIndex};