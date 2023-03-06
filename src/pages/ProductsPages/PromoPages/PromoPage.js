import { Text, View, Image, FlatList, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import homestyle from "../../HomePages/HomeStyles";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const PromoPage = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("http://192.168.1.7:5000/api/v1/products?category=add-on")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <View>
        <Text style={homestyle.textprimary}>Add-on</Text>
        <Text style={homestyle.textsecondary}>See more</Text>
      </View>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={homestyle.cardWrap}
              onPress={() => {
                navigation.navigate("ProductDetail", { products: item });
              }}
            >
              <Image
                // source={require("../../../assets/images/product1.png")}
                source={{
                  uri: `http://192.168.1.7/public/uploads/images/${item.images[0].filename}`,
                }}
                style={{
                  width: "70%",
                  height: "70%",
                  borderRadius: 30,
                  position: "absolute",
                  zIndex: 2,
                  resizeMode: "cover",
                }}
              />
              <View style={homestyle.card}>
                <Text style={homestyle.productTitle}>{item.title}</Text>
                <Text style={[homestyle.productPrice, { marginBottom: 25 }]}>
                  IDR {item.price}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default PromoPage;
