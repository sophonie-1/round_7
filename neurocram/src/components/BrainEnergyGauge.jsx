import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BrainEnergyGauge = ({ energyWindows, daysLeft }) => {
  const data = {
    labels: Array.from({ length: daysLeft }, (_, i) => `Day ${i + 1}`),
    datasets: [{
      label: 'Energy Level',
      data: energyWindows,
      borderColor: '#00FFFF',
      backgroundColor: 'rgba(0, 255, 255, 0.1)',
      tension: 0.4,  // Smooth curve
      fill: true,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Burnout Windows', color: '#00FFFF', font: { size: 14 } },
    },
    scales: {
      y: { beginAtZero: true, max: 100, ticks: { color: '#FFFFFF' }, grid: { color: '#333' } },
      x: { ticks: { color: '#FFFFFF' }, grid: { color: '#333' } },
    },
    backgroundColor: 'transparent',
  };

  return (
    <div className="bg-neuro-gray p-4 rounded-lg border border-neuro-neon/30">
      <h3 className="text-xl font-bold text-neuro-neon mb-4">BrainEnergy Gauge</h3>
      <Line data={data} options={options} />
      <p className="text-sm text-gray-400 mt-2 text-center">Predicted peaks: Avoid low-energy slumps</p>
    </div>
  );
};

export default BrainEnergyGauge;