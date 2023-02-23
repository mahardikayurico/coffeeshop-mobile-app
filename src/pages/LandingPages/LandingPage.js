import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const style = StyleSheet.create({
  welcome: {
    fontSize: 64,
    fontWeight: "700",
    marginTop: "30%",
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
});

const LandingPage = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text style={style.welcome}>Coffee for Everyone</Text>
      </View>
      <View>
        <Image
          source={require("../../assets/images/landingpage.png")}
          style={{ width: "100%", resizeMode: "contain" }}
        ></Image>
      </View>
      <View>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            navigation.navigate("WelcomePage");
          }}
        >
          <Text style={style.text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;
