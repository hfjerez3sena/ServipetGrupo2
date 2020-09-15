import React from "react";
import { Text, View, Button, Image } from "react-native";
import { color } from "react-native-reanimated";

export default function Baño() {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 60,
        justifyContent: "space-between",
      }}
    >
      <Image
        style={{ tintColor: "#6ac3c8", width: 100, height: 100 }}
        source={require("./imagenes/Icono__Baño.svg")}
      />
      <View>
        <Text
          style={{
            width: 160,
            textAlign: "center",
            marginTop: 10,
            alignItems: "center",
            paddingBottom: 15,
            color: "#5d4294",
            fontSize: 25,
          }}
        >
          Baño
        </Text>
        <Button title="Agendar Cita" color="#6ac3c8" />
      </View>
    </View>
  );
}
