import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GeneriView from "./app/Componente/generic_view";
import Clinica_View from "./app/Componente/clinica_View";
import GenericView from "./app/Componente/generic_view";
import Index from "./app/Componente/index";
import Urgencias from "./app/Componente/urgencias";
import AgendarView from "./app/Componente/agendar_generic_view";
import Peluqueria_View from "./app/Componente/peluqueria_View";

function IndexComponent({ navigation }) {
  return <Index navigation={navigation} />;
}
function ClinicaComponent({ navigation }) {
  return <Clinica_View navigation={navigation} />;
}
function PeluqueriaComponent({ navigation }) {
  return <Peluqueria_View navigation={navigation} />;
}
function UrgenciasComponent() {
  return <Urgencias />;
}
function AgendarComponent({ navigation }) {
  return <AgendarView navigation={navigation} />;
}

function LogoCarrito() {
  return (
    <Image
      style={{ tintColor: "#fff", marginHorizontal: 10, width: 50, height: 50 }}
      source={require("./app/Componente/imagenes/Icono_Carrito.svg")}
    />
  );
}

function Menu() {
  return (
    <Image
      style={{ tintColor: "#fff", marginHorizontal: 10, width: 50, height: 50 }}
      source={require("./app/Componente/imagenes/Icono_Menu.svg")}
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={IndexComponent}
          options={{
            headerLeft: () => <Menu />,
            headerRight: () => <LogoCarrito />,
            headerTitle: "Clinica",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#5d4294",
            },
          }}
        />
        <Stack.Screen name="URGENCIAS" component={UrgenciasComponent} />
        <Stack.Screen name="CLINICA VETERINARIA" component={ClinicaComponent} />
        <Stack.Screen name="PELUQUERIA" component={PeluqueriaComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
