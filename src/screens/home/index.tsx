import { View } from 'react-native';
import { styles } from './styles';
import { Simple_Modal } from '../../components/simple_modal';

export default function Home() {
  return (
    <View style={styles.container}>
      <Simple_Modal />
    </View>
  );
}
