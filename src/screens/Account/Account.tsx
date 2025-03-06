import {View, Text} from 'react-native';
import React from 'react';
import CButton from '../../common-components/CButton';
import {CStyles} from '../../theme/CStyles';
import {useAuth} from '../../context/AuthContext';
import {useTheme} from '../../context/ThemeContext';

export default function Account() {
  const {logout} = useAuth();
  const {theme} = useTheme();
  return (
    <View style={[{backgroundColor: theme.base_secondary}, CStyles.cetered]}>
      <CButton onPress={logout} buttonStyle={{width: '50%'}} title="Logout" />
    </View>
  );
}
