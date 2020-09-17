import * as React from "react";
import { View, Button, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
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

  const AppButton = ({ onPress, title }) => (//Creación de un estilo de boton
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View
        style={{
            flexDirection: "row",
            margin: 20,
            justifyContent: "space-evenly"
        }}>
        <Image
          style={{ tintColor: "#6ac3c8", width: 130, height: 130 }}
          source={itemImage}
        />
        <View
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              alignItems: "center",
              color: "#5d4294",
              fontSize: 35,
              width: 250,
              textAlign: "center",
            }}
          >
            {informationObject.itemTitle}
          </Text>
          
          <AppButton title={informationObject.buttonName}
            title="Confirmar ubicación" onPress={() => {
              clickBoton(informationObject.itemTitle);
            }}/>
        </View>
      </View>
      <LineaDivisoria mostrarLinea={mostrarLinea} />
    </View>
  );
}


const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 20,
    paddingVertical: 1,
    paddingHorizontal: 12,
    backgroundColor: "#6ac3c8"
  },
    appButtonText: {
      fontSize: 20,
      paddingEnd: 10,
      paddingStart: 10,
      paddingBottom: 2,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "none"
    }
})
