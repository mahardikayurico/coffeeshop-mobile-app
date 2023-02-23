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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    console.log(name, email, password);
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
        <TextInput
          placeholder="Enter your fullname"
          onChangeText={handleNameChange}
          value={name}
          style={style.form}
        />
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
        <TouchableOpacity
          style={style.buttonprimary}
          // onPress={handleSubmit}
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        >
          <Text style={style.textprimary}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
