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

const style = StyleSheet.create({
  welcome: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 5,
    color: "#000000",
    marginLeft: 35,
    marginRight: 35,
  },
  subprice: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
    color: "#ADADAF",
    marginLeft: 35,
    marginRight: 35,
  },
  pricedetail: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 5,
    color: "#000000",
    marginLeft: 35,
    marginRight: 35,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFBA33",
    padding: 20,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 25,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "700",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
  },
  cardWrap: {
    width: Dimensions.get("window").width / 1.5,
    // width: '66.66%',
    // marginLeft: 15,
    padding: 15,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    height: 250,
    elevation: 7,
    width: "100%",
    borderRadius: 30,
    marginTop: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  productTitle: {
    fontWeight: "900",
    fontSize: 22.29,
    color: "#333",
  },
  productPrice: {
    color: "#6A4029",
    fontSize: 17,
    fontWeight: "700",
  },
});

const CartPage = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={style.scrollViewContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View>
        <View>
          <FlatList
            data={[1, 2]}
            renderItem={() => {
              return (
                <Pressable
                  style={style.cardWrap}
                  onPress={() => {
                    navigation.navigate("ProductDetail");
                    // navigation.push('DetailProduct')
                  }}
                >
                  <Image
                    source={require("../../assets/images/product3.png")}
                    style={{
                      width: "100%",
                      position: "absolute",
                      zIndex: 2,
                      resizeMode: "contain",
                    }}
                  />
                  <View style={style.card}>
                    <Text style={style.productTitle}>Creamy Ice Latte</Text>
                    <Text style={[style.productPrice, { marginBottom: 25 }]}>
                      IDR 15.000
                    </Text>
                  </View>
                </Pressable>
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
          <Text style={[style.pricedetail]}>IDR 140.000</Text>
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
          <Text style={[style.welcome]}>IDR 160.000</Text>
        </View>
        <View>
          <TouchableOpacity
            style={style.button}
            // onPress={() => {
            //   navigation.navigate("cart");
            // }}
          >
            <Text style={style.text}> ▷ CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartPage;
