import {View} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import React, {useMemo} from 'react';
import {navigationStyles} from '../navigation/NavigationStyles';
import CText from '../common-components/CText';
import {BOTTOM_TAB_NAVIGATOR_SCREENS, SVG_ICONS} from '../utils/Enums';
import CSvgIcons from '../common-components/CSvgIcons';

const TabIcons = (focused: boolean, tabName: string) => {
  const {theme} = useTheme();
  const styles = useMemo(() => navigationStyles(theme), [theme]);
  const getIconForTab = (tabName: string) => {
    switch (tabName) {
      case BOTTOM_TAB_NAVIGATOR_SCREENS.Home:
        return SVG_ICONS.HomeIcon;
      case BOTTOM_TAB_NAVIGATOR_SCREENS.Booking:
        return SVG_ICONS.BookingIcon;
      case BOTTOM_TAB_NAVIGATOR_SCREENS.Search:
        return SVG_ICONS.SearchIcon;
      case BOTTOM_TAB_NAVIGATOR_SCREENS.WishList:
        return SVG_ICONS.WishlistIcon;
      case BOTTOM_TAB_NAVIGATOR_SCREENS.Account:
        return SVG_ICONS.AccountIcon;
      default:
        return SVG_ICONS.HomeIcon;
    }
  };
  return (
    <View style={styles.tabOption}>
      <CSvgIcons
        color={focused ? theme.primary : theme.text_secondary}
        size={20}
        name={getIconForTab(tabName)}
      />
      <CText
        style={{
          fontSize: 12,
          color: focused ? theme.primary : theme.text_secondary,
        }}>
        {tabName}
      </CText>
    </View>
  );
};
export default TabIcons;
