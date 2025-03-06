import { StyleSheet } from "react-native";
import { appSpacing } from "../theme/CStyles";
import { ITheme } from "../theme/Theme";

export const LocationSelectionStyles = (theme: ITheme) =>
    StyleSheet.create({
      container: {
        paddingVertical: appSpacing.xsm,
      },
      header: {
        marginBottom: appSpacing.xsm,
      },
      headerTitle: {
        marginBottom: appSpacing.base,
      },
      permissionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: appSpacing.sm,
      },
      permissionText: {
        fontWeight: '600',
      },
      sectionTitle: {
        color: theme.text_secondary,
      },
      locationOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: appSpacing.md,
        justifyContent: 'space-between',
      },
      locationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
      locationIcon: {
        marginRight: appSpacing.sm,
      },
      locationText: {
        flex: 1,
      },
      locationTitle: {
        fontWeight: '500',
      },
      locationSubtitle: {
        color: theme.text_secondary,
        marginTop: 2,
      },
      radioButton: {
        height: 20,
        width: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: theme.border_blur,
        alignItems: 'center',
        justifyContent: 'center',
      },
      radioButtonSelected: {
        borderColor: theme.primary,
      },
      radioButtonInner: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: theme.primary,
      },
      switchColor: {
        trackColor: {false: theme.border_blur, true: theme.secondary},
        thumbColor: {false: theme.text_secondary, true: theme.primary},
      },
    });
