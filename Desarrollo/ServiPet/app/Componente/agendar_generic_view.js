import * as React from "react";
import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View, Button, Text, StyleSheet, Image, TextInput } from "react-native";

export default function AgendarGeneric(props) {

  const { navigation } = props

  var itemsView = [
    {
      itemImage: require("./imagenes/Icono__Laboratorio.svg"),
      itemTitle: "Laboratorio",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__Ultrasonido.svg"),
      itemTitle: "Ecografía",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__RX.svg"),
      itemTitle: "Rayos X",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__Cirugías.svg"),
      itemTitle: "Cirugías",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: false,
    },
  ];

  const clickBoton = (name) => {
    console.log("Click desde botón genérico"); //Hay que identificar el boton que fue clickeado
    switch (name) {
      case "Laboratorio":
        console.log("Boton: " + name);
        break;
      case "Ecografía":
        console.log("Boton: " + name);
        break;
      case "Rayos X":
        console.log("Boton: " + name);
        break;
      case "Cirugías":
        console.log("Boton: " + name);
        break;
    }
    //console.log("Boton: "+name)
  };

  let items = itemsView.map((genericItem) => (
    <GenericItemView informationObject={genericItem} clickBoton={clickBoton} />
  ));

  return (
    <View>
      <Card
        style={{
          flexDirection: "row",
          height: "height",
          margin: 20,
          alignSelf: "center",
          borderRadius: 20,
          justifyContent: "space-evenly",
        }}
        elevation={10}
      >
        <Card.Content>{
            <View>
                <Text style={styles.titleOneStyle}>Agendar Servicio</Text>
                <Card
        style={{
          flexDirection: "row",
          height: "height",
          margin: 10,
          alignSelf: "center",
          borderRadius: 20,
          backgroundColor: "#EFEFEF",
          justifyContent: "space-evenly",
        }}
        elevation={10}
      >
        <Card.Content>{
            <View>
                <Text style={styles.titleTwoStyle}>Información de la mascota</Text>
                <View style={styles.doubleRow}>
                    <Image source = {require("./imagenes/Icono__Cirugías.svg")} style={styles.imageOne}/>
                    <View style={{justifyContent: "center"}}>
                        <TextInput style={styles.editTextStyle} placeholder="Género"/>
                        <TextInput style={styles.editTextStyle} placeholder="Edad" />
                    </View>
                </View>
                <TextInput style={styles.editTextStyle} placeholder="Nombre"/>
                <TextInput style={styles.editTextStyle} placeholder="Raza" />
                <Text style={styles.textViewOne} >Carácter</Text>
                <TextInput style={styles.editTextStyle} placeholder="Rojo, Amarillo, Verde, etc." />
            </View>
        }</Card.Content>
      </Card>
      <Text style={styles.textViewOne} >Fecha:</Text>
      

            </View>
        }</Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    titleOneStyle: {
        color : "#5d4294",
        fontSize : 25,
        alignSelf: "center",
        marginBottom: 20,
    },
    titleTwoStyle: {
        color : "#5d4294",
        fontSize : 15,
        alignSelf: "center",
        marginBottom: 5,
    },
    doubleRow: {
        color : "#5d4294",
        fontSize : 15,
        alignSelf: "center",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    imageOne:{
        width: 100,
        height: 100
    },
    editTextStyle: {
        borderRadius: 20,
        height: 30,
        marginBottom: 7,
        borderColor: '#D8D0CF', 
        borderWidth: 1,
        borderRadius: 10,
        paddingStart: 10,
    },
    textViewOne: {
        height: 30,
        paddingStart: 20,
        marginBottom: -10,
        color: "gray"
    }
});

/*const styles = StyleSheet.create({
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
        paddingStart: 10,

    }
})*/