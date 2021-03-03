import React from "react";
import { useSelector } from "react-redux";
import { Spinner, List } from "native-base";
import ShopItem from "../ShopItem";

function ShopList({ navigation }) {
  const shops = useSelector((state) => state.shopReducer.shops);

  const loading = useSelector((state) => state.shopReducer.loading);

  if (loading) return <Spinner color="red" />;
  const shopList = shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} navigation={navigation} />
  ));
  return <List>{shopList}</List>;
}

export default ShopList;
