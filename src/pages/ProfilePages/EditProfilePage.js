import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "./EditProfileStyles";
import axios from "axios";
import React, { useState, useEffect } from "react";

const EditProfile = ({ navigation }) => {
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem("@userId");
        const response = await axios.get(
          `http://192.168.1.7:5000/api/v1/user/${userId}`
        );
        setUserData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    try {
      const userId = await AsyncStorage.getItem("@userId");
      await axios.patch(
        `http://192.168.1.7:5000/api/v1/user/${userId}`,
        userData
      );
      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (key, value) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };
  return (
    <View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/profile.png")}
          style={{
            width: "25%",
            height: 100,
            resizeMode: "cover",
            marginTop: 35,
            borderRadius: 100,
          }}
        ></Image>
      </View>
      <TouchableOpacity
        style={[style.buttonSecondary]}
        // onPress={handleSubmit}
      >
        <Text style={style.textSecondary}>Choose photo from galery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[style.buttonSecondary, { backgroundColor: "#FFFFFF" }]}
        // onPress={handleSubmit}
      >
        <Text style={style.textSecondary}>Choose photo from camera</Text>
      </TouchableOpacity>

      <View>
        <Text style={style.subtitle}>Fullname :</Text>
        <TextInput
          placeholder={userData.fullname}
          onChangeText={(value) => handleInputChange("fullname", value)}
          value={userData.fullname}
          style={style.form}
        />

        <Text style={style.subtitle}>Username :</Text>
        <TextInput
          placeholder={userData.username}
          onChangeText={(value) => handleInputChange("username", value)}
          value={userData.username}
          style={style.form}
        />

        <Text style={style.subtitle}>Email :</Text>
        <TextInput
          placeholder={userData.email}
          onChangeText={(value) => handleInputChange("email", value)}
          value={userData.email}
          style={style.form}
        />

        <Text style={style.subtitle}>Address :</Text>
        <TextInput
          placeholder={userData.address}
          onChangeText={(value) => handleInputChange("address", value)}
          value={userData.address}
          style={style.form}
        />

        <Text style={style.subtitle}>Phone Number :</Text>
        <TextInput
          placeholder={userData.phoneNumber}
          onChangeText={(value) => handleInputChange("phoneNumber", value)}
          value={userData.phoneNumber}
          style={style.form}
        />

        <TouchableOpacity style={style.button} onPress={handleUpdate}>
          <Text style={style.text}>Save and Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
