import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
    <Text style={styles.subtitle}>FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY</Text>
    <Text style={styles.tag}>OFFICIAL STUDENT DIGITAL PASS • AY 2026–2027</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00758F',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
  },
  subtitle: {
    color: '#E0F2FE',
    fontSize: 10,
    marginTop: 2,
  },
  tag: {
    color: '#F29111',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 4,
  },
});
