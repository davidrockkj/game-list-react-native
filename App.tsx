import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './AppStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Deixa eu dar uma testadinha</Text>
      <StatusBar style="auto" />
    </View>
  );
}


