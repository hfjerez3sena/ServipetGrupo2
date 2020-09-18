import * as React from "react";
import { Image, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GeneriView from "./app/Componente/generic_view";
import Clinica_View from "./app/Componente/clinica_View";
import PeluqueriaEsteticaView from "./app/Componente/peluqueria_estetica";
import ConsultaVeterinariaView from "./app/Componente/consulta_veterinaria";
import ConsultaEspecialistaView from "./app/Componente/consulta_especialista";
import Guarderia from "./app/Componente/guarderia";
import Login from "./app/Componente/login";
import Index from "./app/Componente/index";
import Urgencias from "./app/Componente/urgencias";
import AgendarView from "./app/Componente/agendar_generic_view";
import AgregarMascotaFormulario from "./app/Componente/agregar_mascota_formulario";
import Agendar_baño from "./app/Componente/agendar_baño";
import Agendar_cirujano from "./app/Componente/agendar_cirujano";
import Agendar_control from "./app/Componente/agendar_control";
import Agendar_corte_pelo from "./app/Componente/agendar_corte_pelo";
import Agendar_corte_uñas from "./app/Componente/agendar_corte_uñas";
import Agendar_crecimiento_desarrollo from "./app/Componente/agendar_crecimiento_desarrollo";
import Agendar_desparacitacion from "./app/Componente/agendar_desparacitacion";
import Agendar_etologo from "./app/Componente/agendar_etologo";
import Agendar_nutricionista from "./app/Componente/agendar_nutricionista";
import Agendar_profilaxis from "./app/Componente/agendar_profilaxis";
import Agendar_vacunacion from "./app/Componente/agendar_vacunacion";
import Agendar_veterinario_casa from "./app/Componente/agendar_veterinario_casa";

function LoginComponent({ navigation }) {
  return <Login navigation={navigation} />;
}

function GuarderiaComponent({ navigation }) {
  return <Guarderia navigation={navigation} />;
}
function ConsultaEspecialistaComponent({ navigation }) {
  return <ConsultaEspecialistaView navigation={navigation} />;
}
function PeluqueriaEsteticaComponent({ navigation }) {
  return <PeluqueriaEsteticaView navigation={navigation} />;
}
function ConsultaVeterinariaComponent({ navigation }) {
  return <ConsultaVeterinariaView navigation={navigation} />;
}
function IndexComponent({ navigation }) {
  return <Index navigation={navigation} />;
}
function ClinicaComponent({ navigation }) {
  return <Clinica_View navigation={navigation} />;
}
function UrgenciasComponent() {
  return <Urgencias />;
}
function AgendarComponent({ navigation }) {
  return <AgendarView navigation={navigation} />;
}
function AgregarMascota({ navigation }) {
  return <AgregarMascotaFormulario navigation={navigation} />;
}
function LogoCarrito() {
  return (
    <Image
      style={{ tintColor: "#fff", marginHorizontal: 20, width: 50, height: 50 }}
      source={require("./assets/Menu/Icono_Carrito.png")}
    />
  );
}
function Menu() {
  return (
    <Image
      style={{ tintColor: "#fff", marginHorizontal: 20, width: 50, height: 50 }}
      source={require("./assets/Menu/Icono_Menu.png")}
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
  };

  const headerBarUrgencias = {
    headerLeft: (props) => <Menu {...props} />,
    headerRight: (props) => <LogoCarrito {...props} />,
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "red",
    },
  };
  const headerBarIndex = {
    headerLeft: (props) => <Menu {...props} />,
    headerRight: (props) => <LogoCarrito {...props} />,
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#6ac3c8",
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="SERVIPET"
          component={IndexComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Urgencias"
          component={UrgenciasComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Peluquería y estética"
          component={PeluqueriaEsteticaComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Clinica veterinaria"
          component={ClinicaComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Guarderia"
          component={GuarderiaComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Consulta especialista"
          component={ConsultaEspecialistaComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Consulta Veterinaria"
          component={ConsultaVeterinariaComponent}
          options={headerBar}
        />

        <Stack.Screen
          name="Corte de uñas"
          component={Agendar_corte_uñas}
          options={headerBar}
        />
        <Stack.Screen
          name="Corte de pelo"
          component={Agendar_corte_pelo}
          options={headerBar}
        />
        <Stack.Screen
          name="Profilaxis"
          component={Agendar_profilaxis}
          options={headerBar}
        />
        <Stack.Screen
          name="Baño"
          component={Agendar_baño}
          options={headerBar}
        />

        <Stack.Screen
          name="Control"
          component={Agendar_control}
          options={headerBar}
        />
        <Stack.Screen
          name="Crecimiento y desarrollo"
          component={Agendar_crecimiento_desarrollo}
          options={headerBar}
        />
        <Stack.Screen
          name="Vacunación"
          component={Agendar_vacunacion}
          options={headerBar}
        />
        <Stack.Screen
          name="Desparacitación"
          component={Agendar_desparacitacion}
          options={headerBar}
        />
        <Stack.Screen
          name="Veterinario en casa"
          component={Agendar_veterinario_casa}
          options={headerBar}
        />

        <Stack.Screen
          name="Etólogo"
          component={Agendar_etologo}
          options={headerBar}
        />
        <Stack.Screen
          name="Nutricionista"
          component={Agendar_nutricionista}
          options={headerBar}
        />
        <Stack.Screen
          name="Cirujano"
          component={Agendar_cirujano}
          options={headerBar}
        />

        <Stack.Screen
          name="Laboratorio"
          component={AgendarComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Ecografía"
          component={AgendarComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Rayos X"
          component={AgendarComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Cirugías"
          component={AgendarComponent}
          options={headerBar}
        />

        <Stack.Screen
          name="Paseo"
          component={AgendarComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Hotel"
          component={AgendarComponent}
          options={headerBar}
        />
        <Stack.Screen
          name="Guardería"
          component={AgendarComponent}
          options={headerBar}
        />

        <Stack.Screen
          name="Agregar una mascota"
          component={AgregarMascota}
          options={headerBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
