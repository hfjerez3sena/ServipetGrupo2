import * as React from "react";
import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View } from "react-native";

export default function consulta_View() {
  var itemsView = [
    {
      itemImage: require("./imagenes/Icono__Control.svg"),
      itemTitle: "Control",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__Crecimiento.svg"),
      itemTitle: "Crecimiento y Desarrollo",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__Vacunación.svg"),
      itemTitle: "Vacunación",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__Desparasitación.svg"),
      itemTitle: "Desparasitación",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("./imagenes/Icono__VetEnCasa.svg"),
      itemTitle: "Veterinario en Casa",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: false,
    },
  ];

  const clickBoton = (name) => {
    console.log("Click desde botón genérico"); //Hay que identificar el boton que fue clickeado
    switch (name) {
      case "Control":
        console.log("Boton: " + name);
        break;
      case "Crecimiento y Desarrollo":
        console.log("Boton: " + name);
        break;
      case "Vacunación":
        console.log("Boton: " + name);
        break;
      case "Desparacitación":
        console.log("Boton: " + name);
        break;
      case "Veterinario en Casa":
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
