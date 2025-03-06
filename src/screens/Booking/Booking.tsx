import {View, Text} from 'react-native';
import React from 'react';
import CText from '../../common-components/CText';
import {CStyles} from '../../theme/CStyles';
import {TEXT_TYPE} from '../../utils/Enums';
import {useTheme} from '../../context/ThemeContext';

export default function Booking() {
  const {theme} = useTheme();
  return (
    <View style={[{backgroundColor: theme.base_secondary}, CStyles.cetered]}>
      <CText textType={TEXT_TYPE.PageTitle}>Booking</CText>
    </View>
  );
}
