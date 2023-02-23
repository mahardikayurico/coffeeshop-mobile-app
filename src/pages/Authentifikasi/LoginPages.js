import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

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
    marginTop: 20,
    borderRadius: 15,
  },
  textprimary: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  buttontersiery: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    borderRadius: 15,
  },
  texttersiery: {
    fontSize: 16,
    color: "#000000",
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
  forgotPassword: {
    fontWeight: "700",
    color: "#895537",
    marginLeft: 35,
    marginTop: 15,
    textDecorationLine: "underline",
  },
});

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    console.log(email, password);
  };
  return (
    <ScrollView
      contentContainerStyle={style.scrollViewContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View>
        <View>
          <Text style={style.welcometext}>Login</Text>
        </View>
        <View style={{ marginTop: 5, marginBottom: 5 }}>
          <Image
            source={require("../../assets/images/login.png")}
            style={{ width: "100%", resizeMode: "contain" }}
          ></Image>
        </View>
        <View>
          <TextInput
            placeholder="Enter your Email"
            onChangeText={handleEmailChange}
            value={email}
            style={style.form}
          />
          <TextInput
            placeholder="Enter your Password"
            onChangeText={handlePasswordChange}
            value={password}
            style={style.form}
            secureTextEntry={true}
          />
          <Text
            style={style.forgotPassword}
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
          >
            {" "}
            Forgot Password ?
          </Text>
          <TouchableOpacity
            style={style.buttonprimary}
            //   onPress={handleSubmit}
            onPress={() => {
              navigation.navigate("HomePage");
            }}
          >
            <Text style={style.textprimary}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.buttontersiery}>
          <Text style={style.texttersiery}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
