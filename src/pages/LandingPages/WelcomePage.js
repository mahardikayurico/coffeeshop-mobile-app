import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const style = StyleSheet.create({
  welcometext: {
    fontSize: 64,
    fontWeight: "700",
    marginTop: 5,
    color: "#000000",
    textAlign: "center",
  },
  subWelcome: {
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
  },
  buttonprimary: {
    alignItems: "center",
    backgroundColor: "#6A4029",
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    borderRadius: 15,
  },
  textprimary: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  buttonsecondary: {
    alignItems: "center",
    backgroundColor: "#FFBA33",
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    borderRadius: 15,
  },
  textsecondary: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "700",
  },
});

const WelcomePage = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text style={style.welcometext}>Welcome!</Text>
        <Text style={style.subWelcome}>
          Get a cup of coffee for free only{"\n"} for new user
        </Text>
      </View>
      <View style={{ margin: 25 }}>
        <Image
          source={require("../../assets/images/welcomeimg.png")}
          style={{ width: "100%", marginTop: 35, resizeMode: "contain" }}
        ></Image>
      </View>
      <View>
        <TouchableOpacity
          style={style.buttonprimary}
          onPress={() => {
            navigation.navigate("SignUpPage");
          }}
        >
          <Text style={style.textprimary}>Create New Account</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={style.buttonsecondary}
          onPress={() => {
            navigation.navigate("LoginPage");
          }}
        >
          <Text style={style.textsecondary}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;
