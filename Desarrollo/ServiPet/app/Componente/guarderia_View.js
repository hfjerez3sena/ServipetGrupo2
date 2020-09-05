import * as React from "react";
import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View } from "react-native";

export default function guarderia_View() {
  var itemsView = [
    {
      itemImage: require("./imagenes/Icono__Paseo.svg"),
      itemTitle: "Paseo",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__Hotel.svg"),
      itemTitle: "Hotel",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__Guardería-31.svg"),
      itemTitle: "Guarderia",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: false,
    },
  ];

  const clickBoton = (name) => {
    console.log("Click desde botón genérico");
    switch (name) {
      case "Paseo":
        console.log("Boton: " + name);
        break;
      case "Hotel":
        console.log("Boton: " + name);
        break;
      case "Guardería":
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
        <Card.Content>{items}</Card.Content>
      </Card>
    </View>
  );
}
