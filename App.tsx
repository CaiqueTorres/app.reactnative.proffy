import React from 'react';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import Login from './src/pages/Login'

let fontsLoaded: boolean

export default function App() {
  loadFonts()

  return (
    <Login />
  );
}

function loadFonts() {
  [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })
}
