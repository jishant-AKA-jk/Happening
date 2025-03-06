import {StyleSheet} from 'react-native';
import {ITheme} from '../../theme/Theme';
import {appSpacing} from '../../theme/CStyles';

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    mainContainer: {flex: 1, backgroundColor: theme.base_primary},
    container: {
      flex: 1,
      backgroundColor: theme.base_secondary,
    },
    backButton: {
      position: 'absolute',
      top: appSpacing.base,
      left: appSpacing.base,
      zIndex: 10,
    },
    descriptionText: {
        fontSize:appSpacing.md,
      textAlign: 'justify',
      color: theme.text_secondary,
    },
    readMoreText: {
      color: theme.primary,
      fontWeight:'bold'
    },
    share: {
      position: 'absolute',
      top: appSpacing.base,
      right: appSpacing.base,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    eventHeaderImage: {
      width: '100%',
      height: 350,
    },
    eventDetailsContainer: {
      padding: appSpacing.base,
      marginTop: -70,
      backgroundColor: theme.base_primary,
      marginHorizontal: appSpacing.xl,
      borderRadius: appSpacing.md,
    },
    detailsOverlayContainer: {
      paddingHorizontal: appSpacing.base,
      paddingTop: appSpacing.sm,
    },
    eventTitle: {
      marginBottom: appSpacing.base,
    },
    eventMetaContainer: {
      rowGap: 2,
    },
    eventMetaItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    eventMetaText: {
      marginLeft: 6,
    },
    buyTicketButton: {
        width:'92%',
      padding: appSpacing.base,
      margin: appSpacing.base,
    },
    venueTitle: {
      marginBottom: appSpacing.xsm,
    },
    venueMapImage: {
      width: '100%',
      height: 230,
      resizeMode: 'cover',
      borderRadius: appSpacing.md,
      marginBottom: appSpacing.base,
    },
    buyTicketText: {
      fontWeight: 'bold',
    },
  });
