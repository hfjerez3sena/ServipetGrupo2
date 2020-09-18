import * as React from "react";
import { Card } from "react-native-paper";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Imagenn from "./imagenes/Icono__Control.svg"

export default function LoginView(props) {

  const { navigation } = props

  const AppButton = ({ onPress, title }) => (//Creación de un estilo de boton
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const clickBoton=(name)=>{
    console.log("Boton: "+name+" CLICK: Agendar Genérico");
  };

  return (
    <View style={{
        flexDirection: "row",
        alignContent: "center",
        alignItems: 'center',
        alignSelf: "center",
        flex: 1
      }}>
      <Card
        style={{
          flexDirection: "row",
          margin: 20,
          borderRadius: 20,
          justifyContent: "center",
          marginVertical: 50
        }}
        elevation={10}
      >
        <Card.Content>
            
        <View style={styles.textInputImageStyle}>
            <TextInput style={styles.freeTextInputBig} /> 
        </View>
        <AppButton title="Agendar cita" onPress={clickBoton}/>
        
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    appButtonText: {
      fontSize: 20,
      paddingEnd: 10,
      paddingStart: 10,
      paddingBottom: 2,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "none"
    },
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
});
