import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const StressGauge = ({ stressLevel }) => {
  const data = {
    labels: ['Stress', 'Calm'],
    datasets: [{
      data: [stressLevel, 100 - stressLevel],
      backgroundColor: [
        `hsl(${120 - stressLevel}, 100%, 50%)`,  // Red-to-green arc
        '#1A1A1A',
      ],
      borderWidth: 0,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    cutout: '70%',  // Gauge hole
    circumference: 180,  // Half-circle
    rotation: -90,
  };

  const tip = stressLevel > 70 ? 'High: Schedule 15-min breaks every hour.' : 
              stressLevel > 40 ? 'Medium: Alternate subjects to stay fresh.' : 
              'Low: Optimal flow – dive deep.';

  return (
    <div className="bg-neuro-gray p-4 rounded-lg border border-neuro-magenta/30 relative">
      <h3 className="text-xl font-bold text-neuro-magenta mb-4">Stress Prediction</h3>
      <div className="flex justify-center">
        <Doughnut data={data} options={options} />
      </div>
      <div className="text-center mt-4">
        <p className="text-2xl font-bold text-white">{Math.round(stressLevel)}%</p>
        <p className="text-sm text-gray-400">{tip}</p>
      </div>
    </div>
  );
};

export default StressGauge;