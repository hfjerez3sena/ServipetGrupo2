import * as React from "react";
import { StyleSheet, Text, View, Image, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Laboratorio from "./app/Componente/laboratorio";
import Ecografia from "./app/Componente/ecografia"
import RayosX from "./app/Componente/rayos_x"
//import Cirugia from "./app/Componente/cirugia"
import { Card, Avatar, Title, Paragraph} from 'react-native-paper';
import LineaDivisoria from "./app/Componente/linea_divisora"
import HomeView from "./app/Componente/generic_view"

function HomeComponent() {
  return (
    <HomeView/>
    //03103165830
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

const Stack = createStackNavigator();

function App() {

  var cars = [
    {nombre: "Elsa Bastilla", edad: "30", telefono: "3123556234"},
    {nombre: "Brayan Calderon", edad: "25", telefono: "3024611064"},
    {nombre: "Andres Bastilla", edad: "20", telefono: "3103191276"},
  ]

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{
            headerLeft: (props) => <Menu {...props} />,
            headerRight: (props) => <LogoCarrito {...props} />,
            headerTitle: "Cínica veterinaria",
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

export default App;