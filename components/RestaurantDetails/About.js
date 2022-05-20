import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image: "https://s.hdnux.com/photos/01/00/70/16/17007532/3/1200x0.jpg",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" · ");

const description = `${formattedCategories} ${
  price ? " · " + price : ""
} · 🎟️ · ${rating} ⭐ (${reviews}+)`;



export default function About() {
  return (
    <View>
      {<RestaurantImage image={image} />}
      {<RestaurantName name={name} />}
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
const RestaurantName= (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
