import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
const foods = [
  {
    title: "Pan Roasted Portobello Steaks",
    description:
      "Pan Roasted Portobello Steaks with Lobster Mushrooms, Potato Puree, Blistered Haricots Verts, Charred Onion Petals and Chimichurri",
    price: "$24.99",
    image:
      "https://i0.wp.com/twohappyrabbits.com/wp/wp-content/uploads/2017/10/Day-23cC.jpg?resize=1024%2C680",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://veenaazmanov.com/wp-content/uploads/2021/08/Lasagna-with-Bechamel-Sauce24.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzle",
    price: "$19.20",
    image:
      "https://www.simplyrecipes.com/thmb/RApX19MbIABUG-fVjjPOVRZctBw=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce.",
    price: "$17.50",
    image:
      "https://www.thespruceeats.com/thmb/ooo4cAYV1TZ9T0fo1mzaCEA5-hU=/1500x844/smart/filters:no_upscale()/chilaquiles-recipe-5213268-hero-01-09015a76503e4f07820ad17811d88a6f.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
);
