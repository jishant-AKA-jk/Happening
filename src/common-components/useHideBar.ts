import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';

const useHideTabBar = () => {
  const navigation = useNavigation();
  const {theme} = useTheme();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { height:0 , display:'none'},
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { height:52,display: 'flex' ,backgrondColor:theme.base_primary},
      });
    };
  }, [navigation]);
};

export default useHideTabBar;
