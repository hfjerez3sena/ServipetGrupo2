import GenericItemView from "./generic_item";
import { Card } from "react-native-paper";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import BotonGenerico from "./genericButton"

export default function AgregarMascotaFormulario(props) {

  const { navigation } = props
  const [checked, setChecked] = React.useState('firs');
  const [toggleCheckBox, setToggleCheckBox] = useState(false)


  const AppButton = ({ onPress, title }) => (//Creación de un estilo de boton
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const clickBoton=(name)=>{
    console.log("Guardar mascota");
  };

  const clickRadioDog=(name)=>{
    console.log("Boton: "+name+" Can");
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
            <View style={styles.horizontalStyle}>
                <RadioButton status={ checked === 'firs' ? 'checked' : 'unchecked' } onPress={() => clickRadioDog("firs")}/>
                <Image style={{ width: 50, height: 50 }} source={require("./imagenes/Icono__Peluqueria.svg")}/>
                <Text>Woof</Text>
                <RadioButton status={ checked === 'firs' ? 'checked' : 'unchecked' } onPress={() => clickRadioDog("firs")}/>
                <Image style={{ width: 50, height: 50 }} source={require("./imagenes/Icono__Peluqueria.svg")}/>
                <Text>Meow</Text>
            </View>
            <Text style={styles.textViewOne}>Nombre:</Text>
            <TextInput style={styles.inputTextBorder} /> 
            <Text style={styles.textViewOne}>Raza:</Text>
            <TextInput style={styles.inputTextBorder} /> 
            <Text style={styles.textViewOne}>Género:</Text>
            <View style={styles.horizontalStyleOne}>
                <RadioButton status={ checked === 'firs' ? 'checked' : 'unchecked' } onPress={() => clickRadioDog("firs")}/>
                <Text style={{marginStart : 5}}>Hembra</Text>
                <RadioButton status={ checked === 'firs' ? 'checked' : 'unchecked' } onPress={() => clickRadioDog("firs")}/>
                <Text style={{marginStart : 5}}>Macho</Text>
            </View>
            <Text style={styles.textViewOne}>Edad:</Text>
            <View style={styles.verticalStyle}>
                <View style={styles.horizontalStyle}>
                    <RadioButton status={ checked === 'firs' ? 'checked' : 'unchecked' } onPress={() => clickRadioDog("firs")}/>
                    <Text style={{marginStart : 5}}>Cachorro</Text>
                    <Text style={styles.smallText}>(0 a 1 años)</Text>
                </View>
                <View style={styles.horizontalStyle}>
                    <RadioButton status={ checked === 'firs' ? 'checked' : 'unchecked' } onPress={() => clickRadioDog("firs")}/>
                    <Text style={{marginStart : 5}}>Adulto</Text>
                    <Text style={styles.smallText}>(Hasta 7 años)</Text>
                </View>
                <View style={styles.horizontalStyle}>
                    <RadioButton status={ checked === 'firs' ? 'checked' : 'unchecked' } onPress={() => clickRadioDog("firs")}/>
                    <Text style={{marginStart : 5}}>Edad madura</Text>
                    <Text style={styles.smallText}>(7 años en adelante)</Text>
                </View>
            </View>
            <Text style={styles.textViewOne}>Caracter:</Text>
            <View style={styles.horizontalStyleOne}>
                <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                <Text>No se lleva bien con humanos ni con otros animales</Text>
            </View>
            <View style={styles.horizontalStyleOne}>
                <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                <Text>No se lleva bien con otros animales</Text>
            </View>
            
            <View style={styles.horizontalStyleOne}>
                <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                <Text>Es nervioso, puede actuar de manera impredecible</Text>
            </View>
            
            <View style={styles.horizontalStyleOne}>
                <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                <Text>Amistoso, convive bien con personas y otros animales</Text>
            </View>
            
            <View style={styles.horizontalStyleOne}>
                <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                <Text>En entrenamiento, puede actuar de manera impredecible</Text>
            </View>

            <View style={styles.horizontalStyleOne}>
                <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                <Text>Discapacitado, puede ser sordo o ciego</Text>
            </View>

            <View style={styles.horizontalStyleOne}>
                <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                <Text>Está en tratamiento médico, preguntame</Text>
            </View>

            <BotonGenerico title="Guardar" onClick={clickBoton}/>

        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    titleOneStyle: {
        color : "#5d4294",
        fontSize : 25,
        alignSelf: "center",
        marginBottom: 20,
    },
    horizontalStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    horizontalStyleOne: {
        flexDirection: "row",
        alignItems: "center",
    },
    inputTextBorder: {
      borderRadius: 10,
      borderWidth: 1,
      paddingStart: 5,
      borderColor: '#D8D0CF', 
    },
    verticalStyle: {
        marginStart: 10,
        alignItems: "flex-start",
        justifyContent: "space-around"
    },
    textViewOne:{
        marginTop: 10,
        marginBottom: 5,
        color : "#5d4294",
        marginStart: 7,
    },
    smallText: {
        color: "blue",
        fontSize: 7,
        marginStart: 5,
    }
});
