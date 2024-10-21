import React, { useState } from 'react';
import { Text, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { useNavigation } from 'expo-router';
export default function Header() {
    const navigation = useNavigation();
    const [activeScreen, setActiveScreen] = useState('home'); // State to track active screen

    const screens = [
        { name: 'index', title: 'Home' },
        { name: 'desk', title: 'From the Desk of' },
        { name: 'giving', title: 'Giving Back' },
        { name: 'awards', title: 'Awards' },
        { name: 'stories', title: 'Alumni Stories' },
        { name: 'services', title: 'Services' },
        { name: 'connect', title: 'Connect and Update' },
    ];

    const handlePress = (screenName) => {
        setActiveScreen(screenName); // Update active screen
        navigation.navigate(screenName); // Navigate to the selected screen
    };
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, padding: SIZES.medium }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                    {screens.map((screen, index) => (
                        <TouchableOpacity
                        key={index}
                        onPress={() => handlePress(screen.name)}
                        style={[
                            styles.button,
                            {
                            backgroundColor:
                                activeScreen === screen.name ? COLORS.blue : COLORS.lightWhite,
                            },
                        ]}
                        >
                        <Text
                            style={{
                            color: activeScreen === screen.name ? COLORS.white : COLORS.black,
                            }}
                        >
                            {screen.title}
                        </Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
      padding: 15,
      borderRadius: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: COLORS.blue,
      alignItems: 'center',
    },
  });
  