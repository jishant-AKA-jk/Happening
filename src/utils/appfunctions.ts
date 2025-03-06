import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const groupStyles = (
  ...styles: (ViewStyle | TextStyle | ImageStyle | object | null | undefined)[]
) => StyleSheet.flatten(styles.filter(Boolean));

export function hexToRgba(hex: string, opacity: number): string {
  const hexWithoutHash = hex.replace('#', '');

  if (hexWithoutHash.length === 6) {
    const r = parseInt(hexWithoutHash.substring(0, 2), 16);
    const g = parseInt(hexWithoutHash.substring(2, 4), 16);
    const b = parseInt(hexWithoutHash.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return hex;
}
