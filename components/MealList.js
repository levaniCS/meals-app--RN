import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = (props) => {
  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);
  const renderMealItem = (itemData) => {
    const isFavourite = favouriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <MealItem
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavourite
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%', paddingHorizontal: '5%', paddingTop: '5%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealList;
