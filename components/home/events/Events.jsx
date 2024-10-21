import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

// Get screen width for card sizing
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Events = () => {
  // Sample event data
  const eventsData = [
    {
      id: 1,
      image: 'https://picsum.photos/200/300',
      title: 'Alumni Meetup',
      fromDate: 'October 20, 2024',
      toDate: 'October 21, 2024',
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/300',
      title: 'Tech Conference',
      fromDate: 'November 5, 2024',
      toDate: 'November 6, 2024',
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/300',
      title: 'Design Workshop',
      fromDate: 'December 1, 2024',
      toDate: 'December 3, 2024',
    },
    {
      id: 4,
      image: 'https://picsum.photos/200/300',
      title: 'Wildlife Seminar',
      fromDate: 'January 15, 2025',
      toDate: 'January 16, 2025',
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        {/* Event Image */}
        <Image source={{ uri: item.image }} style={styles.cardImage} />

        {/* Event Title */}
        <Text style={styles.cardTitle}>{item.title}</Text>

        {/* Date Range */}
        <Text style={styles.cardDate}>{`${item.fromDate} - ${item.toDate}`}</Text>

        {/* Know More Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Events</Text>
      <View style={styles.horizontalLine} />
      {/* Horizontal FlatList */}
      <FlatList
        data={eventsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  horizontalLine: {
    width: '90%',  // 90% of the screen width
    height: 2,     // Line thickness
    backgroundColor: '#000',  // Line color
    marginBottom: 20,  // Space between the line and the content below
    alignSelf: 'center', // Center the line horizontally
  },
  flatListContainer: {
    paddingLeft: 30,  // Add more padding to the left for better alignment
  },
  card: {
    width: screenWidth * 0.75,  // Make cards 75% of the screen width
    marginHorizontal: 20,  // Increase margin for space between cards
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    padding: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,  // Increase image height for larger display
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 22,  // Larger title font
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardDate: {
    fontSize: 16,  // Slightly bigger font for the date
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,  // Increased padding for the button
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Events;
