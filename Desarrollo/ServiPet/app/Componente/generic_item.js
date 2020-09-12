import * as React from "react";
import { View, Button, Image, Text } from "react-native";
import LineaDivisoria from "./linea_divisora";

export default function GenericItem(props) {
  const { informationObject, clickBoton } = props;
  const {
    itemImage = require("./imagenes/Icono__Laboratorio.svg"),
    itemTitle = "Titulo",
    buttonName = "Boton",
    colorBoton = "red",
    mostrarLinea = true,
  } = informationObject;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          margin: 20,
          justifyContent: "space-evenly",
        }}
      >
        <Image style={{ width: 100, height: 100 }} source={itemImage} />
        <View
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              color: "#5d4294",
              fontSize: 30,
              width: 150,
              textAlign: "right",
            }}
          >
            {informationObject.itemTitle}
          </Text>
          <Button
            title={informationObject.buttonName}
            color={colorBoton}
            onPress={() => {
              clickBoton(informationObject.itemTitle);
            }}
          />
        </View>
      </View>
      <LineaDivisoria mostrarLinea={mostrarLinea} />
    </View>
  );
}
