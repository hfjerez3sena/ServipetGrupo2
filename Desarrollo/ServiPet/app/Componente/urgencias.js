import React from 'react';
import UrgenciasElements from "./urgencias_elements"
import { Card } from 'react-native-paper';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function IndexView() {
    
    const itemsView = [
        { subTitulo: 'Celular:', inputTextId:'consul_spec' },
        { subTitulo: 'Dirección:', inputTextId:'consul_spec' },
        { subTitulo: 'Especificaciones:', inputTextId:'consul_spec' },
        { subTitulo: 'Barrio:', inputTextId:'consul_spec' }
    ]; 

    let vista = itemsView.map((item)=> <UrgenciasElements informationObject={item} clickBoton={clickBoton} titulo="Brayan Fabian" imagen={require("./imagenes/Icono__Ambuulancia.svg")} botonName="Calderon Boton"/>)

    const clickBoton=(name)=>{
        console.log("Boton: "+name+" CLICK POR IMPLEMENTAR");
    };

      const AppButton = ({ onPress, title }) => (//Creación de un estilo de boton
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );

    return (
        <View style={{ alignSelf:'center'}}>
            <Card
                style={{
                flexDirection: "row",
                margin: 20,
                padding: 20,
                alignSelf:'baseline',
                borderRadius: 20,
                }}
                elevation={10}
            >
            <Card.Content style={{ alignSelf:'center'}}>
                <Text style={styles.titulo }>Diligencia el formulario</Text>
                {vista}
                <View style={styles.confirmacion}>
                    <Image style = {styles.imagen} source = {require("./imagenes/Icono__Ambuulancia.svg")}/>
                    <AppButton title="Confirmar ubicación" onPress={clickBoton}/>
                </View>
            </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo:{
        color: "red",
        alignSelf: "center",
        fontSize: 20,
        marginBottom: 30
    },
    confirmacion:{
        flexDirection:"row", 
        justifyContent:"space-around", 
        flex:1,
        alignSelf: "center",
        alignItems: "center",
        marginTop: 10, 
        marginBottom: 5
    },
    imagen:{
        width: 70,
        height: 70,
        marginEnd:10
    },
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 16
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "red",
        borderRadius: 20,
        paddingVertical: 1,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 20,
        paddingEnd: 10,
        paddingStart: 10,
        paddingBottom: 2,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "none"
      }
})