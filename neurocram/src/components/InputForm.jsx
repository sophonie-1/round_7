import { useState } from 'react';
import { motion } from 'framer-motion';

const SubjectInput = ({ subject, index, onUpdate, onRemove }) => {
  return (
    <div className="bg-neuro-gray p-4 rounded-lg mb-4 space-y-4 border border-neuro-neon/20">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Subject Name (e.g., Math)"
          value={subject.name || ''}
          onChange={(e) => onUpdate(index, { name: e.target.value })}
          className="bg-transparent border-b border-neuro-neon text-white px-2 py-1 w-full focus:outline-none focus:border-neuro-magenta"
        />
        <button
          onClick={() => onRemove(index)}
          className="text-red-400 hover:text-red-300 text-sm font-bold transition-colors"
        >
          × Remove
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <label className="block text-gray-300 mb-1">Difficulty (1-10)</label>
          <input
            type="range"
            min="1"
            max="10"
            value={subject.difficulty || 5}
            onChange={(e) => onUpdate(index, { difficulty: parseInt(e.target.value) })}
            className="w-full h-2 bg-neuro-gray rounded-lg appearance-none slider"
          />
          <span className="text-neuro-neon font-mono">{subject.difficulty || 5}</span>
        </div>
        <div>
          <label className="block text-gray-300 mb-1">Confidence (1-10)</label>
          <input
            type="range"
            min="1"
            max="10"
            value={subject.confidence || 5}
            onChange={(e) => onUpdate(index, { confidence: parseInt(e.target.value) })}
            className="w-full h-2 bg-neuro-gray rounded-lg appearance-none slider"
          />
          <span className="text-neuro-magenta font-mono">{subject.confidence || 5}</span>
        </div>
      </div>
    </div>
  );
};

const InputForm = ({ examData, updateSubject, addSubject, removeSubject, updateGlobal }) => {
  const [newSubjectName, setNewSubjectName] = useState('');

  const handleAddSubject = () => {
    if (newSubjectName.trim()) {
      addSubject({ name: newSubjectName, difficulty: 5, confidence: 5 });
      setNewSubjectName('');
    }
  };

  return (
    <div className="w-full max-w-2xl space-y-6">
      {/* Global Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 mb-2 font-bold">Days Left</label>
          <input
            type="number"
            min="1"
            max="14"
            value={examData.daysLeft}
            onChange={(e) => updateGlobal('daysLeft', parseInt(e.target.value) || 5)}
            className="w-full p-3 bg-neuro-gray rounded border border-neuro-neon text-white focus:border-neuro-magenta focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2 font-bold">Daily Study Hours</label>
          <input
            type="number"
            min="1"
            max="12"
            value={examData.dailyHours}
            onChange={(e) => updateGlobal('dailyHours', parseInt(e.target.value) || 4)}
            className="w-full p-3 bg-neuro-gray rounded border border-neuro-neon text-white focus:border-neuro-magenta focus:outline-none"
          />
        </div>
      </div>

      {/* Subjects Section */}
      <div>
        <h3 className="text-lg font-bold text-neuro-neon mb-4">Subjects</h3>
        {examData.subjects.length === 0 && (
          <p className="text-gray-400 mb-4">Add your first subject to start.</p>
        )}
        {examData.subjects.map((subject, index) => (
          <motion.div
            key={subject.name || index}  // Stable key for smooth animations
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <SubjectInput
              subject={subject}
              index={index}
              onUpdate={updateSubject}
              onRemove={removeSubject}
            />
          </motion.div>
        ))}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add Subject (e.g., Physics)"
            value={newSubjectName}
            onChange={(e) => setNewSubjectName(e.target.value)}
            className="flex-1 p-3 bg-neuro-gray rounded border border-neuro-neon text-white focus:border-neuro-magenta focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddSubject}
            disabled={!newSubjectName.trim()}
            className="px-6 py-3 bg-neuro-neon text-neuro-dark rounded font-bold hover:bg-neuro-magenta disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Add
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;