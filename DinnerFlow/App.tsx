import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import Tabs from './navigation/tabs';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({

// });

export default App;
