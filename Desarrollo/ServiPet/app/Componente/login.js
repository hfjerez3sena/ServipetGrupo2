import * as React from "react";
import { Card } from "react-native-paper";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function LoginView( props ) {

  const { navigation } = props;
  const AppButton = ({ onPress, title }) => (//Creación de un estilo de boton
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Image
          style={{ width: 45, height: 45, marginStart: 20 }}
          source={require("../../assets/Google_Logo.png")}
        />
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const clickBoton=(name)=>{
    //console.log({otherParam})
    navigation.navigate("Nutricionista")
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
        
          <Image source={require("../../assets/servipet.png")} style={{ marginTop: 50, width: 245, height: 45, alignSelf:"center" }}/>
          <Text style={styles.textOne}>Accede de forma rapida y segura a todos nuestros servicios utilizando tu cuenta de google</Text>
          <AppButton title="Registrarse o iniciar seción" onPress={clickBoton}/>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  textOne: {
    marginStart: 20,
    marginEnd: 20,
    marginTop: 50,
    marginBottom: 50,
    textAlign: "center",
    fontSize: 15,
    color: "gray"
  },
    appButtonText: {
      fontSize: 15,
      paddingEnd: 10,
      marginEnd: 20,
      paddingStart: 10,
      paddingBottom: 2,
      color: "#5d4294",
      alignSelf: "center",
      textTransform: "none"
    },
    appButtonContainer: {
        elevation: 8,
        marginTop: 10,
        alignSelf: "center",
        borderWidth:4,
        borderColor: "#6ac3c8",
        backgroundColor: "white",
        borderRadius: 40,
        paddingVertical: 1,
        flexDirection: "row",
        marginBottom: 50
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
      },
});
