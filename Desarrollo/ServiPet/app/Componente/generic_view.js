//import React from "react"
import * as React from "react";
import GenericItemView from "./generic_item"
import Laboratorio from "./laboratorio";
import Ecografia from "./ecografia"
import RayosX from "./rayos_x"
import Cirugia from "./cirugia"
import { Card } from 'react-native-paper';
import LineaDivisoria from "./linea_divisora"
import { View } from "react-native";

export default function genericView(/*props*/){
    //const {usuario, clickBoton} = props;
    var itemsView = [
        {itemImage: "./imagenes/Icono__Laboratorio.svg", itemTitle: "Laboratorio", buttonName: "Agendar cita"},
        {itemImage: "./imagenes/Icono__Ultrasonido.svg", itemTitle: "Ecografía", buttonName: "Agendar cita"},
        {itemImage: "./imagenes/Icono__RX.svg", itemTitle: "Rayos X", buttonName: "Agendar cita"},
        {itemImage: "./imagenes/Icono__Cirujano.svg", itemTitle: "Cirugías", buttonName: "Agendar cita"},
      ]

    function logArrayElements(element, index, array) {
        console.log("a[" + index + "] = " + element.itemTitle + " View - Fabian");
        <Cirugia />
    }

    return (
        <View>
      <Card
      style={{
        flexDirection: "row",
        height: "height",
        margin: 20,
        alignSelf:'center',
        borderRadius: 20,
        justifyContent: "space-evenly",
      }}
      elevation={10}
      >
      <Card.Content>
        <Laboratorio />
        <LineaDivisoria />
        <Ecografia />
        <LineaDivisoria />
        <RayosX  />
        <LineaDivisoria />
        <Cirugia />
        <script>
            ${itemsView.forEach(logArrayElements)}
        </script>

      </Card.Content>
    </Card>
    </View>
    );
}

function asda(){}
function myFunction(item, index) {
    //document.getElementById("status").innerHTML += index + ":" + item + "<br>"; 
  }