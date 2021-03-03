import React from "react";
import { Text } from "react-native";
import { Button, Icon, Container, View, Left } from "native-base";
import { BottomStyling, Title, TextStyling, Background } from "./styles";
const Home = ({ navigation }) => {
  return (
    <Background
      source={{
        uri:
          "https://i.pinimg.com/originals/77/be/ed/77beed3f3b621460ef1664b2ed0f1896.jpg",
      }}
    >
      <TextStyling>
        <Title>Wlcome to Shops </Title>
      </TextStyling>

      <Button onPress={() => navigation.navigate("ShopList")}>
        <Text>Go to shop List</Text>
      </Button>
    </Background>
  );
};

export default Home;
