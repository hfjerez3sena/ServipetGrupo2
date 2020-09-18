import * as React from "react";
import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ConsultaVeterinariaView(props) {
  const { navigation } = props;

  var itemsView = [
    {
      itemImage: require("../../assets/index/ConsultaVet/Icono_Control.png"),
      itemTitle: "Control",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/ConsultaVet/Icono_Crecimiento.png"),
      itemTitle: "Crecimiento y desarrollo",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/ConsultaVet/Icono_Vacunación.png"),
      itemTitle: "Vacunación",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/ConsultaVet/Icono_Desparasitación.png"),
      itemTitle: "Desparacitación",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/ConsultaVet/Icono_VetEnCasa.png"),
      itemTitle: "Veterinario en casa",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: false,
    },
  ];

  const clickBoton = (name) => {
    switch (name) {
      case "Control": navigation.navigate("Control"); break;
      case "Crecimiento y desarrollo": navigation.navigate("Crecimiento y desarrollo"); break;
      case "Vacunación": navigation.navigate("Vacunación"); break;
      case "Desparacitación": navigation.navigate("Desparacitación"); break;
      case "Veterinario en casa": navigation.navigate("Veterinario en casa"); break;
    }
  };

  let items = itemsView.map((genericItem) => (
    <GenericItemView informationObject={genericItem} clickBoton={clickBoton} />
  ));

  return (
    <View>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
}
