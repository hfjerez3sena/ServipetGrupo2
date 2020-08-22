import React from "react";
import { Text, View, Button, Image } from "react-native";

export default function RayosX() {
  return (
    <View
      style={{
        flexDirection: "row",
        height: "justifyContent",
        margin: 20,
        justifyContent: "space-evenly",
      }}>
        <Image
          style={{ tintColor: "#6ac3c8", width: 130, height: 130 }}
          source={require("./imagenes/Icono__RX.svg")}
        />
      <View style={{
        justifyContent: "space-evenly",}}>
        <Text
          style={{
            color: "#5d4294",
            fontSize: 35,
          }}>Rayos X</Text>
        <Button title="Agendar cita" color="#6ac3c8"/>
        </View>
    </View>
  );
}