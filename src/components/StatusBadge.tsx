import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ isActive }) => (
  <View style={[styles.badge, isActive ? styles.active : styles.inactive]}>
    <Text style={styles.text}>
      ● STATUS: {isActive ? 'VERIFIED ACTIVE PASS' : 'SUSPENDED'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  active: {
    backgroundColor: '#DCFCE7',
  },
  inactive: {
    backgroundColor: '#FEE2E2',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
  
  },
});
