import * as React from "react";
import { Image, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GenericView from "./app/Componente/generic_view"
import IndexView from "./app/Componente/index"
import Urgencias from "./app/Componente/urgencias"
import SplashScreen from "./app/Componente/splash_screen"

function HomeComponent() {
  return (
      //<IndexView/>
      //<GenericView/>
      //<Urgencias/>
      <SplashScreen/>
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

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{
            headerLeft: (props) => <Menu {...props} />,
            headerRight: (props) => <LogoCarrito {...props} />,
            headerTitle: "Clínica veterinaria",
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