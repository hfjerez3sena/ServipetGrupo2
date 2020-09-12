import * as React from "react";
import { Card } from "react-native-paper";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function BotonGenerico(props) {
    const { title, onClick } = props
    const AppButton = ({ onPress, title }) => (//Creación de un estilo de boton
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );
    return(
        <AppButton title={title} onPress={()=>onClick()}/>
    );
}

const styles = StyleSheet.create({
appButtonContainer: {
    elevation: 8,
    width: 250,
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#5d4294",
    borderRadius: 20,
    paddingVertical: 1,
    paddingHorizontal: 12
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
});