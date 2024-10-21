import { Drawer } from 'expo-router/drawer';
import { useCallback } from 'react';
import { COLORS } from '../constants';
import { useFonts } from 'expo-font';
import { DrawerActions } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import  CustomDrawerContent  from '../components/common/DrawerComponent';
import { HomeHeader, ScreenHeaderBtn, ScreenHeaderTitle } from '../components';
import {icons} from '../constants';
import { useNavigation } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const Layout = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Drawer
      onLayout={onLayoutRootView}
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={onToggleDrawer} />),
        headerRight: () => (< ScreenHeaderBtn iconUrl={icons.profile} dimension="60%" />),
        headerTitle: () => (<ScreenHeaderTitle />),
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="events" options={{ title: "Events" }} />
      <Drawer.Screen name="desk" options={{ title: "From the Desk of" }} />
      <Drawer.Screen name="giving" options={{ title: "Giving Back" }} />
      <Drawer.Screen name="awards" options={{ title: "Awards" }} />
      <Drawer.Screen name="stories" options={{ title: "Alumni Stories" }} />
      <Drawer.Screen name="services" options={{ title: "Services" }} />
      <Drawer.Screen name="connect" options={{ title: "Connect and Update" }} />
    </Drawer>
  );
};

export default Layout;
