import * as React from "react"
import { View, Button, Image, Text, TextInput, StyleSheet, ColorValue } from "react-native";
import LineaDivisoria from "./linea_divisora"

export default function UrgenciasElement(props){
    const {informationObject, clickBoton} = props
    const { subTitulo = 'Consulta especialista', inputTextId = 'consul_spec' } = informationObject
    return (
        <View>
            <Text style={styles.subtitleStyle}>{informationObject.subTitulo}</Text>
            <TextInput style={ styles.inputTextStyle } nativeID={inputTextId}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitleStyle:{
        marginTop: 5,
        marginBottom: 10,
        color: "#5d4294",
    },
    inputTextStyle:{
        height: 30,
        marginBottom: 7,
        borderColor: '#D8D0CF', 
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
        paddingStart: 10,

    }
})