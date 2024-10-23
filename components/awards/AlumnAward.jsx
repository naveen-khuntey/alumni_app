import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../../constants'; // Assuming you have COLORS defined
import  HomeFooter from '../home/footer/Footer';

// Dummy data for alumni awards by year (from 2009 to 2024)
const alumniAwardData = {
  "2009": [{ name: "Dr. John Doe", award: "Lifetime Achievement Award", description: "Recognized for contributions in Biomedical Research." }],
  "2010": [{ name: "Jane Smith", award: "Outstanding Leadership Award", description: "For exceptional leadership in the construction industry." }],
  "2011": [{ name: "Michael Johnson", award: "Innovator Award", description: "For innovations in chemical engineering." }],
  "2012": [{ name: "Sara Wilson", award: "Research Excellence Award", description: "In recognition of groundbreaking work in ceramics." }],
  "2013": [{ name: "Emily Davis", award: "Mentorship Award", description: "For exceptional mentorship in the field of chemistry." }],
  "2014": [{ name: "Ravi Kumar", award: "Engineer of the Year", description: "For contributions to electronics engineering." }],
  "2015": [{ name: "Lalita Mehta", award: "Pioneer Award", description: "For her pioneering work in electrical engineering." }],
  "2016": [{ name: "Samuel Gupta", award: "Scientific Achievement Award", description: "For contributions to instrumentation sciences." }],
  "2017": [{ name: "Ashley Brown", award: "Environmental Impact Award", description: "For impactful research in atmospheric sciences." }],
  "2018": [{ name: "Kim Lee", award: "Industry Leadership Award", description: "Recognized for leadership in the food technology industry." }],
  "2019": [{ name: "Dr. Rachel Green", award: "Academic Excellence Award", description: "For outstanding contributions to social sciences." }],
  "2020": [{ name: "Mark Thompson", award: "Innovative Design Award", description: "For innovations in industrial design." }],
  "2021": [{ name: "Dr. Olivia Harris", award: "Biological Sciences Award", description: "For contributions to biological research." }],
  "2022": [{ name: "Nathan White", award: "Mathematics Excellence Award", description: "For groundbreaking work in mathematics." }],
  "2023": [{ name: "Adam Scott", award: "Engineering Achievement Award", description: "For contributions to mechanical engineering." }],
  "2024": [{ name: "Martha Anderson", award: "Materials Science Award", description: "For contributions to materials engineering." }]
};

// Years for the Picker (2009 to 2024)
const years = [
  { label: "Select Year", value: "" },
  { label: "2009", value: "2009" },
  { label: "2010", value: "2010" },
  { label: "2011", value: "2011" },
  { label: "2012", value: "2012" },
  { label: "2013", value: "2013" },
  { label: "2014", value: "2014" },
  { label: "2015", value: "2015" },
  { label: "2016", value: "2016" },
  { label: "2017", value: "2017" },
  { label: "2018", value: "2018" },
  { label: "2019", value: "2019" },
  { label: "2020", value: "2020" },
  { label: "2021", value: "2021" },
  { label: "2022", value: "2022" },
  { label: "2023", value: "2023" },
  { label: "2024", value: "2024" }
];

const AlumnAward = () => {
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header1}>
          <Image
            source={require('../../assets/images/goldenjublebg.jpg')} 
            style={styles.headerBackground}
          />
          <Text style={styles.headerText1}>ALUMNI AWARDS</Text>
        </View>

        {/* Year Selection */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>By Year</Text>
          <View style={styles.horizontalLine} />
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            {years.map(year => (
              <Picker.Item label={year.label} value={year.value} key={year.value} />
            ))}
          </Picker>
        </View>

        {/* Alumni Awards */}
        {selectedYear && alumniAwardData[selectedYear] ? (
          <View style={styles.alumniContainer}>
            {alumniAwardData[selectedYear].map((alumnus, index) => (
              <View key={index} style={styles.alumniCard}>
                <Image
                  source={require('../../assets/images/Director3.jpg')} // Use a default image or alumni photo if available
                  style={styles.alumniImage}
                />
                <View style={styles.alumniInfo}>
                  <Text style={styles.alumniName}>{alumnus.name}</Text>
                  <Text style={styles.alumniAward}>Award: {alumnus.award}</Text>
                  <Text style={styles.alumniDescription}>{alumnus.description}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.noAlumniText}>Please select a year to see alumni awards.</Text>
        )}

        <View>
          <HomeFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: COLORS.lightWhite,
  },
  header1: {
    position: 'relative',
    width: '100%',
    height: 120,
  },
  headerBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerText1: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 10,
  },
  dropdownContainer: {
    backgroundColor: '#F0F4F8',
    padding: 16,
    margin: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#103166', // Blue text color for the "By Year" label
    marginBottom: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#103166', // Blue horizontal line below the label
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  alumniContainer: {
    margin: 15,
  },
  alumniCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  alumniImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  alumniInfo: {
    flex: 1,
  },
  alumniName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  alumniAward: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  alumniDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  noAlumniText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginVertical: 35,
  },
});

export default AlumnAward;
