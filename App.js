// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// const style = StyleSheet.create({
//   welcome: {
//     fontSize: 64,
//     fontWeight: "700",
//     marginTop: "30%",
//     color: "#000000",
//     marginLeft: 35,
//     marginRight: 15,
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#6A4029",
//     padding: 20,
//     marginLeft: 25,
//     marginRight: 25,
//     marginTop: 5,
//     borderRadius: 15,
//   },
//   text: {
//     fontSize: 16,
//     color: "#FFFFFF",
//   },
// });

// const App = () => {
//   return (
//     <View>
//       <View>
//         <Text style={style.welcome}>Coffee for Everyone</Text>
//       </View>
//       <View>
//         <Image
//           source={require("../mobile-app/src/assets/landingpage.png")}
//           style={{ width: "100%" }}
//         ></Image>
//       </View>
//       <View>
//         <TouchableOpacity style={style.button}>
//           <Text style={style.text}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default App;

//welcome page

// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// const style = StyleSheet.create({
//   welcometext: {
//     fontSize: 64,
//     fontWeight: "700",
//     marginTop: "30%",
//     color: "#000000",
//     textAlign: "center",
//   },
//   subWelcome: {
//     fontSize: 17,
//     fontWeight: "400",
//     textAlign: "center",
//   },
//   buttonprimary: {
//     alignItems: "center",
//     backgroundColor: "#6A4029",
//     padding: 20,
//     marginLeft: 25,
//     marginRight: 25,
//     marginTop: 25,
//     borderRadius: 15,
//   },
//   textprimary: {
//     fontSize: 16,
//     color: "#FFFFFF",
//     fontWeight: "700",
//   },
//   buttonsecondary: {
//     alignItems: "center",
//     backgroundColor: "#FFBA33",
//     padding: 20,
//     marginLeft: 25,
//     marginRight: 25,
//     marginTop: 25,
//     borderRadius: 15,
//   },
//   textsecondary: {
//     fontSize: 16,
//     color: "#000000",
//     fontWeight: "700",
//   },
// });

// const App = () => {
//   return (
//     <View>
//       <View>
//         <Text style={style.welcometext}>Welcome!</Text>
//         <Text style={style.subWelcome}>
//           Get a cup of coffee for free only{"\n"} for new user
//         </Text>
//       </View>
//       <View style={{margin:25,}}>
//         <Image
//           source={require("../mobile-app/src/assets/welcomeimg.png")}
//           style={{ width: "100%", marginTop: 35 }}
//         ></Image>
//       </View>
//       <View>
//         <TouchableOpacity style={style.buttonprimary}>
//           <Text style={style.textprimary}>Create New Account</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <TouchableOpacity style={style.buttonsecondary}>
//           <Text style={style.textsecondary}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default App;

//signup page
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   Button,
// } from "react-native";
// import React, { useState } from "react";

// const style = StyleSheet.create({
//   welcometext: {
//     fontSize: 64,
//     fontWeight: "700",
//     marginTop: "20%",
//     color: "#000000",
//     textAlign: "center",
//   },
//   buttonprimary: {
//     alignItems: "center",
//     backgroundColor: "#6A4029",
//     padding: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 35,
//     borderRadius: 15,
//   },
//   textprimary: {
//     fontSize: 16,
//     color: "#FFFFFF",
//     fontWeight: "700",
//   },
//   form: {
//     borderBottomWidth: 1,
//     borderBottomColor: "#000",
//     // borderBottomStyle: "solid",
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 10,
//     padding: 10,
//   },
// });

// const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };

//   const handleSubmit = () => {
//     console.log(name, email, password);
//   };
//   return (
//     <View>
//       <View>
//         <Text style={style.welcometext}>Sign Up</Text>
//       </View>
//       <View style={{ marginTop: 10, marginBottom: 35 }}>
//         <Image
//           source={require("../mobile-app/src/assets/signup.png")}
//           style={{ width: "100%", marginTop: 5 }}
//         ></Image>
//       </View>
//       <View>
//         <TextInput
//           placeholder="Enter your fullname"
//           onChangeText={handleNameChange}
//           value={name}
//           style={style.form}
//         />
//         <TextInput
//           placeholder="Enter your Email"
//           onChangeText={handleEmailChange}
//           value={email}
//           style={style.form}
//         />
//         <TextInput
//           placeholder="Enter your Password"
//           onChangeText={handlePasswordChange}
//           value={password}
//           style={style.form}
//           secureTextEntry={true}
//         />
//         <TouchableOpacity style={style.buttonprimary} onPress={handleSubmit}>
//           <Text style={style.textprimary}>Create Account</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default App;
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const style = StyleSheet.create({
  welcometext: {
    fontSize: 64,
    fontWeight: "700",
    marginTop: "20%",
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

const App = () => {
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
    <View>
      <View>
        <Text style={style.welcometext}>Sign Up</Text>
      </View>
      <View style={{ marginTop: 10, marginBottom: 35 }}>
        <Image
          source={require("../mobile-app/src/assets/signup.png")}
          style={{ width: "100%", marginTop: 5 }}
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
        <TouchableOpacity style={style.buttonprimary} onPress={handleSubmit}>
          <Text style={style.textprimary}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
