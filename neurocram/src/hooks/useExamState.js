import { useState } from 'react';

export const useExamState = () => {
  const [examData, setExamData] = useState({
    subjects: [],
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
    const subjectsWithUrgency = examData.subjects.map(sub => ({
      ...sub,
      urgency: Math.max(0, (sub.difficulty - sub.confidence) / examData.daysLeft * 10)
    })).sort((a, b) => b.urgency - a.urgency);  // Sort descending urgency

    const urgencyScores = subjectsWithUrgency.map(s => s.urgency);
    const totalUrgency = urgencyScores.reduce((a, b) => a + b, 0);
    const stressLevel = Math.min(100, totalUrgency * (examData.daysLeft < 5 ? 1.5 : 1));  // Boost if <5 days

    // Mock energy: Sinusoidal peaks (high mornings if hours low, afternoons if high)
    const energyWindows = Array.from({ length: examData.daysLeft }, (_, day) => {
      const peakHour = examData.dailyHours > 6 ? 14 : 9;  // Afternoon vs Morning
      const burnoutRisk = stressLevel > 70 ? 0.3 : 0.1;  // Reduce energy if high stress
      return Math.sin((day + 1) * Math.PI / examData.daysLeft) * (1 - burnoutRisk) * 100;
    });

    const dailySchedule = urgencyScores.length === 0 
      ? 'No subjects – add some to generate a plan.'
      : `Prioritize top ${Math.min(3, urgencyScores.length)} subjects. Total focus hours: ${examData.daysLeft * examData.dailyHours}. High urgency detected: ${subjectsWithUrgency[0]?.name || 'N/A'}.`;

    console.log('Generating enhanced plan:', { subjectsWithUrgency, stressLevel, energyWindows });
    setGeneratedPlan({
      subjectsWithUrgency,
      urgencyScores,
      totalUrgency,
      stressLevel,
      energyWindows,
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