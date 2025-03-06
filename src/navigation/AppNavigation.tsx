import React from 'react';
import {useAuth} from '../context/AuthContext';
import SignIn from '../screens/signin/SignIn';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BOTTOM_TAB_NAVIGATOR_SCREENS,
  STACK_SCREENS,
  THEME_TYPE,
} from '../utils/Enums';
import HomeNavigation from './HomeNavigation';
import Booking from '../screens/Booking/Booking';
import Search from '../screens/Search/Search';
import Wishlist from '../screens/Wishlist/Wishlist';
import Account from '../screens/Account/Account';
import TabIcons from '../components/TabIcons';
import {navigationStyles} from './NavigationStyles';
import {useStyles, useTheme} from '../context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';

export default function AppNavigation() {
  const {isLoggedIn} = useAuth();
  const Tab = createBottomTabNavigator();
  const st = useStyles(navigationStyles);

  if (!isLoggedIn) return <SignIn />;
  const {theme, currentTheme} = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={BOTTOM_TAB_NAVIGATOR_SCREENS.Home}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor:
              currentTheme === THEME_TYPE.Dark ? '#0d0d0d' : '#ffffff',
              height: 54,
          },
        }}>
        <Tab.Screen
          name={BOTTOM_TAB_NAVIGATOR_SCREENS.Home}
          component={HomeNavigation}
          options={({route}) => ({
            tabBarIcon: ({focused}) =>
              TabIcons(focused, BOTTOM_TAB_NAVIGATOR_SCREENS.Home),
            tabBarShowLabel: false,
          })}
        />
        <Tab.Screen
          name={BOTTOM_TAB_NAVIGATOR_SCREENS.Booking}
          component={Booking}
          options={{
            tabBarIcon: ({focused}) =>
              TabIcons(focused, BOTTOM_TAB_NAVIGATOR_SCREENS.Booking),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name={BOTTOM_TAB_NAVIGATOR_SCREENS.Search}
          component={Search}
          options={{
            tabBarIcon: ({focused}) =>
              TabIcons(focused, BOTTOM_TAB_NAVIGATOR_SCREENS.Search),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name={BOTTOM_TAB_NAVIGATOR_SCREENS.WishList}
          component={Wishlist}
          options={{
            tabBarIcon: ({focused}) =>
              TabIcons(focused, BOTTOM_TAB_NAVIGATOR_SCREENS.WishList),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name={BOTTOM_TAB_NAVIGATOR_SCREENS.Account}
          component={Account}
          options={{
            tabBarIcon: ({focused}) =>
              TabIcons(focused, BOTTOM_TAB_NAVIGATOR_SCREENS.Account),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
