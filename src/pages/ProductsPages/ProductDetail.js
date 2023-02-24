import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const style = StyleSheet.create({
  welcome: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 5,
    color: "#000000",
    marginLeft: 35,
    marginRight: 35,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "300",
    marginTop: 5,
    color: "#000000",
    marginLeft: 35,
    marginRight: 35,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6A4029",
    padding: 20,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 25,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

const ProductDetail = ({ navigation }) => {
  return (
    <View>
      <View>
        <Image
          source={require("../../assets/images/product4.png")}
          style={{ width: "100%", resizeMode: "contain", marginTop: 35 }}
        ></Image>
      </View>
      <View>
        <Text style={[style.welcome, { textAlign: "center", fontSize: 40 }]}>
          Cold Brew{" "}
        </Text>
        <Text
          style={[
            style.welcome,
            { textAlign: "center", color: "#6A4029", fontSize: 30 },
          ]}
        >
          IDR 30.000
        </Text>
      </View>
      <View>
        <Text style={[style.welcome, { marginTop: 15 }]}>Delivery info</Text>
        <Text style={style.subtitle}>
          Delivered only on monday until friday from 1 pm to 7 pm
        </Text>
      </View>
      <View>
        <Text style={style.welcome}>Description</Text>
        <Text style={style.subtitle}>
          Cold brewing is a method of brewing that combines ground coffee and
          cool water and uses time instead of heat to extract the flavor. It is
          brewed in small batches and steeped for as long as 48 hours.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            navigation.navigate("CartPage");
          }}
        >
          <Text style={style.text}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
