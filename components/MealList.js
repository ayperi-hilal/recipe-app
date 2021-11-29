import React from "react";

import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import Meal from "./Meal";

export default function MealList({ mealData }) {

  return (
      <FlatList>
        {mealData.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </FlatList>
  );
}
