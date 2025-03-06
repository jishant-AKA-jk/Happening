import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const useHideTabBar = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'flex' },
      });
    };
  }, [navigation]);
};

export default useHideTabBar;
