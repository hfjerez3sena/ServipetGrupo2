import * as React from "react";
import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View } from "react-native";

export default function clinica_View(props) {
  const { navigation } = props;

  var itemsView = [
    {
      itemImage: require("../../assets/index/clinicaVet/Icono_Laboratorio.png"),
      itemTitle: "Laboratorio",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/clinicaVet/Icono_Ultrasonido.png"),
      itemTitle: "Ecografía",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/clinicaVet/Icono_RX.png"),
      itemTitle: "Rayos X",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/clinicaVet/Icono_Cirugías.png"),
      itemTitle: "Cirugías",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: false,
    },
  ];
  const clickBoton = (name) => {
    switch (name) {
      case "Laboratorio": navigation.navigate("Laboratorio"); break;
      case "Ecografía": navigation.navigate("Ecografía"); break;
      case "Rayos X": navigation.navigate("Rayos X"); break;
      case "Cirugías": navigation.navigate("Cirugías"); break;
    }
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
