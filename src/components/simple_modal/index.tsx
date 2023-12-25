import { useState } from 'react';
import { Image, Modal, Text, TouchableHighlight, View } from 'react-native';
import { styles } from './styles';

export function Simple_Modal() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.DesigneModal}>
          <View style={styles.ViewModal}>
            <Image
              style={styles.imgSucess}
              source={require('../../assets/Sucess.png')}
              resizeMode="stretch"
            />

            <Text style={styles.TextSucess2}>Success!</Text>

            <Text style={styles.TextModal}>Thanks you for waiting. You health data{'\n'} has been approved.</Text>

            <TouchableHighlight
              style={styles.ButtonSucess}
              underlayColor={'#0095DB'}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.TextSucess}>OKAY</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
}
