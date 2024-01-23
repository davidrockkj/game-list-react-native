import { View, Text, Image } from "react-native";
import { IGames } from "../../data/games";
import styles from "../Header/styles";

interface GameCardProps {
  game: IGames
}

function GameCard({game}: GameCardProps) {

  // Função para retornar estrelas na avaliação
  const generateStarRating = (ratingScore: number) => {
    const numStars = Math.floor(ratingScore);
    return "⭐".repeat(numStars);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: game.image }} />
      <Text style={styles.title}>{game.name}</Text>
      <Text style={styles.data}>{`Pataforma: ${game.platform}`}</Text>
      <Text style={styles.data}>{`Gênero: ${game.genre}`}</Text>
      <Text style={styles.data}>{`Data de Lançamento: ${game.releaseDate}`}</Text>
      <Text style={styles.data}>{`Público: ${game.rating}`}</Text>
      <Text style={styles.data}>{`Empresa: ${game.developer}`}</Text>
      <Text style={styles.data}>{generateStarRating(game.ratingScore)}</Text>

    </View>
  )
};

export default GameCard;