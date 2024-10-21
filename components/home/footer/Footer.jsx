import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Import FontAwesome for icons

const Footer = () => {

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.footer}>
      {/* NIT Rourkela Logo */}
      <Image 
        source={require('../../../assets/images/nitrlogo.png')} 
        style={styles.logo}
      />
      
      {/* Text Information */}
      <Text style={styles.text}>Alumni, Industry and International Relations</Text>
      <Text style={styles.text}>National Institute of Technology</Text>
      <Text style={styles.text}>Rourkela, Odisha, India, 769008</Text>
      <View style={styles.row}>
        <Icon name="phone" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.text}>0661-246-2966 / 4960</Text>
      </View>
      <View style={styles.row}>
        <Icon name="envelope" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.text}>aiir_office@nitrkl.ac.in</Text>
      </View>

      {/* Social Media Links */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => openLink('https://www.instagram.com/nitrourkela1961/')}>
          <View style={styles.iconWrapper}>
            <Icon name="instagram" size={30} color="#103166" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://x.com/nitrourkela')}>
          <View style={styles.iconWrapper}>
            <Icon name="twitter" size={30} color="#103166" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com/nitrkl1')}>
          <View style={styles.iconWrapper}>
            <Icon name="facebook" size={30} color="#103166" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/school/national-institute-of-technology-rourkela/')}>
          <View style={styles.iconWrapper}>
            <Icon name="linkedin" size={30} color="#103166" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.youtube.com/@NITROURKELA1961')}>
          <View style={styles.iconWrapper}>
            <Icon name="youtube" size={30} color="#103166" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#103166',  // Blue background
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',  // Make sure the logo fits within its bounds
  },
  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  iconWrapper: {
    flex: 1,  // Take up all available space
    justifyContent: 'center',  // Center the icon
    alignItems: 'center',
    width: 40,  // Width of the icon
    backgroundColor: '#fff',  // White background for the icon
    padding: 5,  // Padding around the icon
    borderRadius: 10,  // Rounded corners
    marginHorizontal: 10,  // Space between the icons
    // elevation: 3,  // Slight shadow for better UI
  },
});

export default Footer;
