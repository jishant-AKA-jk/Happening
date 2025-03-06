import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useStyles, useTheme} from '../../context/ThemeContext';
import {signinStyles} from './SigninStyles';
import CSvgIcons from '../../common-components/CSvgIcons';
import {SVG_ICONS, TEXT_TYPE} from '../../utils/Enums';
import CTextInput from '../../common-components/CTextInput';
import {CStyles} from '../../theme/CStyles';
import CButton from '../../common-components/CButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAuth} from '../../context/AuthContext';
import CText from '../../common-components/CText';
import {OTP, VALID_USERS} from '../../utils/appConstants';

export default function SignIn() {
  const [textInputVal, setTextInputVal] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [error, showError] = useState('');
  const {login} = useAuth();
  const {theme} = useTheme();
  const st = useStyles(signinStyles);
  const insets = useSafeAreaInsets();
  const inputRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    if (!isOtpSent && VALID_USERS.includes(textInputVal)) {
      setIsOtpSent(true);
      showError('');
      setTextInputVal('');
    } else if (!isOtpSent && !VALID_USERS.includes(textInputVal)) {
      setTextInputVal('');
      showError('User not found (Tip: try jishant2006@gmail.com)');
    } else if (isOtpSent && textInputVal !== OTP) {
      showError('Invalid OTP (Tip: try 778899)');
    } else if (isOtpSent && textInputVal === OTP) {
      login();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        style={CStyles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={st.container}>
            <CSvgIcons
              height={85}
              style={{marginTop: 80}}
              width={180}
              name={SVG_ICONS.HappningLogo}
              color={theme.primary}
            />
            <CText style={st.tagline}>
              Login now to find whats happening around you
            </CText>
            <View style={st.input}>
              <CTextInput
                autoFocus
                value={textInputVal}
                ref={inputRef}
                placeholderText={
                  isOtpSent ? 'Enter OTP' : 'Email address or mobile number'
                }
                onChangeText={setTextInputVal}
              />
              {error.length > 0 && (
                <CText textType={TEXT_TYPE.ErrorText}>{error}</CText>
              )}
            </View>

            <CButton
              title={isOtpSent ? 'Sign In' : 'Send OTP'}
              disabled={textInputVal?.length == 0}
              onPress={() => handleSubmit()}
            />
            <View style={st.social}>
              <CText>or </CText>
              <CText>Sign in with other accounts</CText>
              <CSvgIcons
                style={CStyles.marginTopMd}
                width={140}
                height={40}
                name={SVG_ICONS.SocialMediaIcon}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
