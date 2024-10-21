import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import { EventCard, HomeFooter } from '../components'; // Import the EventCard component
import { COLORS } from '../constants';

const EventList = () => {
  // Sample event data
  const events = [
    {
      id: '1',
      title: 'Global Alumni Meet 2024',
      date: '20-12-2024 to 22-12-2024',
      link: 'https://gam2024.nitrkl.ac.in/',
      image: require('../assets/images/goldenjublebg.jpg'), // Replace with the actual image
    },
    {
      id: '2',
      title: 'Global Alumni Meet 2024',
      date: '20-12-2024 to 22-12-2024',
      link: 'https://gam2024.nitrkl.ac.in/',
      image: require('../assets/images/goldenjublebg.jpg'), // Replace with the actual image
    },
    {
      id: '3',
      title: 'Global Alumni Meet 2024',
      date: '20-12-2024 to 22-12-2024',
      link: 'https://gam2024.nitrkl.ac.in/',
      image: require('../assets/images/goldenjublebg.jpg'), // Replace with the actual image
    },
    {
      id: '4',
      title: 'Global Alumni Meet 2024',
      date: '20-12-2024 to 22-12-2024',
      link: 'https://gam2024.nitrkl.ac.in/',
      image: require('../assets/images/goldenjublebg.jpg'), // Replace with the actual image
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* Sticky Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Events</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>
        <View style={styles.container}>
          <HomeFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#103166', // Change as per your theme
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Sticky effect
    top: 0,
    zIndex: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginTop: 70, // Adjust to make space for the header
    backgroundColor: '#f9f9f9',
  },
});

export default EventList;
