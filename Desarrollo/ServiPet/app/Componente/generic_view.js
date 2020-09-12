import * as React from "react";
import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View } from "react-native";

export default function genericView() {
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
      itemImage: require("./imagenes/Icono__Cirujano.svg"),
      itemTitle: "Cirugías",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: false,
    },
  ];

  const clickBoton = (name) => {
    console.log("Click desde botón genérico"); //Hay que identificar el boton que fue clickeado
  };

  let items = itemsView.map((genericItem) => (
    <GenericItemView informationObject={genericItem} clickBoton={clickBoton} />
  ));

  return (
    <View>
      <Card
        style={{
          flexDirection: "row",
          margin: 20,
          alignSelf: "right",
          borderRadius: 20,
        }}
        elevation={10}
      >
        <Card.Content>{items}</Card.Content>
      </Card>
    </View>
  );
}
