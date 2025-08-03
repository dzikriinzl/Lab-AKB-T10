import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Inter-Italic': require('../../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf'),
          'Lora-Bold': require('../../assets/fonts/Lora-Bold.ttf'),
          'Manrope-Bold': require('../../assets/fonts/Manrope-Bold.ttf'),
          'MerriweatherSans-SemiBoldItalic': require('../../assets/fonts/MerriweatherSans-SemiBoldItalic.ttf'),
          'Oswald-Regular': require('../../assets/fonts/Oswald-Regular.ttf'),
          'Outfit-Black': require('../../assets/fonts/Outfit-Black.ttf'),
          'PlayfairDisplay-Regular': require('../../assets/fonts/PlayfairDisplay-Regular.ttf'),
          'RedHatMono': require('../../assets/fonts/RedHatMono.ttf'),
          'Roboto-Black': require('../../assets/fonts/Roboto-Black.ttf'),
          'Urbanist': require('../../assets/fonts/Urbanist.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
