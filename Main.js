import React, { Component } from "react";
import { View, Text } from "react-native";
import MainMenu from "./src/Components/Screens/TabNavigator";
import AuthScreenWithState from "./src/Components/Screens/Auth";
import { connect } from "react-redux";
import { userLogout } from "./store/actions";

type Props = {};
class Main extends Component<Props> {
  state = {};
  handleUserAuth = user => {
    this.setState(state => ({
      ...state,
      user
    }));
  };
  render() {
    if (this.state.user) {
      return <MainMenu {...this.state} />;
    } else {
      return <AuthScreenWithState handleUserAuth={this.handleUserAuth} />;
    }
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  userLogout: user => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
