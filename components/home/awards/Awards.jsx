import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// Sample alumni data
const alumniData = [
  {
    id: '1',
    name: 'John Doe',
    industry: 'Tech',
    photo: 'https://picsum.photos/200/',
  },
  {
    id: '2',
    name: 'Jane Smith',
    industry: 'Finance',
    photo: 'https://picsum.photos/200/',
  },
  {
    id: '3',
    name: 'Michael Johnson',
    industry: 'Healthcare',
    photo: 'https://picsum.photos/200/',
  },
  // Add more alumni as needed
];

const AwardsCard = () => {
  const { width } = Dimensions.get('window');

  const renderItem = ({ item }) => (
    <View style={[styles.card]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.photo }} style={styles.photo} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.industry}>{item.industry}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Awards</Text>
      <View style={styles.horizontalLine} />
      <FlatList
        data={alumniData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        pagingEnabled={true} // This ensures proper snapping to cards
        decelerationRate="fast" // Ensures smooth scrolling
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
    marginBottom: 10,
    textAlign: 'center',
  },
  horizontalLine: {
    width: '90%',  // 90% of the screen width
    height: 2,     // Line thickness
    backgroundColor: '#000',  // Line color
    marginBottom: 20,  // Space between the line and the content below
    alignSelf: 'center', // Center the line horizontally
  },
  card: {
    borderRadius: 15,
    padding: 15,
    margin: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',  // A subtle border to make the image stand out
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  industry: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2575fc',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default AwardsCard;
