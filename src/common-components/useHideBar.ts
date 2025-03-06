import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const useHideTabBar = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { height:0 , display:'none'},
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { height:52},
      });
    };
  }, [navigation]);
};

export default useHideTabBar;
