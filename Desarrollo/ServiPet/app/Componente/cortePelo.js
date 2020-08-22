import React from "react";
import { Text, View, Button, Image } from "react-native";
import { color } from "react-native-reanimated";

export default function CortePelo() {
  return (
    <View
      style={{
        alignContent: "center",
        flexDirection: "row",
        marginRight: 50,
        marginLeft: 50,
        height: 100,
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      <h1>
        <Image
          style={{ tintColor: "#6ac3c8", width: 100, height: 100 }}
          source={require("./imagenes/Icono__Pelo.svg")}
        />
      </h1>
      <h1>
        <Text
          style={{
            color: "#5d4294",
            fontSize: 14,
            fontWeight: "bold",
            justifyContent: "space-evenly",
          }}
        >
          Corte de pelo
        </Text>
        <Button title="Agendar Cita" color="#6ac3c8" />
      </h1>
    </View>
  );
}
