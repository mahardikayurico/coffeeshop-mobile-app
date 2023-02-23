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
import React, { useState } from "react";
// import commonStyle from "../../styles/commonStyle";
import homestyle from "./HomeStyles";

const style = StyleSheet.create({
  welcome: {
    fontSize: 37,
    fontWeight: "700",
    marginTop: 5,
    color: "#000000",
    marginLeft: 35,
    marginRight: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6A4029",
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 5,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  textprimary: {
    fontSize: 16,
    color: "#6A4029",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
    fontWeight: "700",
    borderBottomColor: "#6A4029",
    borderBottomWidth: 2,
  },
  textsecondary: {
    fontSize: 13,
    color: "#6A4029",
    marginLeft: 35,
    marginRight: 5,
    marginBottom: 10,
    fontWeight: "700",
    textAlign: "right",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    borderRadius: 30,
    fontWeight: "900",
  },
});

const HomePage = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (text) => {
    setSearchTerm(text);
    //lakukan logika pencarian disini
  };
  return (
    <ScrollView
      contentContainerStyle={style.scrollViewContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View>
        <View>
          <Text style={style.welcome}>A good coffee is {`\n`} a good day</Text>
        </View>
        <View>
          <TextInput
            style={style.input}
            placeholder="Search..."
            value={searchTerm}
            onChangeText={handleSearch}
          />
        </View>
        <View>
          <Text style={style.textprimary}>Favorite Products</Text>
          <Text style={style.textsecondary}>See more</Text>
        </View>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5]}
          renderItem={() => {
            return (
              <Pressable
                style={homestyle.cardWrap}
                onPress={() => {
                  navigation.navigate("ProductDetail");
                  // navigation.push('DetailProduct')
                }}
              >
                <Image
                  source={require("../../assets/images/product1.png")}
                  style={{
                    width: "100%",
                    position: "absolute",
                    zIndex: 2,
                    resizeMode: "contain",
                  }}
                />
                <View style={homestyle.card}>
                  <Text style={homestyle.productTitle}>Hazelnut Latte</Text>
                  <Text style={[homestyle.productPrice, { marginBottom: 25 }]}>
                    IDR 25.000
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
        <View>
          <Text style={style.textprimary}>Promo for you</Text>
          <Text style={style.textsecondary}>See more</Text>
        </View>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5]}
          renderItem={() => {
            return (
              <Pressable
                style={homestyle.cardWrap}
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
                <View style={homestyle.card}>
                  <Text style={homestyle.productTitle}>Creamy Ice Latte</Text>
                  <Text style={[homestyle.productPrice, { marginBottom: 25 }]}>
                    IDR 15.000
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
        <View>
          <Text style={style.textprimary}>Coffee</Text>
          <Text style={style.textsecondary}>See more</Text>
        </View>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5]}
          renderItem={() => {
            return (
              <Pressable
                style={homestyle.cardWrap}
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
                <View style={homestyle.card}>
                  <Text style={homestyle.productTitle}>Creamy Ice Latte</Text>
                  <Text style={[homestyle.productPrice, { marginBottom: 25 }]}>
                    IDR 15.000
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
        <View>
          <Text style={style.textprimary}>Non Coffee</Text>
          <Text style={style.textsecondary}>See more</Text>
        </View>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5]}
          renderItem={() => {
            return (
              <Pressable
                style={homestyle.cardWrap}
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
                <View style={homestyle.card}>
                  <Text style={homestyle.productTitle}>Creamy Ice Latte</Text>
                  <Text style={[homestyle.productPrice, { marginBottom: 25 }]}>
                    IDR 15.000
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
        <View>
          <Text style={style.textprimary}>Food</Text>
          <Text style={style.textsecondary}>See more</Text>
        </View>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5]}
          renderItem={() => {
            return (
              <Pressable
                style={homestyle.cardWrap}
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
                <View style={homestyle.card}>
                  <Text style={homestyle.productTitle}>Creamy Ice Latte</Text>
                  <Text style={[homestyle.productPrice, { marginBottom: 25 }]}>
                    IDR 15.000
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HomePage;
