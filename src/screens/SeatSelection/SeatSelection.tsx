import React, {useState} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {useStyles, useTheme} from '../../context/ThemeContext';
import {styles} from './SeatSelectionStyles';
import CSvgIcons from '../../common-components/CSvgIcons';
import {SVG_ICONS, TEXT_TYPE} from '../../utils/Enums';
import CText from '../../common-components/CText';
import {appSpacing} from '../../theme/CStyles';
import CButton from '../../common-components/CButton';
import {SEATS_PRICES} from '../../utils/appConstants';
import useHideTabBar from '../../common-components/useHideBar';

const SeatSelection = ({navigation}: any) => {
  const [seatCount, setSeatCount] = useState(0);

  const [selectedType, setSelectedType] = useState(SEATS_PRICES[0]);
  const {theme} = useTheme();
  const st = useStyles(styles);

  const handleSeatTypeChange = (type: {name: string; price: number}) => {
    setSelectedType(type);
  };

  const handleSeatCountChange = (change: number) => {
    const newCount = seatCount + change;
    if (newCount > 0 && newCount <= 10) {
      setSeatCount(newCount);
    }
  };

  const calculateTotalPrice = () => {
    return seatCount * selectedType.price;
  };

  return (
    <SafeAreaView style={st.container}>
      <View style={{paddingHorizontal: appSpacing.base}}>
        <View style={st.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CSvgIcons
              size={30}
              color={theme.text_primary}
              name={SVG_ICONS.BackIcon}
            />
          </TouchableOpacity>
          <CText textType={TEXT_TYPE.PageTitle}>Select Seat</CText>
          <View style={{width: appSpacing.base * 2}} />
        </View>

        <CText
          textType={TEXT_TYPE.SectionTitle}
          style={{marginBottom: appSpacing.md}}>
          Seat Type
        </CText>
        <View style={st.seatTypeContainer}>
          {SEATS_PRICES &&
            SEATS_PRICES.map(seat => (
              <TouchableOpacity
                key={seat.name}
                style={[
                  st.seatTypeButton,
                  seat.name === selectedType.name
                    ? st.activeSeatTypeButton
                    : st.inactiveSeatTypeButton,
                ]}
                onPress={() => handleSeatTypeChange(seat)}>
                <CText
                  style={[
                    st.seatTypeText,
                    seat.name === selectedType.name
                      ? st.activeSeatTypeText
                      : st.inactiveSeatTypeText,
                  ]}>
                  {seat.name}
                </CText>
              </TouchableOpacity>
            ))}
        </View>

        <View style={st.seatContainer}>
          <CText
            textType={TEXT_TYPE.SectionTitle}
            style={{marginBottom: appSpacing.md}}>
            Seat
          </CText>
          <View style={st.counterContainer}>
            <TouchableOpacity
              style={st.counterButton}
              onPress={() => handleSeatCountChange(-1)}>
              <CText style={st.counterButtonText}>-</CText>
            </TouchableOpacity>
            <CText style={st.counterValue}>{seatCount}</CText>
            <TouchableOpacity
              style={st.counterButton}
              onPress={() => handleSeatCountChange(1)}>
              <CText style={st.counterButtonText}>+</CText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={st.priceDetailsContainer}>
          <CText
            textType={TEXT_TYPE.SectionTitle}
            style={{marginBottom: appSpacing.md}}>
            Seat Price
          </CText>
          <View style={st.priceRow}>
            <CText>{`${selectedType.name} Seat`}</CText>
            <CText>{`₹ ${selectedType.price}`}</CText>
          </View>
          <View style={st.priceRow}>
            <CText> </CText>
            <CText>{`${seatCount} × ₹ ${selectedType.price}`}</CText>
          </View>
        </View>
      </View>
      <View style={st.continueButtonContainer}>
        <View style={st.totalPriceContainer}>
          <View style={st.totalPriceRow}>
            <CText style={st.totalPriceLabel}>Total Price</CText>
            <CText
              style={st.totalPriceValue}>{`₹ ${calculateTotalPrice()}`}</CText>
          </View>
        </View>
        <CButton textStyle={st.continueButtonText} title="Pay Now"></CButton>
      </View>
    </SafeAreaView>
  );
};

export default SeatSelection;
