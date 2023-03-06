import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
import React, { useEffect, useCallback, useState, AsyncStorage } from "react";
import axios from "axios";

const style = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },

  welcometext: {
    fontSize: 64,
    fontWeight: "700",
    marginTop: 5,
    color: "#000000",
    textAlign: "center",
  },
  buttonprimary: {
    alignItems: "center",
    backgroundColor: "#6A4029",
    padding: 20,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 35,
    borderRadius: 15,
  },
  textprimary: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  form: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    // borderBottomStyle: "solid",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    padding: 10,
  },
});

const SignUp = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullnameChange = (text) => {
    setFullname(text);
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: "http://192.168.1.7:5000/api/v1/auth/register",
      method: "POST",
      data: { fullname, username, email, password },
    })
      .then((res) => {
        console.log(res.data);
        navigation.navigate("LoginPage");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <ScrollView
      contentContainerStyle={style.scrollViewContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View>
        <Text style={style.welcometext}>Sign Up</Text>
      </View>
      <View style={{ marginTop: 10, marginBottom: 35 }}>
        <Image
          source={require("../../assets/images/signup.png")}
          style={{ width: "100%", marginTop: 5, resizeMode: "contain" }}
        ></Image>
      </View>
      <View>
        {/* {validate.error && <Text>{validate.message}</Text>} */}
        <TextInput
          placeholder="Enter your fullname"
          onChangeText={handleFullnameChange}
          value={fullname}
          style={style.form}
        />
        <TextInput
          placeholder="Enter your Usename"
          onChangeText={handleUsernameChange}
          value={username}
          style={style.form}
        />
        <TextInput
          placeholder="Enter your Email"
          // value={email}
          onChangeText={handleEmailChange}
          value={email}
          style={style.form}
        />
        <TextInput
          placeholder="Enter your Password"
          style={style.form}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={style.buttonprimary} onPress={handleSubmit}>
          <Text style={style.textprimary}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
