import React from "react";

import { ListItem, Thumbnail } from "native-base";
import { Text, Image } from "react-native";
import { List } from "native-base";

// import { Link } from "react-router-dom";

const ProductItem = ({ product, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("ProductDetail", { product: product })}
    >
      <Text>{product.name}</Text>
      <Thumbnail
        circular
        square
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFp5hXtfjL8eiTYEys-zWJPJFDDvJ3dcQU6A&usqp=CAU" ??
            product.image,
        }}
      />
    </ListItem>
  );
};

export default ProductItem;
