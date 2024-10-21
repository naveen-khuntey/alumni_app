import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { COLORS } from '../../constants';  // Assuming you have a COLORS file for theme

const EventCard = ({ event }) => {
  return (
    <View style={styles.card}>
      {/* Event Image */}
      <Image source={require('../../assets/images/goldenjublebg.jpg')} style={styles.image} />
      
      {/* Event Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventDate}>{event.date}</Text>
        
        {/* Know More Button */}
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(event.link)}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    margin: 20,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 15,
    backgroundColor: '#f0f4f7',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  button: {
    backgroundColor: COLORS.blue,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default EventCard;
