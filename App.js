import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Main from "./Main";
import configureStore from "./store/configureStore";
// const Stack = StackNavigator({
//   MainMenu: {
//     screen: MainMenu
//   },
//   Auth: {
//     screen: Auth,
//     navigationOptions: {
//       title: "Auth"
//     }
//   }
// });

// const store = configureStore();
export default class App extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 22
  },
  text: {
    color: "palevioletred"
  }
});
