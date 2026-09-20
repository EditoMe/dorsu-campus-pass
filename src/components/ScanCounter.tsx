import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({ count, onScan, onReset }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Campus Gate Verification Log</Text>
    <View style={styles.counterDisplay}>
      <Text style={styles.label}>Today's Gate Entries:</Text>
      <Text style={styles.value}>{count}</Text>
    </View>
    <View style={styles.btnRow}>
      <Pressable style={styles.btnPrimary} onPress={onScan}>
        <Text style={styles.btnText}>+1 Scan at Gate</Text>
      </Pressable>
      <Pressable style={styles.btnSecondary} onPress={onReset}>
        <Text style={styles.btnSecText}>Reset Scans</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  title: {
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 10,
  },
  counterDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
  value: {
    fontSize: 20,
    fontWeight: '800',
    color: '#00758F',
  },
  btnRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  btnPrimary: {
    flex: 1,
    backgroundColor: '#00758F',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnSecondary: {
    flex: 1,
    backgroundColor: '#E2E8F0',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  btnSecText: {
    color: '#334155',
    fontWeight: '700',
  }
});