import {StyleSheet} from 'react-native';
import {ITheme} from '../../theme/Theme';
import {appSpacing} from '../../theme/CStyles';

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.base_secondary,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: appSpacing.base,
    },
    seatTypeContainer: {
      flexDirection: 'row',
      marginBottom: appSpacing.base,
    },
    seatTypeButton: {
      flex: 1,
      paddingVertical: appSpacing.md,
      alignItems: 'center',
      borderRadius: appSpacing.md,
      marginHorizontal: appSpacing.xsm,
    },
    activeSeatTypeButton: {
      backgroundColor: theme.primary,
    },
    inactiveSeatTypeButton: {
      backgroundColor: theme.secondary,
    },
    seatTypeText: {
      fontWeight: 'bold',
    },
    activeSeatTypeText: {
      color: theme.text_on_primary,
    },
    inactiveSeatTypeText: {
      color: theme.primary,
    },
    sectionTitle: {
      fontWeight: 'bold',
      marginBottom: appSpacing.md,
    },
    seatContainer: {
      marginBottom: appSpacing.xl,
    },
    counterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.base_primary,
      borderWidth: 0.5,
      borderColor: theme.border_blur,
      borderRadius: appSpacing.md,
      padding: 6,
    },
    counterButton: {
      paddingHorizontal: 22,
      paddingVertical: appSpacing.base,
      backgroundColor: theme.secondary,
      borderRadius: appSpacing.md,
    },
    counterButtonText: {
      fontWeight: 'bold',
      color: theme.primary,
      fontSize: 24,
    },
    counterValue: {
      fontSize: appSpacing.lg,
      fontWeight: 'bold',
      marginHorizontal: appSpacing.xl,
    },
    priceDetailsContainer: {
      marginBottom: appSpacing.xl,
    },
    priceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: appSpacing.sm,
    },
    totalPriceContainer: {
      marginBottom: appSpacing.md,
    },
    totalPriceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    totalPriceLabel: {
      fontWeight: 'bold',
    },
    totalPriceValue: {
      fontWeight: 'bold',
    },
    continueButtonContainer: {
      bottom: 0,
      paddingBottom: appSpacing.base,
      paddingHorizontal: appSpacing.base,
      paddingTop: appSpacing.base,
      position: 'absolute',
      width: '100%',
      backgroundColor: theme.base_primary,
      alignSelf: 'center',
    },
    continueButtonText: {
      color: theme.text_on_primary,
      fontWeight: 'bold',
    },
  });
