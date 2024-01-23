import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import styles from './AppStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
      <StatusBar style="light" />
    </View>
  );
}


