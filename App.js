import React from 'react';
import DeviceInfo from 'react-native-device-info';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#0F0F0F' : '#F0F0F0',
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={[backgroundStyle, styles.container]}>
        <Text style={styles.title}>name = {DeviceInfo.getApplicationName()}</Text>
        <Text>BundleId = {DeviceInfo.getBundleId()}</Text>
        <Text>BuildNumber = {DeviceInfo.getReadableVersion()} // {DeviceInfo.getBuildNumber()}</Text>
        <Text>OS ver = {Platform.OS} {DeviceInfo.getSystemVersion()}</Text>
        <Text>RN ver = { (Platform.constants?.reactNativeVersion?.minor) ? Platform.constants.reactNativeVersion.major +'.'+ Platform.constants.reactNativeVersion.minor +'.'+ Platform.constants.reactNativeVersion.patch : '-.-.-' }</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    fontSize:30,
    fontWeight:'900',
    color:'green',
  }
});

export default App;
