import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {STACK_SCREENS} from '../utils/Enums';
import Home from '../screens/Home/Home';
import EventDetails from '../screens/EventDetails/EventDetails';
import SeatSelection from '../screens/SeatSelection/SeatSelection';

export default function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={STACK_SCREENS.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={STACK_SCREENS.Home} component={Home} />
      <Stack.Screen
        name={STACK_SCREENS.EventDetails}
        component={EventDetails}
      />
      <Stack.Screen
        name={STACK_SCREENS.SeatSelactions}
        component={SeatSelection}
      />
    </Stack.Navigator>
  );
}
