import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, isActive }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image source={{ uri: student.avatarUrl }} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.idNumber}>{student.idNumber}</Text>
          <Text style={styles.program}>{student.program}</Text>
          <Text style={styles.yearLevel}>{student.yearLevel}</Text>
        </View>
      </View>
      <StatusBadge isActive={isActive} />
      <Text style={styles.campus}>Campus: {student.campus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '800',
  },
  idNumber: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#00758F',
  },
  program: {
    fontSize: 12,
    color: '#475569',
  },
  yearLevel: {
    fontSize: 11,
    color: '#64748B',
  },
  campus: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 6,
  }
});