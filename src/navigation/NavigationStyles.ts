import { StyleSheet } from 'react-native';
import { groupStyles } from '../utils/appfunctions';
import { ITheme } from '../theme/Theme';
import { appSpacing, CStyles } from '../theme/CStyles';

export const navigationStyles = (theme: ITheme) =>
  StyleSheet.create({
    itemContainer: {
      marginVertical: appSpacing.sm,
      flex: 0.25,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    menuTextStyle: {
      height: 30,
      textAlign: 'center',
      textAlignVertical: 'top',
      marginTop: 10,
      paddingHorizontal: 2,
    },
    tabStyle: { backgroundColor: theme.base_primary},
    tabOption: groupStyles(
      CStyles.flexCol,
      CStyles.alignItemsCenter,
      CStyles.justifyBetween,
      CStyles.marginVerticalMd,
      {minWidth: 60},
    ),
  });
