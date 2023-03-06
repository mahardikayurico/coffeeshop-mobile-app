import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import style from "./CartStyles";
import Navbar from "../../components/Navbar/Navbar";

const CartPage = ({ navigation }) => {
  const [groupedCartData, setGroupedCartData] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("cart");
        if (jsonValue !== null) {
          const data = JSON.parse(jsonValue);
          const groupedData = data.reduce((acc, curr) => {
            const index = acc.findIndex((item) => item.id === curr.id);
            if (index === -1) {
              acc.push({
                id: curr.id,
                title: curr.title,
                price: curr.price,
                image: curr.image,
                quantity: curr.quantity,
              });
            } else {
              acc[index].quantity += curr.quantity;
            }
            return acc;
          }, []);
          setGroupedCartData(groupedData);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getCartData();
  }, []);

  const handleIncrementQuantity = (index) => {
    const newData = [...groupedCartData];
    const currentItem = newData[index];
    currentItem.quantity += 1;
    newData.splice(index, 1, currentItem);
    setGroupedCartData(newData);
    AsyncStorage.setItem("cart", JSON.stringify(newData));
  };
  const handleDecrementQuantity = (index) => {
    const newData = [...groupedCartData];
    const currentItem = newData[index];
    if (currentItem.quantity === 1) {
      newData.splice(index, 1);
    } else {
      currentItem.quantity -= 1;
      newData.splice(index, 1, currentItem);
    }
    setGroupedCartData(newData);
    AsyncStorage.setItem("cart", JSON.stringify(newData));
  };

  const totalPrice = groupedCartData.reduce(
    (acc, curr) => acc + parseInt(curr.price) * curr.quantity,
    0
  );

  return (
    <>
      <ScrollView
        contentContainerStyle={style.scrollViewContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <View>
            <FlatList
              data={groupedCartData}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View style={style.cardWrap}>
                      <Image
                        source={{
                          uri: `http://192.168.1.7:5000/public/uploads/images/${item.image}`,
                        }}
                        style={{
                          width: "70%",
                          height: "70%",
                          borderRadius: 100,
                          position: "absolute",
                          zIndex: 2,
                          resizeMode: "cover",
                        }}
                      />
                      <View style={style.card}>
                        <Text
                          style={[style.productPrice, { marginBottom: 25 }]}
                        >
                          IDR {item.price}
                        </Text>
                      </View>
                    </View>

                    <View style={{ marginTop: 30, flex: 1 }}>
                      <View>
                        <Text style={style.productTitle}>{item.title}</Text>
                      </View>
                      <View>
                        <View style={style.quantityParent}>
                          <TouchableOpacity
                            style={{ flexGrow: 1 }}
                            onPress={() => handleIncrementQuantity(index)}
                          >
                            <Text style={[style.iconText, style.iconQuantity]}>
                              +
                            </Text>
                          </TouchableOpacity>
                          <View style={{ flexGrow: 1 }}>
                            <Text style={style.productTitle}>
                              {item.quantity}
                            </Text>
                          </View>
                          <TouchableOpacity
                            style={{ flexGrow: 1 }}
                            onPress={() => handleDecrementQuantity(index)}
                          >
                            <Text style={[style.iconText, style.iconQuantity]}>
                              -
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={style.button}
              // onPress={() => {
              //   navigation.navigate("cart");
              // }}
            >
              <Text style={style.text}> Apply Delivery Coupons ⇛</Text>
            </TouchableOpacity>
          </View>
          <View style={[style.container, { marginTop: 15 }]}>
            <Text style={[style.subprice]}>Item Total </Text>
            <Text style={[style.pricedetail]}>
              IDR {totalPrice.toLocaleString()}
            </Text>
          </View>
          <View style={style.container}>
            <Text style={[style.subprice]}>Delivery Charge</Text>
            <Text style={[style.pricedetail]}>IDR 15.000</Text>
          </View>
          <View style={style.container}>
            <Text style={[style.subprice]}>Tax </Text>
            <Text style={[style.pricedetail]}>IDR 5.000</Text>
          </View>
          <View style={[style.container, { marginTop: 15 }]}>
            <Text style={[style.welcome]}>Total : </Text>
            <Text style={[style.welcome]}>
              IDR {(totalPrice + 15000 + 5000).toLocaleString()}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={style.button}
              onPress={() => {
                navigation.navigate("CheckoutPage");
              }}
            >
              <Text style={style.text}> ▷ CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View>
        <Navbar navigation={navigation} />
      </View>
    </>
  );
};

export default CartPage;
