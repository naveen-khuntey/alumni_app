import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { COLORS } from '../../constants'; 
import { HomeHeader } from '..';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/images/nitrlogo.png')}  
          style={styles.logo}
        />
        <Text style={styles.userName}>Naveen Khuntey</Text>  
      </View>
      
      <DrawerItemList {...props} />

      <TouchableOpacity style={styles.logoutButton} onPress={() => {/* Handle logout */}}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: COLORS.lightGrey,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: COLORS.red,
    padding: 15,
    alignItems: 'center',
  },
  logoutText: {
    color: COLORS.white,
    fontSize: 16,
  },
});

export default CustomDrawerContent;
