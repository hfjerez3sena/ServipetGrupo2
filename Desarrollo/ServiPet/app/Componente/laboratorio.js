import React from "react";
import { Text, View, Button, Image, StyleSheet, ToastAndroid } from "react-native";

export default function Laboratorio() {
  return (
    <View
      style={{
        flexDirection: "row",
        height: "justifyContent",
        margin: 20,
        justifyContent: "space-evenly",
        alignSelf:'baseline'
      }}>
        <Image
          style={{ tintColor: "#6ac3c8", width: 130, height: 130 }}
          source={require("./imagenes/Icono__Laboratorio.svg")}
        />
      <View style={{
        justifyContent: "space-evenly",}}>
        <Text
          style={{
            color: "#5d4294",
            fontSize: 35,
          }}>Laboratorio</Text>
        <Button title="Agendar cita" color="#6ac3c8" onPress={() => {console.log("Laboratorio")}}/>
        </View>
    </View>
  );
}

        