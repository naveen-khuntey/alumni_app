import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  HomeFooter from '../home/footer/Footer';
import { COLORS } from '../../constants';

const DeanAIIRCard = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/goldenjublebg.jpg')} 
            style={styles.headerBackground}
          />
          <Text style={styles.headerText}>DEAN AIIR</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.messageContainer}>
            <Text style={styles.messageHeader}>Message From Dean AIIR</Text>
            <Text style={styles.messageText}>
              The ‘ALUMNI’ link of the Institute website has now been reset to these pages which provide an information highway
              between the institute and its alumni. It also gives direct links to NITRAA and its chapters around the world. A rationalized framework
              provides a forum for many different types of information dispersal...
            </Text>
            <Text style={styles.messageText}>
              I am sure the arrangement will serve us - faculty, students, alumni, and the public better than before. Some of our students: Ranjan Mittal, 
              Guru Balakrishna, Anujit Bagchi, and their friends have worked very hard to make it possible...
            </Text>
            <Text style={styles.messageText}>
              On behalf of the institute, I record my deep appreciation of their contribution. I also record my gratitude to Prof. K. C. Patra, 
              a 1981 Alumnus and Ex-Dean of Alumni Relations, who has organized the creation of this new look website...
            </Text>
          </View>
        </View>
        <View>
          <HomeFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  header: {
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
  deanImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover', // Ensures the image covers the top section
  },
  detailsContainer: {
    backgroundColor: '#F2E7DB', // Light brown section background
    padding: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  messageContainer: {
    backgroundColor: '#F3F8FF', // Light blue section for message
    padding: 15,
  },
  messageHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2575fc',
    marginBottom: 10,
  },
  messageText: {
    marginBottom: 10,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default DeanAIIRCard;
