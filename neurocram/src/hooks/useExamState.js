import { useState } from 'react';

export const useExamState = () => {
  const [examData, setExamData] = useState({
    subjects: [],  // e.g., [{name: 'Math', difficulty: 8, confidence: 4}]
    daysLeft: 5,
    dailyHours: 4,
  });
  const [generatedPlan, setGeneratedPlan] = useState(null);

  const updateSubject = (index, updates) => {
    setExamData(prev => ({
      ...prev,
      subjects: prev.subjects.map((sub, i) => i === index ? {...sub, ...updates} : sub)
    }));
  };

  const addSubject = (subject) => {
    setExamData(prev => ({
      ...prev,
      subjects: [...prev.subjects, subject]
    }));
  };

  const removeSubject = (index) => {
    setExamData(prev => ({
      ...prev,
      subjects: prev.subjects.filter((_, i) => i !== index)
    }));
  };

  const updateGlobal = (key, value) => {
    setExamData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const generatePlan = () => {
    // Enhanced mock logic: Calculate urgency, generate schedule
    const urgencyScores = examData.subjects.map(sub => 
      Math.max(0, (sub.difficulty - sub.confidence) / examData.daysLeft * 10)
    );
    const totalUrgency = urgencyScores.reduce((a, b) => a + b, 0);
    const dailySchedule = totalUrgency > 20 
      ? `High urgency: Prioritize ${examData.subjects.reduce((maxSub, sub, i) => urgencyScores[i] > (maxSub.urgency || 0) ? {sub, urgency: urgencyScores[i]} : maxSub, {}).sub?.name} for ${examData.dailyHours}h/day.`
      : 'Balanced week ahead. Even split across subjects.';

    console.log('Generating plan with data:', examData);
    setGeneratedPlan({
      urgencyScores,
      totalUrgency,
      dailySchedule,
    });
  };

  return {
    examData,
    updateSubject,
    addSubject,
    removeSubject,
    updateGlobal,
    generatedPlan,
    generatePlan,
  };
};