import React from "react";
import { View, Text } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";
import HomeScreen from "./Home";
import GoalsScreen from "./Goals";

const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Goals: {
      screen: GoalsScreen
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom"
  }
);

const MainMenu = () => (
  <View>
    <Text>{JSON.stringify(this.props.user, null, 2)}</Text>
    <Tabs />
  </View>
);

export default MainMenu;
