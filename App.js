import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuInseminador from './screens/MenuInseminador';
import RutaIseminador from './screens/RutaInseminador';
import VacasInseminador from './screens/VacasInseminador';
import MainNavigation from './navigation/MainNavigation';

export default function App() {
  return (
      <MainNavigation/>
  );
}
