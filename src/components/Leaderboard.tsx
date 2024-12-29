import React from 'react';
import { StudentResult } from '../types';
import { LeaderboardCard } from './LeaderboardCard';
import { Trophy } from 'lucide-react';
import { sortResults } from '../utils/rankUtils';

interface LeaderboardProps {
  results: StudentResult[];
}

export function Leaderboard({ results }: LeaderboardProps) {
  const validResults = results.filter(result => 
    result && result.testResults && result.userDetails
  );
  
  const sortedResults = sortResults(validResults);

  if (sortedResults.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No results available</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="h-7 w-7 text-yellow-500" />
        <h2 className="text-2xl font-bold text-gray-800">Top Performers</h2>
      </div>
      
      <div className="space-y-3">
        {sortedResults.map((student, index) => (
          <LeaderboardCard
            key={student.userDetails.registerNumber}
            student={student}
            rank={index + 1}
          />
        ))}
      </div>
    </div>
  );
}