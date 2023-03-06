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
  Button,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useMemo } from "react";
import style from "./PaymentStyles";
import axios from "axios";

const PaymentPage = ({ navigation }) => {
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

  const totalPrice = groupedCartData.reduce(
    (acc, curr) => acc + parseInt(curr.price) * curr.quantity,
    0
  );

  const handlePostOrder = async () => {
    try {
      const userId = await AsyncStorage.getItem("@userId");
      const jsonValue = await AsyncStorage.getItem("cart");
      if (jsonValue !== null) {
        const data = JSON.parse(jsonValue);
        const quantity = data.reduce((acc, curr) => acc + curr.quantity, 0);
        const totalPrice = data.reduce(
          (acc, curr) => acc + parseInt(curr.price) * curr.quantity,
          0
        );
        const productId = data.map((item) => item.id).join(",");
        const response = await axios({
          url: "http://192.168.1.7:5000/api/v1/order",
          method: "POST",
          data: { userId, quantity, totalPrice, productId },
        });
        navigation.navigate("HistoryPage");
        console.log(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  // const handlePostOrder = async () => {
  //   try {
  //     const userId = await AsyncStorage.getItem("@userId");
  //     const jsonValue = await AsyncStorage.getItem("cart");
  //     if (jsonValue !== null) {
  //       const data = JSON.parse(jsonValue);
  //       const response = await axios.post(
  //         "http://192.168.1.7:5000/api/v1/order",
  //         {
  //           userId,
  //           products: data.map((item) => ({
  //             id: item.id,
  //             quantity: item.quantity,
  //             price: item.price,
  //           })),
  //         }
  //       );
  //       navigation.navigate("HistoryPage");
  //       console.log(response.data.data);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <ScrollView
      contentContainerStyle={style.scrollViewContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View
        style={{
          marginLeft: 35,
          borderBottomWidth: 2,
          borderBottomColor: "#9F9F9F",
          marginRight: 35,
        }}
      >
        <Text
          style={[
            style.welcome,
            {
              marginTop: 5,
              textAlign: "left",
              borderBottomWidth: 2,
              borderBottomColor: "#9F9F9F",
            },
          ]}
        >
          Payment Methods
        </Text>
        <Image
          source={require("../../assets/images/bri.png")}
          style={{
            width: "70%",
            height: 200,
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 55,
            marginRight: 35,
            // borderRadius: 100,
          }}
        />
        <Text
          style={[
            style.welcome,
            {
              marginTop: 5,
              textAlign: "center",
              marginLeft: 35,
              marginRight: 35,
              marginBottom: 20,
            },
          ]}
        >
          . . .
        </Text>
      </View>
      <View
        style={{
          marginLeft: 35,
          borderBottomWidth: 2,
          borderBottomColor: "#9F9F9F",
          marginRight: 35,
        }}
      >
        <FlatList
          data={groupedCartData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 17 }}>{item.title}</Text>
                  <Text style={{ fontSize: 15 }}>x {item.quantity}</Text>
                </View>
                <View style={{ marginLeft: 25, justifyContent: "center" }}>
                  <Text style={{ fontSize: 20 }}>IDR {item.price}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={[style.container, { marginTop: 35 }]}>
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
        <Text style={[style.totalPrice]}>Total : </Text>
        <Text style={[style.totalPrice]}>
          {" "}
          IDR {(totalPrice + 15000 + 5000).toLocaleString()}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={[
            style.button,
            { marginLeft: 35, marginRight: 35, marginBottom: 5 },
          ]}
          onPress={handlePostOrder}
        >
          <Text style={style.text}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentPage;
