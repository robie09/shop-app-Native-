import React from "react";
import { useSelector } from "react-redux";

import ProductList from "../ProductList/ProductList";

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

function ShopDetail({ navigation, route }) {
  const loading = useSelector((state) => state.shopReducer.loading);
  const shops = useSelector((state) => state.shopReducer.shops);
  const allProducts = useSelector((state) => state.productReducer.products);
  const shop = route.params.shop;
  if (loading) return <Text>LODAING</Text>;

  const shopS = shops[0];
  const products = shopS.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );
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
              <Text>{shopS.name}</Text>
              <Text>
                <ProductList products={products} navigation={navigation} />
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

export default ShopDetail;
