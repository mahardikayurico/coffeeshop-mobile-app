import { Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "./ProfileStyles";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ProfilePage = ({ navigation }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUserData = async () => {
      const userId = await AsyncStorage.getItem("@userid");
      const response = await axios.get(
        `http://192.168.1.7:5000/api/v1/user/${userId}`
      );
      setUserData(response.data.data);
    };

    getUserData();
  }, []);
  return (
    <View>
      <View>
        <Text style={[style.welcome, { fontSize: 33 }]}> My Profile </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={style.subtitle}>Your Information</Text>
        <Text
          style={style.subtitle}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          Edit
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 35,
          marginRight: 35,
          marginLeft: 35,
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
        >
          <Image
            source={require("../../assets/images/profile.png")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              //   borderRadius: "100%",
            }}
          />
        </View>
        <View style={{ marginLeft: 35, marginRight: 45 }}>
          <Text
            style={[
              {
                fontSize: 17,
                fontWeight: "700",
                color: "#000000",
              },
            ]}
          >
            Gatot Kaca
          </Text>
          <Text
            style={{
              fontSize: 15,
              borderBottomWidth: 2,
              marginTop: 5,
              borderBottomColor: "#9F9F9F",
              color: "#6A4029",
            }}
          >
            gatotkaca99@gmail.com
          </Text>
          <Text
            style={{
              fontSize: 15,
              borderBottomWidth: 2,
              borderBottomColor: "#9F9F9F",
              marginTop: 5,
              color: "#6A4029",
            }}
          >
            gatotkaca12
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 5,
              color: "#6A4029",
            }}
          >
            perum bulu permai no b10, danupayan, bulu, Temanggung
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={style.buttonPrimary}
          onPress={() => {
            navigation.navigate("HistoryPage");
          }}
        >
          <Text style={style.textPrimary}> Order History</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={style.buttonPrimary}
          // onPress={() => {
          //   navigation.navigate("cart");
          // }}
        >
          <Text style={style.textPrimary}> Edit Password </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={style.buttonPrimary}
          // onPress={() => {
          //   navigation.navigate("cart");
          // }}
        >
          <Text style={style.textPrimary}> FAQ </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={style.buttonPrimary}
          // onPress={() => {
          //   navigation.navigate("cart");
          // }}
        >
          <Text style={style.textPrimary}> Help </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Save Change</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={style.buttonSecondary}>
          <Text style={style.textPrimary}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePage;
