import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Clinica_View from "./app/Componente/clinica_View";
import GenericView from "./app/Componente/generic_view"
import Index from "./app/Componente/index"
import Urgencias from "./app/Componente/urgencias"
import AgendarView from "./app/Componente/agendar_generic_view"
import AgregarMascotaFormulario from "./app/Componente/agregar_mascota_formulario"

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
    headerTitle: "Clinica Veterinaria",
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#5d4294",
    },
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={IndexComponent} options={headerBar} />
        <Stack.Screen name="URGENCIAS" component={UrgenciasComponent} options={headerBar} />
        <Stack.Screen name="CLINICA VETERINARIA" component={ClinicaComponent} options={headerBar} />
        <Stack.Screen name="nombreGenerico" component={ClinicaComponent} options={headerBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;