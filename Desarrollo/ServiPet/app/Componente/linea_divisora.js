import React from "react";
import { View } from "react-native";

export default function LineaDivisora(props) {
  const { mostrarLinea } = props
  var colorLine = "#00000000"
  if(mostrarLinea == true){
    colorLine = "#D8D0CF"
  }
  return (
    <View
    style={{
        borderBottomColor: colorLine,
        borderBottomWidth: 1,
      }}
    />
  );
}