import React, { useState,useEffect } from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import MealList from "../components/MealList";
import {COLORS,SIZES} from '../constants';
function Home() {
  const [mealData, setMealData] = useState();

  useEffect(() => {
    fetchMyMeals();
  }, []);

  const fetchMyMeals = async () => {
    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=5&apiKey=b2209320ab644d0aad6edaa62c1894a1");
    const json = await response.json();

    setMealData(json.results);
    
  };

  if(!mealData) return <Text>Loading....</Text>
  
  return (
    <SafeAreaView
    style={{
      flex:1,
      backgroundColor:COLORS.white
    }}>
      {mealData && <MealList mealData={mealData} />}
    </SafeAreaView>
  );
}

export default Home;
