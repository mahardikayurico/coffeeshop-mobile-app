import React, { useState } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import style from "./NavbarStyles";

const Navbar = ({ navigation }) => {
  const [iconColors, setIconColors] = useState({
    home: "#000",
    cart: "#000",
    profile: "#000",
  });

  const handleIconPress = (iconName) => {
    let newIconColors = { ...iconColors };

    // set semua iconColors ke warna default
    Object.keys(newIconColors).forEach((key) => {
      newIconColors[key] = "#000";
    });

    // set warna icon yang di klik
    newIconColors[iconName] = "#6A4029";
    setIconColors(newIconColors);

    switch (iconName) {
      case "home":
        navigation.navigate("HomePage");
        break;
      case "cart":
        navigation.navigate("CartPage");
        break;
      case "profile":
        navigation.navigate("ProfilePage");
        break;
      default:
        break;
    }
  };

  return (
    <View style={style.navbar}>
      <Icon
        name="home"
        size={24}
        color={iconColors.home}
        onPress={() => handleIconPress("home")}
      />
      <Icon
        name="shopping-cart"
        size={24}
        color={iconColors.cart}
        onPress={() => handleIconPress("cart")}
      />
      <Icon
        name="user"
        size={24}
        color={iconColors.profile}
        onPress={() => handleIconPress("profile")}
      />
    </View>
  );
};

export default Navbar;
