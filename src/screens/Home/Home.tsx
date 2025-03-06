import React, {useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import CSvgIcons from '../../common-components/CSvgIcons';
import {STACK_SCREENS, SVG_ICONS, TEXT_TYPE} from '../../utils/Enums';
import {useStyles, useTheme} from '../../context/ThemeContext';
import {styles} from './HomeStyles';
import CText from '../../common-components/CText';
import {appSpacing} from '../../theme/CStyles';
import {
  ILocationOption,
  LocationSelectionContent,
} from '../../components/LocationSelectionModal';
import CBottomModal from '../../common-components/CBottomModal';
import {LOCATIONS} from '../../utils/appConstants';

const Home = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<ILocationOption>(
    LOCATIONS[0],
  );

  const [selectedLocation, setSelectedLocation] = useState<ILocationOption>(
    LOCATIONS[0],
  );

  const {theme} = useTheme();
  const st = useStyles(styles);
  const handleConfirmLocation = () => {
    setModalVisible(false);
    setCurrentLocation(selectedLocation);
  };

  const eventCategories = [
    'Music Concert',
    'Festival',
    'Exhibition',
    'Stand Up Show',
    'Theater',
  ];

  const trendingEvents = [
    {
      id: 2,
      name: 'Holi: Colors of Joy',
      venue: 'Polo Grand Club & Resort, Thane',
      date: 'March 15 2023',
      price: '₹ 1000',
      image: require('../../assets/images/holi.jpg'),
    },
    {
      id: 1,
      name: 'Coldplay: Music of the Spheres',
      venue: 'Narend Modi Stadium',
      date: 'November 15 2024',
      price: '₹ 10,000',
      image: require('../../assets/images/coldplay2.jpg'),
    },
    {
      id: 3,
      name: 'Am I Sloth!!',
      venue: 'Habitat, Lower Parel',
      date: 'March 20 2023',
      price: '₹ 1500',
      image: require('../../assets/images/standup.jpg'),
    },
  ];

  const nearbyEvents = [
    {
      id: 1,
      name: 'Muse: Will of the People',
      venue: 'Daman',
      date: 'April 3, 2025',
      price: '₹ 1500',
      image: require('../../assets/images/club.jpg'),
    },
    {
      id: 2,
      name: 'One Direction: Where We Are',
      venue: 'Jio Ground',
      date: 'Oct 29, 2023',
      price: '₹ 5500*',
      image: require('../../assets/images/concet1.jpg'),
    },
    {
      id: 3,
      name: 'Garba by Karnavati',
      venue: 'GMDC Ahmedabad',
      date: 'Oct 15, 2025',
      price: 'Free',
      image: require('../../assets/images/garba.jpg'),
    },
  ];

  const handleNavigation = () => {
    navigation.navigate(STACK_SCREENS.EventDetails);
  };

  return (
    <>
      <View style={st.header}>
        <TouchableOpacity>
          <CSvgIcons color={theme.text_primary} name={SVG_ICONS.MenuIcon} />
        </TouchableOpacity>
        <View>
          <CSvgIcons
            name={SVG_ICONS.HappningLogo}
            color={theme.primary}
            width={180}
            height={85}
          />
        </View>
        <TouchableOpacity>
          <CSvgIcons
            color={theme.text_primary}
            name={SVG_ICONS.NotificationIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={st.container}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={st.locationContainer}>
          <CSvgIcons size={24} name={SVG_ICONS.LocationIcon} />
          <View style={{paddingHorizontal: appSpacing.sm}}>
            <CText
              textType={TEXT_TYPE.SectionTitle}
              style={{color: theme.primary}}>
              {currentLocation.title}
            </CText>
            <CText numberOfLines={1} textType={TEXT_TYPE.SecondaryText}>
              {currentLocation.subtitle}
            </CText>
          </View>
        </TouchableOpacity>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={st.categoriesContainer}>
          {eventCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                st.categoryButton,
                category === 'Music Concert' && st.activeCategoryButton,
              ]}>
              <CText
                style={[category === 'Music Concert' && st.activeCategoryText]}>
                {category}
              </CText>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={st.sectionContainer}>
          <View style={st.sectionHeader}>
            <CText textType={TEXT_TYPE.SectionTitle}>Trending Events</CText>
            <TouchableOpacity>
              <CText style={st.seeAllText}>See all</CText>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={st.trendingEventsContainer}>
            {trendingEvents.map(event => (
              <TouchableOpacity
                key={event.id}
                onPress={handleNavigation}
                style={st.trendingEventCard}>
                <Image source={event.image} style={st.trendingEventImage} />
                <View style={st.trendingEventDetails}>
                  <CText numberOfLines={1} style={st.eventName}>
                    {event.name}
                  </CText>
                  <CText
                    textType={TEXT_TYPE.SecondaryText}
                    numberOfLines={1}
                    style={st.eventVenue}>
                    {event.venue}
                  </CText>
                  <CText
                    textType={TEXT_TYPE.SecondaryText}
                    numberOfLines={1}
                    style={st.eventDate}>
                    {event.date}
                  </CText>
                  <CText numberOfLines={1} style={st.eventPrice}>
                    {event.price}
                  </CText>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={st.sectionContainer}>
          <View style={st.sectionHeader}>
            <CText textType={TEXT_TYPE.SectionTitle}>Events Near You</CText>
            <TouchableOpacity>
              <CText style={st.seeAllText}>See all</CText>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={st.nearbyEventsContainer}>
            {nearbyEvents.map(event => (
              <TouchableOpacity
                key={event.id}
                onPress={handleNavigation}
                style={st.nearbyEventCard}>
                <Image source={event.image} style={st.nearbyEventImage} />
                <View style={st.nearbyEventDetails}>
                  <CText style={st.eventName} numberOfLines={1}>
                    {event.name}
                  </CText>
                  <CText
                    textType={TEXT_TYPE.SecondaryText}
                    style={st.eventVenue}>
                    {event.venue}
                  </CText>
                  <CText
                    textType={TEXT_TYPE.SecondaryText}
                    style={st.eventDate}>
                    {event.date}
                  </CText>
                  <CText style={st.eventPrice}>{event.price}</CText>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <CBottomModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onConfirm={handleConfirmLocation}
          confirmText="Confirm">
          <LocationSelectionContent
            onLocationSelect={location => setSelectedLocation(location)}
          />
        </CBottomModal>
      </ScrollView>
    </>
  );
};

export default Home;
