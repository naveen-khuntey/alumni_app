import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { COLORS } from '../../constants'; // Assuming you have COLORS defined
import HomeFooter from '../home/footer/Footer';

const alumniData = {
  "BM": [{ name: "Dr. John Doe", year: 1995, description: "Head of Biomedical Research, XYZ University." },{ name: "Dr. John Doe", year: 1995, description: "Head of Biomedical Research, XYZ University." }],
  "CE": [{ name: "Jane Smith", year: 2000, description: "CEO at ABC Construction." },{ name: "Jane Smith", year: 2000, description: "CEO at ABC Construction." }],
  "CH": [{ name: "Michael Johnson", year: 1998, description: "Senior Chemical Engineer at XYZ Ltd." }],
  "CR": [{ name: "Sara Wilson", year: 1992, description: "Lead Researcher at Ceramic Technologies." }],
  "CS": [{ name: "Venkata Narasinham Peri", year: 1991, description: "Partner at Price Water Coopers (PWC), USA." }],
  "CY": [{ name: "Dr. Emily Davis", year: 2005, description: "Head of Chemistry Department, DEF University." }],
  "EC": [{ name: "Ravi Kumar", year: 1997, description: "Head of Electronics at GHI Corp." }],
  "EE": [{ name: "Lalita Mehta", year: 1999, description: "Lead Engineer at JKL Power Systems." }],
  "EI": [{ name: "Samuel Gupta", year: 2003, description: "Principal Scientist at MNO Instruments." }],
  "ER": [{ name: "Ashley Brown", year: 2001, description: "Atmospheric Scientist at PQR Research." }],
  "FP": [{ name: "Kim Lee", year: 2006, description: "Food Technologist at STU Foods." }],
  "HS": [{ name: "Dr. Rachel Green", year: 2010, description: "Professor of Sociology at VWX University." }],
  "ID": [{ name: "Mark Thompson", year: 2004, description: "Industrial Designer at YZA Industries." }],
  "LS": [{ name: "Dr. Olivia Harris", year: 2012, description: "Biologist at BIO Solutions." }],
  "MA": [{ name: "Nathan White", year: 1996, description: "Mathematician at ZYX Corporation." }],
  "ME": [{ name: "Adam Scott", year: 1994, description: "Mechanical Engineer at ABC Mechanics." }],
  "MM": [{ name: "Martha Anderson", year: 2002, description: "Materials Engineer at DEF Alloys." }],
  "MN": [{ name: "David Roberts", year: 1989, description: "Head of Mining Operations at GHI Mining." }],
  "PA": [{ name: "Dr. Linda James", year: 2007, description: "Architect at JKL Architects." }],
  "PH": [{ name: "Dr. Susan Taylor", year: 2009, description: "Professor of Astronomy at MNO University." }],
  "SM": [{ name: "Robert Garcia", year: 2011, description: "Partner at Price Water Coopers (PWC), USA." }]
};

const departments = [
  { label: "Select Department", value: "" },
  { label: "Biotechnology and Medical Engineering (BM)", value: "BM" },
  { label: "Civil Engineering (CE)", value: "CE" },
  { label: "Chemical Engineering (CH)", value: "CH" },
  { label: "Ceramic Engineering (CR)", value: "CR" },
  { label: "Computer Science Engineering (CS)", value: "CS" },
  { label: "Department of Chemistry (CY)", value: "CY" },
  { label: "Electronics and Communication Engineering (EC)", value: "EC" },
  { label: "Electrical Engineering (EE)", value: "EE" },
  { label: "Electronics and Instrumentation Engineering (EI)", value: "EI" },
  { label: "Earth and Atmospheric Sciences (ER)", value: "ER" },
  { label: "Food Processing Engineering (FP)", value: "FP" },
  { label: "Humanities and Social Sciences (HS)", value: "HS" },
  { label: "Industrial Design (ID)", value: "ID" },
  { label: "Life Sciences (LS)", value: "LS" },
  { label: "Department of Mathematics (MA)", value: "MA" },
  { label: "Mechanical Engineering (ME)", value: "ME" },
  { label: "Metallurgical and Materials Engineering (MM)", value: "MM" },
  { label: "Mining Engineering (MN)", value: "MN" },
  { label: "Planning and Architecture (PA)", value: "PA" },
  { label: "Department of Physics and Astronomy (PH)", value: "PH" },
  { label: "School of Management (SM)", value: "SM" }
];

const FeaturedAlumni = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header1}>
          <Image
            source={require('../../assets/images/goldenjublebg.jpg')} 
            style={styles.headerBackground}
          />
          <Text style={styles.headerText1}>FEATURED ALUMNI</Text>
        </View>

        {/* Department Selection */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>By Department</Text>
          <View style={styles.horizontalLine} />
          <Picker
            selectedValue={selectedDepartment}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedDepartment(itemValue)}
          >
            {departments.map(dept => (
              <Picker.Item label={dept.label} value={dept.value} key={dept.value} />
            ))}
          </Picker>
        </View>

        {/* Featured Alumni */}
        {selectedDepartment && alumniData[selectedDepartment] ? (
          <View style={styles.alumniContainer}>
            {alumniData[selectedDepartment].map((alumnus, index) => (
              <View key={index} style={styles.alumniCard}>
                <Image
                  source={require('../../assets/images/Director3.jpg')} // Use a default image or alumni photo if available
                  style={styles.alumniImage}
                />
                <View style={styles.alumniInfo}>
                  <Text style={styles.alumniName}>{alumnus.name}</Text>
                  <Text style={styles.alumniYear}>Year of Graduation: {alumnus.year}</Text>
                  <Text style={styles.alumniDescription}>{alumnus.description}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.noAlumniText}>Please select a department to see featured alumni.</Text>
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
    color: '#103166', // Blue text color for the "By Department" label
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
  alumniYear: {
    fontSize: 14,
    color: '#666',
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

export default FeaturedAlumni;
