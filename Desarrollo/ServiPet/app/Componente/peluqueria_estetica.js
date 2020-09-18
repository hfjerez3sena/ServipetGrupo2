import * as React from "react";
import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View, ScrollView } from "react-native";

export default function PeluqueriaEsteticaView(props) {
  const { navigation } = props;

  var itemsView = [
    {
      itemImage: require("../../assets/index/PeluqueriEst/Icono_Uñas.png"),
      itemTitle: "Corte de Uñas",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/PeluqueriEst/Icono_Pelo.png"),
      itemTitle: "Corte de Pelo",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/PeluqueriEst/Icono_Profilaxis.png"),
      itemTitle: "Profilaxis",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: true,
    },
    {
      itemImage: require("../../assets/index/PeluqueriEst/Icono_Baño.png"),
      itemTitle: "Baño",
      buttonName: "Agendar cita",
      colorBoton: "#6ac3c8",
      mostrarLinea: false,
    },
  ];

  const clickBoton = (name) => {
    switch (name) {
      case "Corte de Uñas":
        navigation.navigate("Corte de uñas");
        break;
      case "Corte de Pelo":
        navigation.navigate("Corte de pelo");
        break;
      case "Profilaxis":
        navigation.navigate("Profilaxis");
        break;
      case "Baño":
        navigation.navigate("Baño");
        break;
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
