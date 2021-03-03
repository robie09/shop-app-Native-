import React from "react";

import {
  Container,
  Content,
  Header,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from "native-base";

function CartItem({ product }) {
  return (
    <Container>
      <Header />
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://media.istockphoto.com/vectors/cartoon-cute-cookie-icon-isolated-on-white-background-vector-id1142855490?k=6&m=1142855490&s=170667a&w=0&h=wkkwL7LH56KneFN0frVZA0ZXKTQQK0CqLjOXQbbDiKM=",
                }}
              />
            </Left>
            <Body>
              <Text>{product.name}</Text>
              <Text>Price: {product.price} USA </Text>
              <Text>Price: {product.price} USA </Text>

              <Text>Price: Quantity: {quantity} </Text>
              <Text> Total Price </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

export default CartItem;
