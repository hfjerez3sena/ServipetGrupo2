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
import LogoCar from "./app/Componente/imagenes/Icono_Carrito.svg";
import Menu from "./app/Componente/imagenes/Icono_Menu.svg";
import { SafeAreaProvider } from "react-native-safe-area-context";

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

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={IndexComponent}
            options={{
              headerLeft: () => <Menu color="white" width={120} height={40} />,
              headerRight: () => <LogoCar width={120} height={40}></LogoCar>,
              headerTitle: "SERVIPET",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#6ac3c8",
              },
              headerTitleStyle: { color: "white" },
            }}
          />
          <Stack.Screen name="URGENCIAS" component={UrgenciasComponent} />
          <Stack.Screen
            name="CLINICA VETERINARIA"
            component={ClinicaComponent}
          />
          <Stack.Screen name="PELUQUERIA" component={PeluqueriaComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
