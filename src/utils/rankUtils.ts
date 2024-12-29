import type { StudentResult } from '../types';

export const getRankColor = (rank: number): string => {
  switch (rank) {
    case 1: return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200';
    case 2: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
    case 3: return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200';
    default: return 'bg-white hover:bg-gray-50 border-gray-100';
  }
};

export const calculateRank = (currentAccuracy: number, allResults: StudentResult[]): number => {
  const validResults = allResults.filter(result => result?.testResults?.accuracy != null);
  const position = validResults.filter(result => 
    result.testResults.accuracy > currentAccuracy
  ).length + 1;
  return position;
};

export const sortResults = (results: StudentResult[]): StudentResult[] => {
  return [...results].sort((a, b) => {
    // Ensure we have valid test results
    if (!a.testResults || !b.testResults) return 0;
    
    if (a.testResults.accuracy === b.testResults.accuracy) {
      return a.testResults.totalTime - b.testResults.totalTime;
    }
    return b.testResults.accuracy - a.testResults.accuracy;
  });
};