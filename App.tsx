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

  // Função para ativar filtro no 'setFilteredGames'
  const handleFilterChange = (filterText: string) => {
    const filtered = games.filter(game => game.name.toLowerCase().includes(filterText.toLocaleLowerCase()));
    setFilteredGames(filtered);
  }

  return (
    <View style={styles.container}>
      <Header onFilterChange={handleFilterChange} />
      <GameList
        games={filteredGames}
      />
      <Footer />
      <StatusBar style="light" />
    </View>
  );
}


