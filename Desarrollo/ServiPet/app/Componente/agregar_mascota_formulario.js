import { Card, RadioButton } from "react-native-paper";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { CheckBox } from 'react-native-elements'
import React, { useState } from 'react';
import BotonGenerico from "./genericButton"
import { ScrollView } from "react-native-gesture-handler";

export default function AgregarMascotaFormulario(props) {
  const { navigation } = props;
  const [checkedTipoMascota, cambiarTipoMascota] = React.useState("perro");
  const [checkedGenero, cambiarGenero] = React.useState("hembra");
  const [checkedEdad, cambiarEdad] = React.useState("cachorro");

  let [checkOne, setStateCheckOne] = useState(false);
  let [checkTwo, setStateCheckTwo] = useState(false);
  let [checkThree, setStateCheckThree] = useState(false);
  let [checkFour, setStateCheckFour] = useState(false);
  let [checkFive, setStateCheckFive] = useState(false);
  let [checkSix, setStateCheckSix] = useState(false);
  let [checkSeven, setStateCheckSeven] = useState(false);

  const changeCheckState = (index) => {
    switch (index) {
      case 1:
        setStateCheckOne(!checkOne);
        break;
      case 2:
        setStateCheckTwo(!checkTwo);
        break;
      case 3:
        setStateCheckThree(!checkThree);
        break;
      case 4:
        setStateCheckFour(!checkFour);
        break;
      case 5:
        setStateCheckFive(!checkFive);
        break;
      case 6:
        setStateCheckSix(!checkSix);
        break;
      case 7:
        setStateCheckSeven(!checkSeven);
        break;
    }
  };

  let [RadioOne, setStateRadioOne] = useState(true);
  let [RadioTwo, setStateRadioTwo] = useState(false);
  let [RadioThree, setStateRadioThree] = useState(false);
  let [RadioFour, setStateRadioFour] = useState(false);
  let [RadioFive, setStateRadioFive] = useState(false);
  let [RadioSix, setStateRadioSix] = useState(false);
  let [RadioSeven, setStateRadioSeven] = useState(false);

  const changeRadioState = (index) => {
    switch (index) {
      case 1:
        setStateRadioOne(!RadioOne);
        break;
      case 2:
        setStateRadioTwo(!RadioTwo);
        break;
      case 3:
        setStateRadioThree(!RadioThree);
        break;
      case 4:
        setStateRadioFour(!RadioFour);
        break;
      case 5:
        setStateRadioFive(!RadioFive);
        break;
      case 6:
        setStateRadioSix(!RadioSix);
        break;
      case 7:
        setStateRadioSeven(!RadioSeven);
        break;
    }
  };

  const AppButton = (
    { onPress, title } //Creación de un estilo de boton
  ) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const clickBoton = (name) => {
    console.log("Guardar mascota");
  };

  const clickRadioDog = (name) => {
    console.log("Boton: " + name + " Can");
  };

  return (
    <View>
      <ScrollView>
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
          <View style={styles.horizontalStyle}>
            <RadioButton
              value="perro"
              status={checkedTipoMascota === "perro" ? "checked" : "unchecked"}
              onPress={() => cambiarTipoMascota("perro")}
            />
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/Icono_Peluqueria.png")}
            />
            <Text>Woof</Text>
            <RadioButton
              value="gato"
              status={checkedTipoMascota === "gato" ? "checked" : "unchecked"}
              onPress={() => cambiarTipoMascota("gato")}
            />
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/Icono_Peluqueria.png")}
            />
            <Text>Meow</Text>
          </View>
          <Text style={styles.textViewOne}>Nombre:</Text>
          <TextInput style={styles.inputTextBorder} />
          <Text style={styles.textViewOne}>Raza:</Text>
          <TextInput style={styles.inputTextBorder} />
          <Text style={styles.textViewOne}>Género:</Text>

          <View style={styles.horizontalStyleOne}>
            <RadioButton
              value="hembra"
              status={checkedGenero === "hembra" ? "checked" : "unchecked"}
              onPress={() => cambiarGenero("hembra")}
            />
            <Text style={{ marginStart: 5 }}>Hembra</Text>
            <RadioButton
              value="macho"
              status={checkedGenero === "macho" ? "checked" : "unchecked"}
              onPress={() => cambiarGenero("macho")}
            />
            <Text style={{ marginStart: 5 }}>Macho</Text>
          </View>

          <Text style={styles.textViewOne}>Edad:</Text>
          <View style={styles.verticalStyle}>
            <View style={styles.horizontalStyle}>
              <RadioButton
                value="cachorro"
                status={checkedEdad === "cachorro" ? "checked" : "unchecked"}
                onPress={() => cambiarEdad("cachorro")}
              />
              <Text style={{ marginStart: 5 }}>Cachorro</Text>
              <Text style={styles.smallText}>(0 a 1 años)</Text>
            </View>

            <View style={styles.horizontalStyle}>
              <RadioButton
                value="adulto"
                status={checkedEdad === "adulto" ? "checked" : "unchecked"}
                onPress={() => cambiarEdad("adulto")}
              />
              <Text style={{ marginStart: 5 }}>Adulto</Text>
              <Text style={styles.smallText}>(Hasta 7 años)</Text>
            </View>

            <View style={styles.horizontalStyle}>
              <RadioButton
                value="edad_madura"
                status={checkedEdad === "edad_madura" ? "checked" : "unchecked"}
                onPress={() => cambiarEdad("edad_madura")}
              />
              <Text style={{ marginStart: 5 }}>Edad madura</Text>
              <Text style={styles.smallText}>(7 años en adelante)</Text>
            </View>
          </View>
          <Text style={styles.textViewOne}>Caracter:</Text>
          <View style={styles.horizontalStyleOne}>
            <CheckBox checked={checkOne} onPress={() => changeCheckState(1)} />
            <Text>No se lleva bien con humanos ni con otros animales</Text>
          </View>
          <View style={styles.horizontalStyleOne}>
            <CheckBox checked={checkTwo} onPress={() => changeCheckState(2)} />
            <Text>No se lleva bien con otros animales</Text>
          </View>

          <View style={styles.horizontalStyleOne}>
            <CheckBox
              checked={checkThree}
              onPress={() => changeCheckState(3)}
            />
            <Text>Es nervioso, puede actuar de manera impredecible</Text>
          </View>

          <View style={styles.horizontalStyleOne}>
            <CheckBox checked={checkFour} onPress={() => changeCheckState(4)} />
            <Text>Amistoso, convive bien con personas y otros animales</Text>
          </View>

          <View style={styles.horizontalStyleOne}>
            <CheckBox checked={checkFive} onPress={() => changeCheckState(5)} />
            <Text>En entrenamiento, puede actuar de manera impredecible</Text>
          </View>

          <View style={styles.horizontalStyleOne}>
            <CheckBox checked={checkSix} onPress={() => changeCheckState(6)} />
            <Text>Discapacitado, puede ser sordo o ciego</Text>
          </View>

          <View style={styles.horizontalStyleOne}>
            <CheckBox
              checked={checkSeven}
              onPress={() => changeCheckState(7)}
            />
            <Text>Está en tratamiento médico, preguntame</Text>
          </View>

          <BotonGenerico title="Guardar" onClick={clickBoton} />
        </Card.Content>
      </Card>
      </ScrollView>
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
  horizontalStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  horizontalStyleOne: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputTextBorder: {
    borderRadius: 10,
    borderWidth: 1,
    paddingStart: 5,
    borderColor: "#D8D0CF",
  },
  verticalStyle: {
    marginStart: 10,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  textViewOne: {
    marginTop: 10,
    marginBottom: 5,
    color: "#5d4294",
    marginStart: 7,
  },
  smallText: {
    color: "blue",
    fontSize: 7,
    marginStart: 5,
  },
});
