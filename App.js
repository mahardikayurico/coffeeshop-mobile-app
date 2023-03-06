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
import CartPage from "./src/pages/OrderPages/CartPage";
import CheckoutPage from "./src/pages/OrderPages/CheckoutPage";
import PaymentPage from "./src/pages/PaymentPages/PaymentPage";
import HistoryPage from "./src/pages/HistoryPages/HistoryPage";
import ProfilePage from "./src/pages/ProfilePages/ProfilePage";
import EditProfile from "./src/pages/ProfilePages/EditProfilePage";
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
          // options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Product Detail" }}
        />
        <Stack.Screen
          name="CartPage"
          component={CartPage}
          options={{ title: "My Cart" }}
        />
        <Stack.Screen
          name="CheckoutPage"
          component={CheckoutPage}
          options={{ title: "Checkout" }}
        />
        <Stack.Screen
          name="PaymentPage"
          component={PaymentPage}
          options={{ title: "Payment" }}
        />
        <Stack.Screen
          name="HistoryPage"
          component={HistoryPage}
          options={{ title: "History" }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ title: "My Profile" }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: "My Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
