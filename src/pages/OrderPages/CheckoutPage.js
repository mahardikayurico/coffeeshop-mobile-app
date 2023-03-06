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
import style from "./CheckoutStyles";

const CheckoutPage = ({ navigation }) => {
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
  return (
    <ScrollView
      contentContainerStyle={style.scrollViewContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View>
        <Text style={[style.welcome, { marginTop: 5 }]}>
          Senayan, South Jakarta
        </Text>
        <View
          style={{
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Image
            source={require("../../assets/images/maps.png")}
            style={{
              width: "100%",
              resizeMode: "contain",
              padding: 10,
            }}
          ></Image>
        </View>
        <Text style={[style.subtitle, { marginTop: 10 }]}>Choose store</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 35,
          marginLeft: 20,
        }}
      >
        <TouchableOpacity style={style.button}>
          <Text style={style.text}> Dine in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}> Door Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}> Pick up</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Set Time"
        // onChangeText={handleUsernameChange}
        // value={username}
        style={style.form}
      />
      <View>
        <Text style={[style.welcome, { textAlign: "left", marginLeft: 35 }]}>
          Products
        </Text>
        <FlatList
          data={groupedCartData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: 20,
                  // marginRight: 25,
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 100,
                    marginLeft: 25,
                    borderRadius: 20,
                    marginRight: 25,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={{
                      uri: `http://192.168.1.7:5000/public/uploads/images/${item.image}`,
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                    }}
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 17 }}>{item.title}</Text>
                  <Text style={{ fontSize: 15 }}>x {item.quantity}</Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text style={[style.pricedetail]}>IDR {item.price}</Text>
                </View>
              </View>
            );
          }}
        />
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
        <Text style={[style.totalPrice]}>Total : </Text>
        <Text style={[style.totalPrice]}>
          IDR {(totalPrice + 15000 + 5000).toLocaleString()}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={[
            style.button,
            { marginLeft: 35, marginRight: 35, marginBottom: 5 },
          ]}
          onPress={() => {
            navigation.navigate("PaymentPage");
          }}
        >
          <Text style={style.text}>Next Step : Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CheckoutPage;
