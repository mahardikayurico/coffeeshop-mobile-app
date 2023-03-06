import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "./DetailStyles";

const ProductDetail = ({ navigation }) => {
  const route = useRoute();
  const { products } = route.params;
  const handleAddToCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      let cart = [];
      if (cartData !== null) {
        cart = JSON.parse(cartData);
      }
      const newCartItem = {
        id: products.id,
        title: products.title,
        price: products.price,
        image: products.images[0].filename,
        quantity: 1,
      };
      cart.push(newCartItem);
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      console.log("Item has been added to the cart");
      console.log(cart);
      navigation.navigate("CartPage");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: `http://192.168.1.7:5000/public/uploads/images/${products.images[0].filename}`,
          }}
          style={{
            width: "50%",
            height: 200,
            resizeMode: "cover",
            marginTop: 35,
            borderRadius: 100,
          }}
        ></Image>
      </View>
      <View>
        <Text style={[style.welcome, { textAlign: "center", fontSize: 40 }]}>
          {products.title}
        </Text>
        <Text
          style={[
            style.welcome,
            { textAlign: "center", color: "#6A4029", fontSize: 30 },
          ]}
        >
          IDR {products.price}
        </Text>
      </View>
      <View>
        <Text style={[style.welcome, { marginTop: 15 }]}>Delivery info</Text>
        <Text style={style.subtitle}>{products.delivery}</Text>
      </View>
      <View>
        <Text style={style.welcome}>Description</Text>
        <Text style={style.subtitle}>{products.description}</Text>
      </View>
      <View>
        <TouchableOpacity style={style.button} onPress={handleAddToCart}>
          <Text style={style.text}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
