import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {STACK_SCREENS, SVG_ICONS, TEXT_TYPE} from '../../utils/Enums';
import CSvgIcons from '../../common-components/CSvgIcons';
import CText from '../../common-components/CText';
import {useStyles, useTheme} from '../../context/ThemeContext';
import {styles} from './EventDetailsStyles';
import useHideTabBar from '../../common-components/useHideBar';
import CButton from '../../common-components/CButton';

const EventDetails = ({navigation}: any) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const {theme} = useTheme();
  const st = useStyles(styles);

  useHideTabBar();

  const eventData = {
    name: 'Holi: Colors of Joy',
    venue: 'Polo Grand Club & Resort, Thane',
    date: 'March 15, 2025',
    price: '₹ 1000',
    participants: '50K+ Participants',
    description:
      'This Time Again we`re Glad to announce our 8th Season is Back! we are excited to present you all Something huge Like Never done before ! It`s an Land of having an unique music Setup to have an amazing pleasure time and atmosphere towards the party Lovers with your friends & family. we want people to be Unite and happy to celebrate HOLI WITH POOL AND COLOURS With us !!! Excited to see you all and celebrate holi with you guys!!',
    image: require('../../assets/images/holicover.jpg'),
  };
  const handleNavigation = () => {
    navigation.navigate(STACK_SCREENS.SeatSelactions);
  };

  return (
    <View style={st.mainContainer}>
      <ScrollView style={st.container} showsVerticalScrollIndicator={false}>
        <View style={st.header}>
          <TouchableOpacity
            style={st.backButton}
            onPress={() => navigation.goBack()}>
            <CSvgIcons size={30} name={SVG_ICONS.BackIcon} />
          </TouchableOpacity>
          <Image
            source={eventData.image}
            style={st.eventHeaderImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={st.share}>
            <CSvgIcons size={24} name={SVG_ICONS.ShareIcon} />
          </TouchableOpacity>
        </View>

        <View style={st.eventDetailsContainer}>
          <CText textType={TEXT_TYPE.PageTitle} style={st.eventTitle}>
            {eventData.name}
          </CText>
          <View style={st.eventMetaContainer}>
            <View style={st.eventMetaItem}>
              <CSvgIcons name={SVG_ICONS.LocationIcon} size={16} />
              <CText style={st.eventMetaText}>{eventData.venue}</CText>
            </View>
            <View style={st.eventMetaItem}>
              <CSvgIcons
                color={theme.primary}
                name={SVG_ICONS.BookingIcon}
                size={16}
              />
              <CText style={st.eventMetaText}>{eventData.date}</CText>
            </View>
            <View style={st.eventMetaItem}>
              <CSvgIcons
                color={theme.primary}
                name={SVG_ICONS.AccountIcon}
                size={16}
              />
              <CText style={st.eventMetaText}>{eventData.participants}</CText>
            </View>
          </View>
        </View>
        <View style={st.detailsOverlayContainer}>
          <View>
            <CText textType={TEXT_TYPE.SectionTitle}>Description</CText>
            <CText
              style={st.descriptionText}
              numberOfLines={showFullDescription ? undefined : 3}>
              {eventData.description}
            </CText>
            <TouchableOpacity onPress={toggleDescription}>
              <CText style={st.readMoreText}>
                {showFullDescription ? 'Read Less' : 'Read More'}
              </CText>
            </TouchableOpacity>
          </View>
          <View>
            <CText textType={TEXT_TYPE.SectionTitle} style={st.venueTitle}>
              Venue & Location
            </CText>
            <Image
              source={require('../../assets/images/mapimage.jpg')}
              style={st.venueMapImage}
            />
          </View>
        </View>
      </ScrollView>

      <CButton
        buttonStyle={st.buyTicketButton}
        textStyle={st.buyTicketText}
        onPress={handleNavigation}
        title={`Buy Ticket - ${eventData.price}`}></CButton>
    </View>
  );
};

export default EventDetails;
