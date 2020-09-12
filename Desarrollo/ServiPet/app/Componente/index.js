import React from "react";
import FlatListIndex from "./flat_list";
import { Card } from "react-native-paper";
import { View } from "react-native";

export default function IndexView(props) {
  const { navigation } = props;

  const itemsView = React.useState([
    {
      name: "Urgencias",
      image: require("./imagenes/Icono__Urgencias.svg"),
      code: "red",
      clickId: "urgencias",
    },
    {
      name: "Peluqueria y estética",
      image: require("./imagenes/Icono__Peluqueria.svg"),
      code: "#5d4294",
      clickId: "pelu_estet",
    },
    {
      name: "Consulta Veterinaria",
      image: require("./imagenes/Icono__Consulta.svg"),
      code: "#5d4294",
      clickId: "consul_vet",
    },
    {
      name: "Consulta especialista",
      image: require("./imagenes/Icono__Especialista.svg"),
      code: "#5d4294",
      clickId: "consul_spec",
    },
    {
      name: "Clínica veterinaria",
      image: require("./imagenes/Icono__Clinica.svg"),
      code: "#5d4294",
      clickId: "cli_vet",
    },
    {
      name: "Guarderia",
      image: require("./imagenes/Icono__Guardería-11.svg"),
      code: "#5d4294",
      clickId: "guarderia",
    },
  ]);
  const clickBoton = (name) => {
    switch (name) {
      case "urgencias":
        navigation.navigate("URGENCIAS");
        break;

      case "pelu_estet":
        console.log("Boton: " + name + " CLICK POR IMPLEMENTAR");
        navigation.navigate("PELUQUERIA");
        break;

      case "consul_vet":
        console.log("Boton: " + name + " CLICK POR IMPLEMENTAR");
        break;

      case "consul_spec":
        console.log("Boton: " + name + " CLICK POR IMPLEMENTAR");
        break;

      case "cli_vet":
        console.log("Boton: " + name + " CLICK POR IMPLEMENTAR");
        navigation.navigate("CLINICA VETERINARIA");
        break;

      case "guarderia":
        console.log("Boton: " + name + " CLICK POR IMPLEMENTAR");
        break;
    }
  };
  return (
    <View style={{ alignSelf: "center" }}>
      <Card
        style={{
          flexDirection: "row",
          margin: 20,
          alignSelf: "baseline",
          borderRadius: 20,
        }}
        elevation={10}
      >
        <Card.Content style={{ alignSelf: "center" }}>
          <FlatListIndex
            informationObject={itemsView}
            clickBoton={clickBoton}
          />
        </Card.Content>
      </Card>
    </View>
  );
}
