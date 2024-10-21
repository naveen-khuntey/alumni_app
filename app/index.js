import React from 'react'
import { SafeAreaView, Text, ScrollView, View } from 'react-native'
import { COLORS, SIZES } from '../constants';
import { HomeAwards, HomeEvents, HomeFooter, HomeHero } from '../components';
const index = () => {
  return (
    <SafeAreaView style={{flex  : 1, backgroundColor : COLORS.lightWhite}}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View
              style={{
                  flex : 1,
                  // paddingTop : SIZES.medium,
                  // paddingHorizontal : SIZES.medium,
                  padding : SIZES.medium,
              }}
          >
            <HomeHero />
          </View>
          <View
            style={{
                flex : 1,
                // paddingHorizontal : SIZES.medium,
                padding : SIZES.medium,
            }}
          >
            <HomeEvents />
          </View>
          <View
            style={{
                flex : 1,
                // paddingHorizontal : SIZES.medium,
                padding : SIZES.medium,
            }}
          >
            <HomeAwards />
          </View>
          <View
            style={{
                flex : 1,
                // paddingHorizontal : SIZES.medium,
                padding : SIZES.medium,
            }}
          >
            <HomeFooter />
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index
