import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { StudentProfile } from './src/types/student';
import { Header } from './src/components/Header';
import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';

const initialStudent: StudentProfile = {
  name: 'Edito Cleff P. Balayo',
  idNumber: '2023-1794-MT',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section G',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [student, setStudent] = useState<StudentProfile>(initialStudent);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [gateScans, setGateScans] = useState<number>(3);

  const handleScan = () => setGateScans(prev => prev + 1);
  const handleReset = () => setGateScans(0);
  const togglePassStatus = () => setIsActive(prev => !prev);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <StudentCard student={student} isActive={isActive} />
        <ScanCounter count={gateScans} onScan={handleScan} onReset={handleReset} />
        <Pressable style={styles.toggleBtn} onPress={togglePassStatus}>
          <Text style={styles.toggleBtnText}>⚠️ Simulate Pass Suspension</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    padding: 16,
    gap: 18,
  },
  toggleBtn: {
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#EF4444',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  toggleBtnText: {
    color: '#B91C1C',
    fontWeight: '700',
    fontSize: 12,
  },
});