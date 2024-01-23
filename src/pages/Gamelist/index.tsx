import { View, Text, FlatList } from 'react-native';
import GameCard from '../../components/GameCard';
import { IGames } from '../../data/games';
import styles from './styles';

// Tipando os games
interface GameListProps {
  games: IGames[]
};

function GameList({games}: GameListProps) {

  // Criando tipagem para a função renderGame
  interface ItemList {
    item: IGames;
  }

  // Função responsável por renderizar cada um dos jogos
  const renderGame = ({item}: ItemList) => (
    <GameCard game={item}/>
  )
  

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Jogos adicionados recentemente</Text>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={games}
        renderItem={renderGame}
        keyExtractor={item => String(item.id)}
        />
    </View>
  )
}

export default GameList;