import * as React from "react";
import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View } from "react-native";

export default function PeluqueriaEsteticaView(props) {

  const { navigation } = props

  var itemsView = [
    {
      itemImage: require("./imagenes/Icono__Laboratorio.svg"),
      itemTitle: "Corte de Uñas",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__Ultrasonido.svg"),
      itemTitle: "Corte de Pelo",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__RX.svg"),
      itemTitle: "Profilaxis",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__Cirugías.svg"),
      itemTitle: "Baño",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: false,
    },
  ];

  const clickBoton = (name) => {
    console.log("Click desde botón genérico"); //Hay que identificar el boton que fue clickeado
    switch (name) {
      case "Corte de Uñas":
        console.log("Boton: " + name);
        break;
      case "Corte de Pelo":
        console.log("Boton: " + name);
        break;
      case "Profilaxis":
        console.log("Boton: " + name);
        break;
      case "Baño":
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
          margin: 20,
          alignSelf: "center",
          borderRadius: 20,
          justifyContent: "space-evenly",
        }}
        elevation={10}
      >
        <Card.Content>{items}</Card.Content>
      </Card>
    </View>
  );
}
