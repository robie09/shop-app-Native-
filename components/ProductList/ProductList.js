import React from "react";
import ProductItem from "./ProductItem";
import { List } from "native-base";

import { useSelector } from "react-redux";
function ProductList({ products, navigation }) {
  const loading = useSelector((state) => state.shopReducer.loading);

  if (loading) return <Spinner color="red" />;
  //   const products = useSelector((state) => state.productReducer.products);
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} navigation={navigation} />
  ));
  return <List>{productList}</List>;
}

export default ProductList;
