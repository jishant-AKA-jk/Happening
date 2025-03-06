import { StyleSheet } from "react-native";
import { ITheme } from "../../theme/Theme";
import { appSpacing } from "../../theme/CStyles";

export const styles  =(theme:ITheme) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.base_secondary,
      paddingHorizontal: appSpacing.base,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: appSpacing.base,
      backgroundColor:theme.base_primary
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.base_primary,
      borderRadius: appSpacing.md,
      paddingHorizontal: appSpacing.base,
      paddingVertical: appSpacing.sm,
      marginVertical: appSpacing.base,
    },
    categoriesContainer: {
      paddingBottom: appSpacing.base,
    },
    categoryButton: {
      marginRight: appSpacing.sm,
      paddingHorizontal: appSpacing.base,
      paddingVertical: 6,
      borderRadius: appSpacing.md,
      backgroundColor: theme.base_primary,
    },
    activeCategoryButton: {
      backgroundColor: theme.primary,
    },
    activeCategoryText: {
      color:theme.text_on_primary,
    },
    sectionContainer: {
      marginBottom: appSpacing.base,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: appSpacing.sm,
    },
    seeAllText: {
      color: theme.primary_disabled,
      fontWeight:'bold'
    },
    trendingEventsContainer: {
      paddingBottom: appSpacing.sm,
    },
    trendingEventCard: {
      width: 250,
      marginRight: appSpacing.base,
      borderRadius: appSpacing.md,
      padding:appSpacing.sm,
      backgroundColor: theme.base_primary,
    },
    trendingEventImage: {
      width: '100%',
      height: 180,
      borderRadius: appSpacing.md,
    },
    trendingEventDetails: {
      padding: appSpacing.sm,
      rowGap:2
    },
    nearbyEventsContainer: {
      paddingBottom: appSpacing.sm
    },
    nearbyEventCard: {
      width: 180,
      marginRight: appSpacing.base,
      borderRadius: appSpacing.md,
      backgroundColor: theme.base_primary,
      rowGap:2,
    },
    nearbyEventImage: {
      width: '100%',
      height: 120,
      borderRadius: appSpacing.md,
    },
    nearbyEventDetails: {
      padding: appSpacing.sm,
    },
    eventName: {
      fontWeight: 'bold',
    },
    eventVenue: {
      color: theme.text_secondary,
    },
    eventDate: {
      color:  theme.text_secondary,
    },
    eventPrice: {
      color: theme.primary,
      fontWeight: 'bold',
    },
  });
