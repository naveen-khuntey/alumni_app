import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./screenheader.style";
function ScreenHeaderTitle() {
    return (
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/nitrlogo.png')}
            style={styles.logo}
          />
          {/* <Text style={styles.title}>NITR</Text> */}
        </View>
      );
}

export default ScreenHeaderTitle
