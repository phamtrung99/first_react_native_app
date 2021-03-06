import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MoviePage from './MoviePage/MoviePage'
import MovieListScreen from './MovieListScreen/MovieListScreen';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';



const Stack = createStackNavigator();

export default function MoviePageStack() {

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MoviePage" component={MoviePage} />
            <Stack.Screen name="MovieListScreen" component={MovieListScreen} />
            <Stack.Screen name="MovieDetailPage" component={MovieDetailPage} />
        </Stack.Navigator>
    )
};
