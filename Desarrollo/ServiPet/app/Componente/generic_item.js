import * as React from "react";
import { View, Button, Image, Text } from "react-native";
import LineaDivisoria from "./linea_divisora";

export default function GenericItem(props) {
  const { informationObject, clickBoton } = props;
  const {
    itemImage = require("../../assets/Icono_Laboratorio.png"),
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
          margin: 10,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{ tintColor: "#6ac3c8", width: 60, height: 60 }}
          source={itemImage}
        />
        <View
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              color: "#5d4294",
              fontSize: 25,
              width: 200,
              textAlign: "center",
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
