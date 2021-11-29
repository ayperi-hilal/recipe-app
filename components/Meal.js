import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=b2209320ab644d0aad6edaa62c1894a1&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <Text>
      <Text h1>{meal.title}</Text>
      <Image src={imageUrl} alt="recipe" />
        <FlatList>Preparation time: {meal.readyInMinutes} minutes</FlatList>
        <FlatList>Number of servings: {meal.servings}</FlatList>

      {/* <a href={meal.sourceUrl}>Go to Recipe</a> */}
    </Text>
  );
}
