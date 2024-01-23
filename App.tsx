import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './src/components/Header';
import styles from './AppStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="light" />
    </View>
  );
}


