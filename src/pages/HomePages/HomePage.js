import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import homestyle from "./HomeStyles";
import axios from "axios";
import PromoPage from "../ProductsPages/PromoPages/PromoPage";
import FavoritePage from "../ProductsPages/FavoritePages/FavoritePage";
import CoffeePage from "../ProductsPages/CoffeePages/CoffeePage";
import NonCoffeePage from "../ProductsPages/NonCoffeePages/NonCoffeePage";
import FoodPage from "../ProductsPages/FoodPages/FoodPage";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async (search) => {
    try {
      const response = await axios.get(
        `http://192.168.1.7:5000/api/v1/products?search=${search}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };

  const handleSearch = async (text) => {
    setSearchTerm(text);
    try {
      const response = await getProducts(text);
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <ScrollView
        contentContainerStyle={homestyle.scrollViewContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <View>
            <Text style={homestyle.welcome}>
              A good coffee is {`\n`} a good day
            </Text>
          </View>
          <View>
            <TextInput
              style={homestyle.input}
              placeholder="Search..."
              value={searchTerm}
              onChangeText={handleSearch}
            />
          </View>
          <FavoritePage products={products} />
          <CoffeePage products={products} />
          <NonCoffeePage products={products} />
          <FoodPage products={products} />
          <PromoPage products={products} />
        </View>
      </ScrollView>
      <View>
        <Navbar navigation={navigation} />
      </View>
    </>
  );
};

export default HomePage;
