import React from 'react';
import { Modal, StyleSheet, Image } from 'react-native';
import msg from '../assets/icons/successfulMSG.png'

const Overlay = ({ visible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <Image source={msg}></Image>
    </Modal>
  );
};

const styles = StyleSheet.create({
});

export default Overlay;