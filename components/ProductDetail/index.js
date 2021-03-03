import React from "react";
import { useSelector } from "react-redux";
import { Text, Image } from "react-native";
import { Body, Left, ListItem, Thumbnail } from "native-base";

function ProductDetail({ navigation, route }) {
  const product = route.params.product;

  return (
    <ListItem>
      <Left>
        <Thumbnail
          circular
          square
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFp5hXtfjL8eiTYEys-zWJPJFDDvJ3dcQU6A&usqp=CAU" ??
              product.image,
          }}
        />
      </Left>
      <Body>
        <Text>{product.name}</Text>

        <Text>{product.price} USD</Text>
        <Text>{product.description}</Text>
      </Body>
    </ListItem>
  );
}

export default ProductDetail;
