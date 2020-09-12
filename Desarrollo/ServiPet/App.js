import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GeneriView from "./app/Componente/generic_view";
import Clinica_View from "./app/Componente/clinica_View";
import Consulta_View from "./app/Componente/consulta_View";
import Consulta_Esp_View from "./app/Componente/consulta_Esp_View";
import Guarderia_View from "./app/Componente/guarderia_View";
import { preventAutoHide } from "expo/build/launch/SplashScreen";

function HomeComponent() {
  return <Guarderia_View />;
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
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          name="Home"
          component={HomeComponent}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
