import React from "react";
import FlatListIndex from "./flat_list";
import { Card } from "react-native-paper";
import { View } from "react-native";
import Urgencias from "./imagenes/Icono__Urgencias.svg";
import PeluyEste from "./imagenes/Icono__Peluqueria.svg";
import ConsuVete from "./imagenes/Icono__Consulta.svg";
import ConsuEspe from "./imagenes/Icono__Especialista.svg";
import CliniVete from "./imagenes/Icono__Clinica.svg";
import Guarde from "./imagenes/Icono__Guardería-11.svg";

export default function IndexView(props) {
  const { navigation } = props;

  const itemsView = React.useState([
    {
      name: "Urgencias",
      image: <Urgencias style={{ width: "90%", height: "80%" }} />,
      code: "red",
      clickId: "urgencias",
    },
    {
      name: "Peluqueria y Estética",
      image: <PeluyEste style={{ width: "90%", height: "80%" }} />,
      code: "#5d4294",
      clickId: "pelu_estet",
    },
    {
      name: "Consulta Veterinaria",
      image: <ConsuVete style={{ width: "90%", height: "80%" }} />,
      code: "#5d4294",
      clickId: "consul_vet",
    },
    {
      name: "Consulta Especialista",
      image: <ConsuEspe style={{ width: "90%", height: "80%" }} />,
      code: "#5d4294",
      clickId: "consul_spec",
    },
    {
      name: "Clínica Veterinaria",
      image: <CliniVete style={{ width: "90%", height: "80%" }} />,
      code: "#5d4294",
      clickId: "cli_vet",
    },
    {
      name: "Guarderia",
      image: <Guarde style={{ width: "90%", height: "80%" }} />,
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
