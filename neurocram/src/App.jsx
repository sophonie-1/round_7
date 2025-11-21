import { useState } from 'react';

function App() {
  const [planGenerated, setPlanGenerated] = useState(false);  // For CTA toggle

  return (
    <div className="min-h-screen bg-neuro-dark text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center p-8 text-center bg-gradient-to-b from-neuro-dark to-neuro-gray">
        <h1 className="text-6xl md:text-8xl font-neuro font-bold text-neuro-neon mb-4">
          NEUROCRAM
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          The Exam Intelligence Console. Rewrite the science of last-minute studying.
        </p>
        {/* Input Form Placeholder – Phase 3 */}
        <div className="mb-8 p-6 bg-neuro-gray rounded-lg shadow-lg">
          <p>[Inputs: Subjects, Days, etc. – Coming Soon]</p>
        </div>
        <button
          onClick={() => setPlanGenerated(!planGenerated)}
          className="px-8 py-4 bg-neuro-neon text-neuro-dark text-lg font-bold rounded-full hover:bg-neuro-magenta transition-all duration-300 shadow-neon"
        >
          {planGenerated ? 'Regenerate Plan' : 'Generate Plan'}
        </button>
      </section>

      {/* Modules Grid – Conditional Render */}
      {planGenerated && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
          <div className="bg-neuro-gray p-6 rounded-lg">[Module 1: CramHeat Map]</div>
          <div className="bg-neuro-gray p-6 rounded-lg">[Module 2: Stress Prediction]</div>
          <div className="bg-neuro-gray p-6 rounded-lg">[Module 3: BrainEnergy Gauge]</div>
        </section>
      )}

      {/* Plan Output */}
      {planGenerated && (
        <section className="p-8 bg-neuro-gray">
          <h2 className="text-3xl font-bold text-neuro-neon mb-4">Your Mission Plan</h2>
          <ul className="space-y-2">[Dynamic Plan List – Coming Soon]</ul>
        </section>
      )}

      {/* Easter Egg Footer */}
      <footer className="text-center py-4 text-sm text-gray-500">
        Hover for intel... (Phase 5)
      </footer>
    </div>
  );
}

export default App;