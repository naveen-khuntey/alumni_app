import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Image } from 'react-native';
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
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Events</Text>
      </View> */}

      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header1}>
          <Image
            source={require('../assets/images/goldenjublebg.jpg')} 
            style={styles.headerBackground}
          />
          <Text style={styles.headerText1}>EVENTS</Text>
        </View>
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
  header1: {
    position: 'relative',
    width: '100%',
    height: 120,
  },
  headerBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Background image covers the header
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText1: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // White text for visibility
    zIndex: 10, // Ensure text is on top of the background image
  },
  container: {
    flex: 1,
    marginTop: 20, // Adjust to make space for the header
    backgroundColor: '#f9f9f9',
  },
});

export default EventList;
