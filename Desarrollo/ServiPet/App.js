import * as React from "react";
<<<<<<< HEAD
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Clinica_View from "./app/Componente/clinica_View";
import PeluqueriaEsteticaView from "./app/Componente/peluqueria_estetica";
import ConsultaVeterinariaView from "./app/Componente/consulta_veterinaria";
import ConsultaEspecialistaView from "./app/Componente/consulta_especialista";
import Guarderia from "./app/Componente/guarderia";

import Index from "./app/Componente/index"
import Urgencias from "./app/Componente/urgencias"
import AgendarView from "./app/Componente/agendar_generic_view"
import AgregarMascotaFormulario from "./app/Componente/agregar_mascota_formulario"

function GuarderiaComponent({ navigation }) {
  return (
    <Guarderia navigation={navigation}/>
  );
}
function ConsultaEspecialistaComponent({ navigation }) {
  return (
    <ConsultaEspecialistaView navigation={navigation}/>
  );
}
function PeluqueriaEsteticaComponent({ navigation }) {
  return (
    <PeluqueriaEsteticaView navigation={navigation}/>
  );
}
function ConsultaVeterinariaComponent({ navigation }) {
  return (
    <ConsultaVeterinariaView navigation={navigation}/>
  );
}

function IndexComponent({ navigation }) {
  return (
    <Index navigation={navigation}/>
  );
}
function ClinicaComponent({ navigation }) {
  return (
    <Clinica_View navigation={navigation}/>
  );
}
function UrgenciasComponent() {
  return (
    <Urgencias />
  );
}
function AgendarComponent({ navigation }) {
  return (
    <AgendarView navigation={navigation}/>
  );
}

function AgregarMascota({navigation}){
  return (
    <AgregarMascotaFormulario navigation={navigation}/>
  )
}

function LogoCarrito() {
  return (
    <Image
      style={{ tintColor: "#fff", marginHorizontal: 20, width: 50, height: 50 }}
      source={require("./app/Componente/imagenes/Icono_Carrito.svg")}
    />
  );
}

function Menu() {
  return (
    <Image
      style={{ tintColor: "#fff", marginHorizontal: 20, width: 50, height: 50 }}
      source={require("./app/Componente/imagenes/Icono_Menu.svg")}
    />
  );
}

const Stack = createStackNavigator();

function App() {

  const headerBar = {
    headerLeft: (props) => <Menu {...props} />,
    headerRight: (props) => <LogoCarrito {...props} />,
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#5d4294",
    },
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SERVIPET" component={IndexComponent} options={headerBar} />
        <Stack.Screen name="Urgencias" component={UrgenciasComponent} options={headerBar} />
        <Stack.Screen name="Peluquería y estética" component={PeluqueriaEsteticaComponent} options={headerBar} />
        <Stack.Screen name="Clinica veterinaria" component={ClinicaComponent} options={headerBar} />
        <Stack.Screen name="Guarderia" component={GuarderiaComponent} options={headerBar} />
        <Stack.Screen name="Consulta especialista" component={ConsultaEspecialistaComponent} options={headerBar} />
        <Stack.Screen name="Consulta Veterinaria" component={ConsultaVeterinariaComponent} options={headerBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

<<<<<<< HEAD
=======
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CorteUñas from "./app/Componente/corteUñas";
import CortePelo from "./app/Componente/cortePelo";
import Profilaxis from "./app/Componente/profilaxis";
import Baño from "./app/Componente/baño";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View>
      <CorteUñas />
      <CortePelo />
      <Profilaxis />
      <Baño />
    </View>
  );
}

function LogoCarrito() {
  return (
    <Image
      style={{ tintColor: "#fff", marginHorizontal: 20, width: 50, height: 50 }}
      source={require("./app/Componente/imagenes/Icono_Carrito.svg")}
    />
  );
}

function Menu() {
  return (
    <Image
      style={{ tintColor: "#fff", marginHorizontal: 20, width: 50, height: 50 }}
      source={require("./app/Componente/imagenes/Icono_Menu.svg")}
    />
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: (props) => <Menu {...props} />,
            headerRight: (props) => <LogoCarrito {...props} />,
            headerTitle: "Peluquería y Estética",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#5d4294",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

>>>>>>> 2f48889eeee7d02ded3a6165dff7a675890d0aef
export default App;
=======
export default App;
>>>>>>> dfb7a14b5fc75807ee549255303027ed114cb72b
