import { View, Text, Image } from "react-native";
import React from "react";

const image = "https://s.hdnux.com/photos/01/00/70/16/17007532/3/1200x0.jpg";

const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai · Comfort · $$ · 🎫 · 4⭐ (2913+)";

export default function About() {
  return (
    <View>
      {<RestaurantImage image={image} />}
      {<RestaurantTitle text={title} />}
      {<RestaurantDescription description={description} />}
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{
      width: "100%",
      height: 180,
    }}
  />
);
const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.text}
  </Text>
);
const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
