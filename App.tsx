import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/home';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  );
}
