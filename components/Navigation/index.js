import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import ProductDetail from "../ProductDetail";
import CartList from "../CartList";

function RootNavigator() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="CartList">
        <Screen name="Home" component={Home} />
        <Screen name="ShopList" component={ShopList} />

        <Screen
          name="ShopDetail"
          component={ShopDetail}
          options={({ route }) => {
            return { title: route.params.shop.name };
          }}
        />
        <Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({ route }) => {
            return { title: route.params.product.name };
          }}
        />

        <Screen name="CartList" component={CartList} />
      </Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
