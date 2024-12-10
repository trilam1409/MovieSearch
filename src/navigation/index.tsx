import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/home';
import { MovieDetail } from './screens/movie-detail';

const Stack = createNativeStackNavigator();

 export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetail} />
    </Stack.Navigator>
  );
}

export type RootStackParamList = {
  HomeScreen: undefined;
  MovieDetailScreen: { id: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
