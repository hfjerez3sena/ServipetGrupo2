import * as React from "react";
import { Card } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function AgendarVacunacion(props) {
  const { navigation } = props;

  const AppButton = (
    { onPress, title } //Creación de un estilo de boton
  ) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const clickBoton = (name) => {
    console.log("Boton: " + name + " CLICK: Agendar Genérico");
  };

  return (
    <View>
      <Card
        style={{
          flexDirection: "row",
          margin: 20,
          alignSelf: "center",
          borderRadius: 20,
          justifyContent: "space-evenly",
        }}
        elevation={10}
      >
        <Card.Content>
          {
            <View>
              <Text style={styles.titleOneStyle}>Agendar Servicio</Text>
              <Text style={styles.titleThreeStyle}>
                Reemplazar este texto por el que corresponde. Se mostrará un
                texto rojo con información de pre-requisitos necesarios.
              </Text>
              <Card
                style={{
                  flexDirection: "row",
                  margin: 10,
                  alignSelf: "center",
                  borderRadius: 20,
                  backgroundColor: "#EFEFEF",
                  justifyContent: "space-evenly",
                }}
                elevation={10}
              >
                <Card.Content>
                  {
                    <View>
                      <Text style={styles.titleTwoStyle}>
                        Información de la mascota
                      </Text>
                      <View style={styles.doubleRow}>
                        <Image
                          source={require("../../assets/index/ConsultaVet/Icono_Vacunación.png")}
                          style={styles.imageOne}
                        />
                        <View style={styles.viewContainerStyle}>
                          <TextInput
                            style={styles.editTextStyle}
                            placeholder="Género"
                          />
                          <TextInput
                            style={styles.editTextStyle}
                            placeholder="Edad"
                          />
                        </View>
                      </View>
                      <TextInput
                        style={styles.editTextStyle}
                        placeholder="Nombre"
                      />
                      <TextInput
                        style={styles.editTextStyle}
                        placeholder="Raza"
                      />
                      <Text style={styles.textViewTwo}>Carácter</Text>
                      <TextInput
                        style={styles.editTextStyle}
                        placeholder="Rojo, Amarillo, Verde, etc."
                      />
                    </View>
                  }
                </Card.Content>
              </Card>

              <Text style={styles.textViewOne}>Fecha:</Text>
              <View style={styles.textInputImageStyle}>
                <Image
                  source={require("../../assets/index/ConsultaVet/Icono_Vacunación.png")}
                  style={styles.imageTwo}
                />
                <TextInput
                  style={styles.freeTextInputStyle}
                  placeholder="dd-mm-year"
                />
              </View>
              <Text style={styles.textViewOne}>Hora:</Text>
              <View style={styles.textInputImageStyle}>
                <Image
                  source={require("../../assets/index/ConsultaVet/Icono_Vacunación.png")}
                  style={styles.imageTwo}
                />
                <TextInput
                  style={styles.freeTextInputStyle}
                  placeholder="00: 00 am"
                />
              </View>
              <Text style={styles.textViewOne}>Observaciones:</Text>
              <Text style={styles.textViewThree}>
                Cuentanos si tu mascota tiene alguna alergia, enfermedad o
                requiere algun cuidado especial
              </Text>
              <View style={styles.textInputImageStyle}>
                <TextInput style={styles.freeTextInputBig} />
              </View>
              <AppButton title="Agendar cita" onPress={clickBoton} />
            </View>
          }
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  titleOneStyle: {
    color: "#5d4294",
    fontSize: 25,
    alignSelf: "center",
    marginBottom: 20,
  },
  titleTwoStyle: {
    color: "#5d4294",
    fontSize: 15,
    alignSelf: "center",
    marginBottom: 5,
  },
  titleThreeStyle: {
    color: "red",
    fontSize: 15,
    alignSelf: "center",
    marginBottom: 20,
    width: 300,
    textAlign: "center",
  },
  doubleRow: {
    color: "#5d4294",
    fontSize: 15,
    alignSelf: "center",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  editTextStyle: {
    borderRadius: 20,
    height: 30,
    marginBottom: 7,
    borderColor: "#D8D0CF",
    borderWidth: 1,
    borderRadius: 10,
    paddingStart: 10,
  },
  textViewTwo: {
    height: 30,
    paddingStart: 20,
    marginBottom: -10,
    color: "gray",
  },
  textViewOne: {
    height: 30,
    paddingStart: 20,
    marginBottom: -10,
    color: "#5d4294",
  },
  textViewThree: {
    paddingStart: 20,
    marginEnd: 10,
    color: "#5d4294",
  },
  viewContainerStyle: {
    justifyContent: "center",
    flex: 1,
  },
  textInputImageStyle: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D8D0CF",
    marginStart: 20,
    marginEnd: 20,
  },
  freeTextInputStyle: {
    borderRadius: 20,
    flex: 1,
    borderColor: "#D8D0CF",
    borderRadius: 10,
    paddingStart: 5,
  },
  freeTextInputBig: {
    borderRadius: 20,
    justifyContent: "flex-start",
    flex: 1,
    height: 100,
    borderColor: "#D8D0CF",
    borderRadius: 10,
    paddingStart: 5,
  },
  imageOne: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    width: 75,
    height: 75,
  },

  imageTwo: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    width: 20,
    height: 20,
    marginStart: 5,
  },
  appButtonContainer: {
    elevation: 8,
    width: 250,
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#5d4294",
    borderRadius: 20,
    paddingVertical: 1,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 20,
    paddingEnd: 10,
    paddingStart: 10,
    paddingBottom: 2,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "none",
  },
});
