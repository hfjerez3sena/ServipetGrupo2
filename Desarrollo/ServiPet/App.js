import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Menus de Peluqueria y Estetica</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ marginHorizontal: 20, width: 50, height: 50 }}
      source={require("./app/Componente/imagenes/Icono_Carrito.svg")}
    />
  );
}

function Menu() {
  return (
    <Image
      style={{ marginHorizontal: 20, width: 50, height: 50 }}
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
            headerRight: (props) => <LogoTitle {...props} />,
            headerLeft: (props) => <Menu {...props} />,
            headerTitle: "Peluqueria y Estética",
            headerStyle: {
              marginHorizontal: "60",
              backgroundColor: "red",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
