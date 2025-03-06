import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {useStyles, useTheme} from '../context/ThemeContext';
import {SVG_ICONS, TEXT_TYPE} from '../utils/Enums';
import CText from '../common-components/CText';
import CSvgIcons from '../common-components/CSvgIcons';
import {LOCATIONS} from '../utils/appConstants';
import {LocationSelectionStyles} from './LocationSelectionStyles';

export interface ILocationOption {
  id: string;
  title: string;
  subtitle: string;
  selected?: boolean;
}

export const LocationSelectionContent = ({
  onLocationSelect,
}: {
  onLocationSelect: (location: ILocationOption) => void;
}) => {
  const {theme} = useTheme();
  const st = useStyles(LocationSelectionStyles);
  const [locationPermission, setLocationPermission] = useState(true);
  const [locations, setLocations] = useState<ILocationOption[]>(LOCATIONS);

  const toggleLocationSelection = (locationId: string) => {
    const updatedLocations = locations.map(location => ({
      ...location,
      selected: location.id === locationId,
    }));

    setLocations(updatedLocations);
    const selectedLocation = updatedLocations.find(loc => loc.selected);
    if (selectedLocation) {
      onLocationSelect(selectedLocation);
    }
  };

  return (
    <View style={st.container}>
      <View style={st.header}>
        <CText textType={TEXT_TYPE.PageTitle} style={st.headerTitle}>
          Select your location
        </CText>

        <View style={st.permissionRow}>
          <CText style={st.permissionText}>Phone location permission</CText>
          <Switch
            value={locationPermission}
            onValueChange={setLocationPermission}
            trackColor={st.switchColor.trackColor}
            thumbColor={
              locationPermission
                ? st.switchColor.thumbColor.true
                : st.switchColor.thumbColor.false
            }
          />
        </View>
      </View>

      <View>
        <CText textType={TEXT_TYPE.SectionTitle} style={st.sectionTitle}>
          Current Location
        </CText>
        <TouchableOpacity
          style={st.locationOption}
          onPress={() => toggleLocationSelection(locations[0].id)}>
          <View style={st.locationInfo}>
            <CSvgIcons
              name={SVG_ICONS.LocationIcon}
              size={24}
              color={theme.primary}
              style={st.locationIcon}
            />
            <View style={st.locationText}>
              <CText numberOfLines={1} style={st.locationTitle}>
                {locations[0].title}
              </CText>
              <CText
                textType={TEXT_TYPE.SecondaryText}
                style={st.locationSubtitle}>
                {locations[0].subtitle}
              </CText>
            </View>
          </View>
          <View
            style={[
              st.radioButton,
              locations[0].selected && st.radioButtonSelected,
            ]}>
            {locations[0].selected && <View style={st.radioButtonInner} />}
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <CText textType={TEXT_TYPE.SectionTitle} style={st.sectionTitle}>
          Recent Locations
        </CText>
        {locations.slice(1).map(location => (
          <TouchableOpacity
            key={location.id}
            style={st.locationOption}
            onPress={() => toggleLocationSelection(location.id)}>
            <View style={st.locationInfo}>
              <CSvgIcons
                name={SVG_ICONS.LocationIcon}
                size={24}
                style={st.locationIcon}
              />
              <View style={st.locationText}>
                <CText style={st.locationTitle}>{location.title}</CText>
                {location.subtitle ? (
                  <CText
                    numberOfLines={1}
                    textType={TEXT_TYPE.SecondaryText}
                    style={st.locationSubtitle}>
                    {location.subtitle}
                  </CText>
                ) : null}
              </View>
            </View>
            <View
              style={[
                st.radioButton,
                location.selected && st.radioButtonSelected,
              ]}>
              {location.selected && <View style={st.radioButtonInner} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
