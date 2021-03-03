import React from "react";
import { useSelector } from "react-redux";
import { ListItem } from "native-base";

const CartList = () => {
  const itemproduct = useSelector((state) => state.cartReducer.items);

  const allProducts = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.cartReducer.loading);

  if (loading) return <Spinner color="red" />;

  //Spread the object (use ...) and return it with the item's quantity.
  const cartItem = itemproduct.map((item) => ({
    ...allProducts.find((product) => item.id === product.id),
    quantity: item.quantity,
  }));

  const cartList = cartItem.map((product) => (
    <CartItem key={product.id} product={product} />
  ));

  return <ListItem>{cartList}</ListItem>;
};

export default CartList;
