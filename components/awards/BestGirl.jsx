import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native';
import HomeFooter from '../home/footer/Footer';
import { COLORS } from '../../constants';
function BestGirl() {
  const openLink = () => {
    Linking.openURL('https://alum.nitrkl.ac.in/docs/Eligibility_Criteria_for_1970_Batch_Alumni_Gold_Medal-Revised.pdf');
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Best All-rounder among Girl Students of B Tech Course</Text>
            <View style={styles.line} /> 
            <Text style={styles.subtext}>Eligibility: Female Students of the Institute who have completed their final year B Tech.</Text>
            <Text style={styles.subtext}>CGPA: 7.5 and above</Text>
            <Text style={styles.subtext}>The Best All-rounder among Girl Students of B Tech Course will be selected on the basis of her performance in academic as well as in Extra-curricular and Co-curricular activities.</Text>
            <TouchableOpacity onPress={openLink}>
              <Text style={styles.linkText}>
                  Policy for Best B.tech Girl Student
              </Text>
            </TouchableOpacity>
        </View>
        <View>
            <HomeFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
      backgroundColor: '#F0F4F8',
      padding: 16,
      margin: 10,
      borderRadius: 8,
      marginBottom: 20,
      paddingBottom:25,
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#103166',
      marginBottom: 8,
  },
  line: {
      height: 2, // Line height
      backgroundColor: '#103166', // Blue color for the line
      marginBottom: 16, // Space below the line
  },
  linkText: {
      fontSize: 16,
      color: '#1E90FF',
      textDecorationLine: 'underline',
      marginTop: 16,
  },
  subtext:{
    marginVertical: 5,
    fontSize: 17,
  }
});
export default BestGirl
