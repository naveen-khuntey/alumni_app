import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const HeroComponent = () => {
  // Sample Notice Data
  const notices = [
    { date: '10 September 2024', title: 'Global Alumni Meet 2024' },
    { date: '01 May 2024', title: 'NITR Connect Inaugural Edition' },
    { date: '06 July 2023', title: 'Alumni Annual Report 2022-23' },
    { date: '01 January 2022', title: 'Dear Students please contact Alumni Cell (AIIR office) for getting help from the "Distress Fund Management' },
    { date: 'September 25, 2024', title: 'Alumni Sports Event' },
    { date: 'September 18, 2024', title: 'Webinar for Job Placements' },
  ];

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Hello Alumni, Welcome Back.</Text>

      {/* Paragraph */}
      <Text style={styles.paragraph}>
        With great honor and pleasure, we welcome you all to our new alumni website. This platform is a testament to the enduring bond we share as graduates of NIT Rourkela. It is designed to keep us connected, celebrate our achievements, and support each other in our professional and personal journeys. Though a major portion of it is under development, which would take a few more weeks to complete, we encourage you all to explore, participate, and contribute. Together, we can create a vibrant and supportive community that benefits us all.
        {'\n\n'}Thank you for being here and for your continued support. Let’s make this platform a thriving space for all alumni.
      </Text>

      {/* Scrollable Notice Board */}
      <View style={styles.noticeBoardContainer}>
        <Text style={styles.noticeTitle}>Notice Board</Text>
        <ScrollView
          showsVerticalScrollIndicator={false} // Hide the scroll bar
          contentContainerStyle={styles.scrollViewContent}
        >
          {notices.map((notice, index) => (
            <View key={index}>
              {/* Line above each notice */}
              <View style={styles.divider} />
              <View style={styles.notice}>
                <Text style={styles.noticeDate}>{notice.date}</Text>
                <Text style={styles.noticeText}>{notice.title}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
    marginBottom: 20,
  },
  noticeBoardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 4, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    height: 4 * 80, // Show only 4 notices, assuming each is 80px tall
  },
  scrollViewContent: {
    paddingBottom: 10, // Ensures last notice isn't cut off
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notice: {
    // height, // Each notice takes up this height
    // paddingVertical: 10,
  },
  noticeDate: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  noticeText: {
    fontSize: 14,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HeroComponent;
