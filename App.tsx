import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useState } from 'react';
import games, { IGames } from './src/data/games';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import GameList from './src/pages/Gamelist';
import styles from './AppStyles';

export default function App() {
  const [filteredGames, setFilteredGames] = useState<IGames[]>(games);

  return (
    <View style={styles.container}>
      <Header />
      <GameList
        games={filteredGames}
      />
      <Footer />
      <StatusBar style="light" />
    </View>
  );
}


