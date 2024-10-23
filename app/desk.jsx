import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DeskDirector, DeskDean } from '../components'; 
import { COLORS } from '../constants';  // Assuming COLORS is defined elsewhere in your app

const Desk = () => {
  const [selectedTab, setSelectedTab] = useState('director'); // Default tab is 'director'

  // Function to render the correct card based on the selected tab
  const renderCard = () => {
    if (selectedTab === 'director') {
      return <DeskDirector />;
    } else {
      return <DeskDean />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'director' && styles.selectedButton]}
          onPress={() => setSelectedTab('director')}
        >
          <Text style={[styles.buttonText, selectedTab === 'director' && styles.selectedButtonText]}>
            Director
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedTab === 'deanAIIR' && styles.selectedButton]}
          onPress={() => setSelectedTab('deanAIIR')}
        >
          <Text style={[styles.buttonText, selectedTab === 'deanAIIR' && styles.selectedButtonText]}>
            Dean AIIR
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        {renderCard()}
      </View>
    </View>
  );
};

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
    // paddingHorizontal: 20,
  },
});

export default Desk;
