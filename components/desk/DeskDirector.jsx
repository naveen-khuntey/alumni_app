import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  HomeFooter from '../home/footer/Footer';
import { COLORS } from '../../constants';

const DeskCard = () => {
  return (
    <SafeAreaView style={{flex  : 1, backgroundColor : COLORS.lightWhite}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section with Background Image and Director Title */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/goldenjublebg.jpg')} // Replace with the actual background image
            style={styles.headerBackground}
          />
          <Text style={styles.headerText}>DIRECTOR</Text>
        </View>
        <View style={styles.card}>
      {/* Director's Image */}
      <Image
        source={require('../../assets/images/Director3.jpg')} // Replace with your director's image link
        style={styles.directorImage}
      />

      {/* Director's Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Prof. K. Umamaheshwar Rao</Text>
        <Text style={styles.position}>Director</Text>

        {/* Phone and Email Information */}
        <View style={styles.infoRow}>
          <Icon name="phone" size={16} color="#333" style={styles.icon} />
          <Text style={styles.infoText}>0661-2462001</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="envelope" size={16} color="#333" style={styles.icon} />
          <Text style={styles.infoText}>director@nitrkl.ac.in</Text>
        </View>
      </View>

      {/* Message Section */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageHeader}>Message From Director</Text>
        <Text style={styles.messageText}>
        Alumni constitute an important constituent of an institution of higher learning. It is through them that an institute reaches out to the public. They serve as brand ambassadors who spread the message of their alma mater. Their effort brings in new students, new faculty and staff, and new projects. The prosperity and good name of an institute strongly depends on the goodwill of its alumni. Alumni constitute an important constituent of an institution of higher learning. It is through them that an institute reaches out to the public. They serve as brand ambassadors who spread the message of their alma mater. Their effort brings in new students, new faculty and staff and new projects. The prosperity and good name of an institute strongly depends on the goodwill of its alumni. NIT Rourkela, as a matter of basic philosophy, recognizes the potential role of its alumni in shaping the future of the institute. It is through them that the institute hopes to be able to convince the world that NIT Rourkela has truly transformed from a predominant ly undergraduate college to a fully fledged technical university. It is through their efforts that the institute expects to convince industry executives and entrepreneurs that NIT Rourkela can provide solutions to many of their technical problems and can help them secure high positions under global competition.
        </Text>
        <Text style={styles.messageText}>
        Ever since the REC became NIT, the institute has made a conscious effort to reach out to its alumni . The NIT Rourkela Alumni Association(NITRAA) had already created a collective identity, although physical constraints on communication had limited its reach to the city of Rourkela and its proximity in world scale. The institute tried to reach out to all alumni through this forum, and succeeded. Through a combined effort of the NITRAA secretariat, particularly Prof. Saroj Patel and the Institute’s academic office, a global database is now ready. Sitting in my office, now I can send an email to over fifty percent of my alumni. A comparable number of alumni, distributed around the world, have now elected an executive council through universal participation. This is the result of the hard work of our alumni and of new technology.
        </Text>
        <Text style={styles.messageText}>
        The Institute’s contact with its alumni was primarily through the good office of NITRAA. In fact the ‘ALUMNI’ link in the Institute’s website took one directly to the website of NITRAA. During the first eight years of NIT’s existence, the institute administration has only used this link to communicate with its alumni.
        </Text>
        <Text style={styles.messageText}>
        Now the time is ripe for a more ambitious action plan. The institute has setup a whole new wing called the centre for Alumni Relations, which is headed by a Dean. Through this office, the institute intends not only to kindle the feeling of nostalgia among its alumni, but also to provide an avenue to its alumni for the pride and satisfaction of contributing to the progress of the institute. We now wish that our alumni go far beyond the boundaries of NITR to lead the alumni of the entire NIT system. We dream of a Pan-NIT Alumni Forum that will not only give a new direction to growth of the NIT system, but will also play its role in framing Government Policy.
        </Text>
        <Text style={styles.messageText}>
        The ‘ALUMNI’ link of the Institute website has now been reset to these pages which provide an information highway between the institute and its alumni. It also gives direct links to NITRAA and its chapters around the world. A rationalized framework provides a forum for many different types of information dispersal. I am sure the arrangement will serve us - faculty, students, alumni and the public better than before. Some of our students: Ranjan Mittal, Guru Balakrishna, Anujit Bagchi and their friends have worked very hard to make it possible. On behalf of the institute, I record my deep appreciation of their contribution. I also record my gratitude to Prof . K. C. Patra, a 1981 Alumnus and Ex-Dean of Alumni Relations who has organized creation of this new look website. The goodwill of senior alumni: Sri B.B Mohanty, Sri F.C. Mohanty, Sri Sandip Das Verma, Prof. Saroj Patel, Sri S. K. S. Narayan, Sri Kumar Behera, Sri R. K. Sarmal has made this change possible. Now we are looking forward to centuries of progress, the alumni playing an ever increasing role in realizing this dream.
        </Text>
      </View>
    </View>
    <View style={{flex:1}}>
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
    resizeMode: 'cover',  // Background image covers the header
  },
  headerText: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',  // Text color white for visibility
    zIndex: 10, // Ensure text is on top of the background image
  },
  directorImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',  // Ensures the image covers the top section
  },
  detailsContainer: {
    backgroundColor: '#F2E7DB',  // Light brown section background
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
    backgroundColor: '#F3F8FF',  // Light blue section for message
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

export default DeskCard;
