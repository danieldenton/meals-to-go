import React from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const Title = styled.Text`
  color: red;
  padding: 16px;
  font-size: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 dik street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title style={styles.title}>{name}</Title>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 100 },
  cover: { padding: 20, backgroundColor: "white" },
});
