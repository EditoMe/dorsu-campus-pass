import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { StudentProfile } from './src/types/student';
import { Header } from './src/components/Header';
import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';

const initialStudent: StudentProfile = {
  name: 'Juan Carlos D. Dela Cruz',
  idNumber: '2024-008492-MT',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section A',
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
        <Pressable
          style={isActive ? styles.suspendBtn : styles.reactivateBtn}
          onPress={togglePassStatus}
        >
          <Text style={isActive ? styles.suspendBtnText : styles.reactivateBtnText}>
            {isActive ? '⚠️ Simulate Pass Suspension' : '✅ Reactivate Suspended Pass'}
          </Text>
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
    gap: 16,
  },
  suspendBtn: {
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#EF4444',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  suspendBtnText: {
    color: '#B91C1C',
    fontWeight: '700',
    fontSize: 12,
  },
  reactivateBtn: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1,
    borderColor: '#22C55E',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  reactivateBtnText: {
    color: '#15803D',
    fontWeight: '700',
    fontSize: 12,
  },
});