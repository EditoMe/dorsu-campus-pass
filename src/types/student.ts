export interface StudentProfile {
  name: string;
  idNumber: string;
  program: string;
  yearLevel: string;
  avatarUrl: string;
  campus: string;
}

export interface StatusBadgeProps {
  isActive: boolean;
}