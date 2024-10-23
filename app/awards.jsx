import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AlumnAward, FeaturedAlumni, BestGirl } from '../components';
import { COLORS } from '../constants';
export default function Awards() {
  const [selectedTab, setSelectedTab] = useState('alumniAward'); // Default tab is 'Alumni Award'

  // Function to render the correct component based on the selected tab
  const renderCard = () => {
    switch (selectedTab) {
      case 'alumniAward':
        return <AlumnAward />;
      case 'featuredAlumni':
        return <FeaturedAlumni />;
      case 'bestAllRounder':
        return <BestGirl />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'alumniAward' && styles.selectedButton]}
          onPress={() => setSelectedTab('alumniAward')}
        >
          <Text style={[styles.buttonText, selectedTab === 'alumniAward' && styles.selectedButtonText]}>
            Alumni Award
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedTab === 'featuredAlumni' && styles.selectedButton]}
          onPress={() => setSelectedTab('featuredAlumni')}
        >
          <Text style={[styles.buttonText, selectedTab === 'featuredAlumni' && styles.selectedButtonText]}>
            Featured Alumni
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedTab === 'bestAllRounder' && styles.selectedButton]}
          onPress={() => setSelectedTab('bestAllRounder')}
        >
          <Text style={[styles.buttonText, selectedTab === 'bestAllRounder' && styles.selectedButtonText]}>
            Best B.Tech Girl
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.cardContainer}>
        {renderCard()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',  // Default white background for buttons
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.blue,  // Blue border for unselected button
  },
  selectedButton: {
    backgroundColor: COLORS.blue,  // Blue background for the selected button
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.blue,  // Blue text for unselected button
  },
  selectedButtonText: {
    color: '#fff',  // White text for selected button
  },
  cardContainer: {
    flex: 1,
  },
});