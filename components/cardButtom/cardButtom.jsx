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

const CardButtom = ({ item }) => {
    // Este componente se usa con FlatList from react para el mapeo
    return (
        <View style={{alignItems:'center', margin:'2%'}}>
        <Card style={styles.cardButtom}>
            <TouchableOpacity
                style={{alignItems:'center'}}
                onPress={item.action}>
                <Image style={styles.cardImage}
                    source={item.image}/>
                <Text style={styles.carLabel}>{item.title}</Text>
            </TouchableOpacity>
        </Card>
        </View>
    );
};

const RederIndex = ({ data, numColumns}) => {
    return (
        <View style={{alignItems: 'center' }}>
            <FlatList
                data={data}
                renderItem={CardButtom}
                keyExtractor={(item, index) => index.toString()}
                numColumns={numColumns}
                contentContainerStyle={{ alignItems: 'center'}}/>
        </View>
    )
}
const styles = StyleSheet.create({

    cardButtom: {
        width: width / 2,
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

export default {CardButtom, RederIndex};