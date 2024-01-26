import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ContentContainer from './src/components/ContentContainer';
import Dashboard from './src/components/Dashboard';
import Header from './src/components/Header';
// import Login from './src/components/Login';
import NavBar from './src/components/NavBar';
import StartScreen from './src/components/StartScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 3000);

  return (
      <View style={styles.container}>
      <StatusBar style="auto" />
      { isLoading
        ? <StartScreen />
        : <View>
            <Header />
            <ContentContainer>
              <Dashboard />
            </ContentContainer>
            <NavBar />
          </View>
      }
      </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B2142',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
Color schemes
#4B2142
#74226C
#816
#816E94
#8CC7A1

#2A1F2D
#3B2C35
#5B6C5D
#59C9A5
#56E39F

#AD91A3
#C49792
#EDAF97
#FE938C

#0B132B
#1C2541
#3A506B
#5BC0BE

#0FA3B1
#B5E2FA
#F9F7F3
#EDDEA4

#282828
#694873
#8B728E
#85B79D
*/