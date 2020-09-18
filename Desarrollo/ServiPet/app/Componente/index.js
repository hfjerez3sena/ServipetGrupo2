import React from "react";
import FlatListIndex from "./flat_list";
import { Card } from "react-native-paper";
import { View } from "react-native";

export default function IndexView(props) {
  const { navigation } = props;

  const itemsView = React.useState([
    {
      name: "Urgencias",
      image: require("../../assets/index/Icono_Urgencias.png"),
      code: "red",
      clickId: "urgencias",
    },
    {
      name: "Peluqueria y estética",
      image: require("../../assets/index/Icono_Peluqueria.png"),
      code: "#5d4294",
      clickId: "pelu_estet",
    },
    {
      name: "Consulta Veterinaria",
      image: require("../../assets/index/Icono_Consulta.png"),
      code: "#5d4294",
      clickId: "consul_vet",
    },
    {
      name: "Consulta especialista",
      image: require("../../assets/index/Icono_Especialista.png"),
      code: "#5d4294",
      clickId: "consul_spec",
    },
    {
      name: "Clínica veterinaria",
      image: require("../../assets/index/Icono_Clinica.png"),
      code: "#5d4294",
      clickId: "cli_vet",
    },
    {
      name: "Guarderia",
      image: require("../../assets/index/Icono_Guardería.png"),
      code: "#5d4294",
      clickId: "guarderia",
    },
  ]);
  const clickBoton = (name) => {
    switch (name) {
      case "urgencias":
        navigation.navigate("Urgencias");
        break;

      case "pelu_estet":
        navigation.navigate("Peluquería y estética");
        break;

      case "consul_vet":
        navigation.navigate("Consulta Veterinaria");
        break;

      case "consul_spec":
        navigation.navigate("Consulta especialista");
        break;

      case "cli_vet":
        navigation.navigate("Clinica veterinaria");
        break;

      case "guarderia":
        navigation.navigate("Guarderia");
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
