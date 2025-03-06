import React from 'react';
import {SvgProps, SvgXml} from 'react-native-svg';
import {ColorValue} from 'react-native';
import {SVG_ICONS} from '../utils/Enums';
import {
  accountIcon,
  backIcon,
  bookingIcon,
  happningLogo,
  homeIcon,
  locationIcon,
  menuIcon,
  notificationIcon,
  searchIcon,
  shareIcon,
  socialIcons,
  wishlistIcon,
} from '../assets/Icons';
import {useTheme} from '../context/ThemeContext';

interface ISVGProps extends SvgProps {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  style?: object;
  fill?: ColorValue;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

const iconMap: Record<string, string> = {
  [SVG_ICONS.HomeIcon]: homeIcon,
  [SVG_ICONS.HappningLogo]: happningLogo,
  [SVG_ICONS.SocialMediaIcon]: socialIcons,
  [SVG_ICONS.MenuIcon]: menuIcon,
  [SVG_ICONS.NotificationIcon]: notificationIcon,
  [SVG_ICONS.LocationIcon]: locationIcon,
  [SVG_ICONS.AccountIcon]: accountIcon,
  [SVG_ICONS.WishlistIcon]: wishlistIcon,
  [SVG_ICONS.BookingIcon]: bookingIcon,
  [SVG_ICONS.SearchIcon]: searchIcon,
  [SVG_ICONS.BackIcon]: backIcon,
  [SVG_ICONS.ShareIcon]: shareIcon,
};

export default function CSvgIcons({
  name,
  size = 20,
  width,
  height,
  ...inputProps
}: Readonly<ISVGProps>) {
  const {theme} = useTheme();

  const xml = iconMap[name];

  if (!xml) {
    return null;
  }

  return (
    <SvgXml
      xml={xml}
      color={inputProps.fill ?? theme.secondary}
      width={width ?? size}
      height={height ?? size}
      {...inputProps}
    />
  );
}
