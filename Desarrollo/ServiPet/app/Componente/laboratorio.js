import React from "react";
import { Text, View, Button, Image } from "react-native";

export default function Laboratorio() {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 200,
        padding: 5,
        marginHorizontal: 70,
        justifyContent: "center",
      }}
    >
      <h3>
        <Image
          style={{ tintColor: "#6ac3c8", width: 130, height: 130 }}
          source={require("./imagenes/Icono__Laboratorio.svg")}
        />
      </h3>
      <h1>
        <Text
          style={{
            color: "#5d4294",
            fontSize: 35,
            fontWeight: "400",
          }}
        >Laboratorio</Text>
        <Button title="Agendar cita" color="#6ac3c8" />
      </h1>
    </View>
  );
}