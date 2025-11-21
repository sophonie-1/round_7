import { useExamState } from './hooks/useExamState';
import InputForm from './components/InputForm';
import CramHeatMap from './components/CramHeatMap';
import StressGauge from './components/StressGauge';
import BrainEnergyGauge from './components/BrainEnergyGauge';

function App() {
  const { examData, generatedPlan, generatePlan, updateSubject, addSubject, removeSubject, updateGlobal } = useExamState();

  return (
    <div className="min-h-screen bg-neuro-dark text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center p-8 text-center bg-gradient-to-b from-neuro-dark to-neuro-gray">
        <h1 className="text-6xl md:text-8xl font-neuro font-bold text-neuro-neon mb-4 animate-pulse">
          NEUROCRAM
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          The Exam Intelligence Console. Rewrite the science of last-minute studying.
        </p>
        {/* Input Form */}
        <InputForm
          examData={examData}
          updateSubject={updateSubject}
          addSubject={addSubject}
          removeSubject={removeSubject}
          updateGlobal={updateGlobal}
        />
        <button
          onClick={generatePlan}
          disabled={examData.subjects.length === 0}
          className={`px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 mt-8 shadow-neon ${
            examData.subjects.length === 0
              ? 'bg-gray-600 cursor-not-allowed opacity-50'
              : 'bg-neuro-neon text-neuro-dark hover:bg-neuro-magenta hover:shadow-magenta'
          }`}
        >
          {examData.subjects.length === 0 ? 'Add Subjects First' : 'Generate Plan'}
        </button>
      </section>

      {/* Modules Grid – Conditional Render */}
      {generatedPlan && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
          <CramHeatMap subjectsWithUrgency={generatedPlan.subjectsWithUrgency || []} />
          <StressGauge stressLevel={generatedPlan.stressLevel || 0} />
          <BrainEnergyGauge energyWindows={generatedPlan.energyWindows || []} daysLeft={examData.daysLeft} />
        </section>
      )}

      {/* Plan Output */}
      {generatedPlan && (
        <section className="p-8 bg-neuro-gray">
          <h2 className="text-3xl font-bold text-neuro-neon mb-4">Your Mission Plan</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300"><strong>Overview:</strong> {generatedPlan.dailySchedule}</p>
            <ul className="space-y-2">
              {examData.subjects.map((sub, i) => (
                <li key={i} className="flex justify-between p-3 bg-neuro-dark rounded">
                  <span className="font-bold">{sub.name}</span>
                  <div className="text-right">
                    <span className="block text-sm text-gray-400">Urgency: {generatedPlan.urgencyScores[i]?.toFixed(1)}</span>
                    <span className="text-neuro-neon">Focus: {((sub.difficulty - sub.confidence) * 10).toFixed(0)}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Easter Egg Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 border-t border-neuro-gray">
        Hover for intel... (Phase 5)
      </footer>
    </div>
  );
}

export default App;