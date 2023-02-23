import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import LandingPage from "./src/pages/LandingPages/LandingPage";
import WelcomePage from "./src/pages/LandingPages/WelcomePage";
import SignUpPage from "./src/pages/Authentifikasi/SignUpPages";
import LoginPage from "./src/pages/Authentifikasi/LoginPages";
import ForgotPassword from "./src/pages/Authentifikasi/ForgotPassword";
import HomePage from "./src/pages/HomePages/HomePage";
import ProductDetail from "./src/pages/ProductsPages/ProductDetail";
//end pages

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName='DetailProduct'
      >
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{ title: "CoffeeShop Gatotkaca" }}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{ title: "Sign Up " }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "Forgot Password" }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Product Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
