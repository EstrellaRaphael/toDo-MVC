import React from 'react';
import HomeScreen from './src/presentation/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}