import {View, Text, StyleSheet} from 'react-native'

export default Sobre = ()=>{

    return (
        <View   >
            <Text style={Estilo.text} >Olá Mundo</Text>
        </View>
    );
}


const  Estilo = StyleSheet.create(
    {
        text: {
            fontsize: 20,
            color: 'blue',
        },
    }
);