import * as React from "react";
import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View } from "react-native";

export default function GuarderiaView(props) {
  const { navigation } = props;

  var itemsView = [
    {
      itemImage: require("../../assets/index/guarderia/Icono_Paseo.png"),
      itemTitle: "Paseo",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/guarderia/Icono_Hotel.png"),
      itemTitle: "Hotel",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/guarderia/Icono_Guardería.png"),
      itemTitle: "Guardería",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: false,
    },
  ];

  const clickBoton = (name) => {
    switch (name) {
      case "Paseo": navigation.navigate("Paseo"); break;
      case "Hotel": navigation.navigate("Hotel"); break;
      case "Guardería": navigation.navigate("Guardería"); break;
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
