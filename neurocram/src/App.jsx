import { useExamState } from './hooks/useExamState';
import { motion } from 'framer-motion';
import InputForm from './components/InputForm';
import CramHeatMap from './components/CramHeatMap';
import StressGauge from './components/StressGauge';
import BrainEnergyGauge from './components/BrainEnergyGauge';
import AnimatedBackground from './components/AnimatedBackground';





function App() {
  const { examData, generatedPlan, generatePlan, updateSubject, addSubject, removeSubject, updateGlobal } = useExamState();

  return (
    <div className="min-h-screen bg-neuro-dark text-white overflow-x-hidden relative">
      <AnimatedBackground />
      {/* Hero Section */}
      <section className="h-screen relative z-10 flex flex-col justify-center items-center p-8 text-center bg-gradient-to-b from-neuro-dark to-neuro-gray">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-neuro font-bold text-neuro-neon mb-4 animate-pulse"
        >
          NEUROCRAM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
        >
          The Exam Intelligence Console. Rewrite the science of last-minute studying.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <InputForm
            examData={examData}
            updateSubject={updateSubject}
            addSubject={addSubject}
            removeSubject={removeSubject}
            updateGlobal={updateGlobal}
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          onClick={generatePlan}
          disabled={examData.subjects.length === 0}
          className={`px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 mt-8 shadow-neon ${
            examData.subjects.length === 0
              ? 'bg-gray-600 cursor-not-allowed opacity-50'
              : 'bg-neuro-neon text-neuro-dark hover:bg-neuro-magenta hover:shadow-magenta'
          }`}
        >
          {examData.subjects.length === 0 ? 'Add Subjects First' : 'Generate Plan'}
        </motion.button>
      </section>

      {/* Modules Grid */}
      {generatedPlan && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CramHeatMap subjectsWithUrgency={generatedPlan.subjectsWithUrgency || []} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StressGauge stressLevel={generatedPlan.stressLevel || 0} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <BrainEnergyGauge energyWindows={generatedPlan.energyWindows || []} daysLeft={examData.daysLeft} />
          </motion.div>
        </motion.section>
      )}

      {/* Plan Output */}
      {generatedPlan && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 bg-neuro-gray relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-neuro-neon mb-4"
          >
            Your Mission Plan
          </motion.h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-lg text-gray-300"
            >
              <strong>Overview:</strong> {generatedPlan.dailySchedule}
            </motion.p>
            <ul className="space-y-2">
              {examData.subjects.map((sub, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (i + 1) * 0.1 }}
                  className="flex justify-between p-3 bg-neuro-dark rounded"
                >
                  <span className="font-bold">{sub.name}</span>
                  <div className="text-right">
                    <span className="block text-sm text-gray-400">Urgency: {generatedPlan.urgencyScores[i]?.toFixed(1)}</span>
                    <span className="text-neuro-neon">Focus: {((sub.difficulty - sub.confidence) * 10).toFixed(0)}%</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      )}

      {/* Easter Egg Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        className="text-center py-4 text-sm text-gray-500 border-t border-neuro-gray relative z-10"
      >
        Hover for intel...
        {generatedPlan && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-neuro-gray rounded text-neuro-neon text-xs whitespace-nowrap shadow-neon"
            style={{ visibility: 'hidden' }}  // Base hidden; motion handles on hover
          >
            Exam Survival Probability: {Math.round(100 - generatedPlan.stressLevel)}%
          </motion.div>
        )}
      </motion.footer>
    </div>
  );
}

export default App;