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
import style from "./HistoryStyles";

const HistoryPage = ({ navigation }) => {
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
      <View
        style={{
          marginLeft: 35,
          marginRight: 35,
        }}
      >
        <Text
          style={[
            style.welcome,
            {
              marginTop: 5,
              textAlign: "left",
            },
          ]}
        >
          Order History
        </Text>
      </View>
      <FlatList
        data={groupedCartData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: 25,

                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{
                    uri: `http://192.168.1.7:5000/public/uploads/images/${item.image}`,
                  }}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 17 }}>{item.title}</Text>
                <Text style={{ fontSize: 15 }}>IDR {item.price}</Text>
                <Text style={{ fontSize: 15 }}>x {item.quantity}</Text>
              </View>
              <View style={{ marginLeft: 25, justifyContent: "center" }}>
                <Text style={{ fontSize: 20 }}>Delete</Text>
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default HistoryPage;
