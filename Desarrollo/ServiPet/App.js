import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CorteUñas from "./app/Componente/corteUñas";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Menu de Peluqueria y Estetica</Text>
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
            headerTitleAlign: "center",
            headerRight: (props) => <LogoCarrito {...props} />,
            headerTitle: "Peluquería y Estética",
            headerStyle: {
              backgroundColor: "#5d4294",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
