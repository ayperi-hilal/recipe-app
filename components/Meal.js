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

import CustomButton from './CustomButton';

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
      <Image source={{uri:imageUrl}} alt="recipe" 
      resizeMode='cover'
      style={{
        width:100,
        height:100,
        borderRadius:10,
      }}/>
      <Text h1>{meal.title}</Text>
        <FlatList>Preparation time: {meal.readyInMinutes} minutes</FlatList>
        <FlatList>Number of servings: {meal.servings}</FlatList>
        <CustomButton
                    buttonContainerStyle={{
                        marginTop:8,
                        paddingVertical:10,
                        borderRadius:18,
                        borderColor:'#1A8871',
                        borderWidth:1
                    }}
                    buttonText="Tarife Git"
                    color={[]}
                    onPress={meal.sourceUrl}
                    />
      {/* <a href={meal.sourceUrl}>Go to Recipe</a> */}
    </Text>
  );
}
