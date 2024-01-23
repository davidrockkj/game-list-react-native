import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import styles from './styles';

function Header () {
  // Filtrar o jogo
  const [filter, setFilter] = useState<string>('');

  // Fazer o uso da função para filtrar
  const handleFilter = (text: string) => {
    setFilter(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Top Games</Text>
      <TextInput
        style={styles.input}
        placeholder='Procure por nome'
        value={filter}
        onChangeText={handleFilter}
      />
    </View>
  )
}

export default Header;