import React from "react";
import { View, Button, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import { userLogin } from "../../../../store/actions/";
import styles from "./styles";
import { MainTouchable, InputContainer } from "../../Base";
import validate from "../../../Utils/validation";
import axios from "axios";
// type Props = {};
class AuthScreen extends React.Component {
  state = {
    controls: {
      user: {
        email: {
          value: "",
          valid: false,
          touched: false,
          validationRules: {
            isEmail: true
          }
        },
        passwd: {
          value: "",
          valid: false,
          touched: false,
          validationRules: {
            minLength: 6
          }
        }
      }
    }
  };

  handleChange = (key, newValue) => {
    const { validationRules } = this.state.controls.user[key];
    let connectedValue;
    this.setState(state => ({
      ...state,
      controls: {
        ...state.controls,
        user: {
          ...state.controls.user,
          [key]: {
            ...state.controls.user[key],
            value: newValue,
            touched: true,
            valid: validate(newValue, validationRules, connectedValue)
          }
        }
      }
    }));
  };

  handlePress = () => {
    const email = this.state.controls.user.email.value;
    const passwd = this.state.controls.user.passwd.value;
    axios
      .get("http://192.168.43.106:3000/signin", {
        headers: {
          email: email,
          password: passwd
        }
      })
      .then(res => {
        this.props.handleUserAuth(res.data[0]);
      })
      .catch(e => {
        alert(e);
      });
  };

  render() {
    const isEmailValid =
      this.state.controls.user.email.valid &&
      this.state.controls.user.email.touched;
    const isPasswdValid =
      this.state.controls.user.passwd.valid &&
      this.state.controls.user.passwd.touched;
    const isFormValid = isEmailValid && isPasswdValid;
    return (
      <View style={styles.authContainer}>
        <Text>Welcome to Math Battle</Text>
        <Text>{isFormValid ? "true" : "false"}</Text>
        <Text>{this.state.controls.user.email.valid}</Text>
        <InputContainer
          style={styles.textFields}
          placeholder="Email..."
          value={this.state.controls.user.email.value}
          onChangeText={value => this.handleChange("email", value)}
        />
        <InputContainer
          style={styles.textFields}
          placeholder="Password..."
          value={this.state.controls.user.passwd.value}
          onChangeText={value => this.handleChange("passwd", value)}
        />
        {isFormValid && (
          <MainTouchable onPress={this.handlePress}>Login!!</MainTouchable>
        )}
        {!isFormValid && (
          <MainTouchable onPress={() => alert("existem erros")}>
            Login!!
          </MainTouchable>
        )}
        <MainTouchable onPress={this.handlePress}>
          Create an Account!
        </MainTouchable>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  userLogin: user => dispatch(userLogin(user))
});

const AuthScreenWithState = connect(mapStateToProps, mapDispatchToProps)(
  AuthScreen
);

export default AuthScreenWithState;
