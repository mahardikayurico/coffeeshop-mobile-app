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
  passwordText: {
    fontSize: 64,
    fontWeight: "700",
    marginTop: 5,
    marginLeft: 35,
    marginRight: 35,
    color: "#000000",
    textAlign: "center",
  },
  subPassword: {
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
    marginLeft: 35,
    marginRight: 35,
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
  link: {
    textAlign: "center",
    fontWeight: "700",
    color: "#000000",
    marginLeft: 35,
    marginTop: 10,
    marginRight: 35,
  },
});

const ForgotPassword = () => {
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
          <Text style={style.passwordText}>Don’t Worry!</Text>
          <Text style={style.subPassword}>
            Enter your email adress to get reset password link
          </Text>
        </View>
        <View style={{ marginTop: 5, marginBottom: 5 }}>
          <Image
            source={require("../../assets/images/forgotpassword.png")}
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
          <Text style={style.link}> Haven’t received any link?</Text>
          <TouchableOpacity style={style.buttonprimary} onPress={handleSubmit}>
            <Text style={style.textprimary}>Resend Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
