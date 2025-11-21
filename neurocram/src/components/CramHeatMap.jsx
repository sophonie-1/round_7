import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CramHeatMap = ({ subjectsWithUrgency }) => {
  const data = {
    labels: subjectsWithUrgency.map(s => s.name),
    datasets: [{
      label: 'Urgency Score',
      data: subjectsWithUrgency.map(s => s.urgency),
      backgroundColor: subjectsWithUrgency.map(s => 
        `hsl(${Math.max(0, 120 - s.urgency * 10)}, 100%, 50%)`  // Green-to-red gradient
      ),
      borderColor: '#00FFFF',
      borderWidth: 1,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Subject Urgency Heat', color: '#00FFFF', font: { size: 14 } },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#FFFFFF' }, grid: { color: '#333' } },
      x: { ticks: { color: '#FFFFFF' }, grid: { color: '#333' } },
    },
    backgroundColor: 'transparent',
  };

  return (
    <div className="bg-neuro-gray p-4 rounded-lg border border-neuro-neon/30">
      <h3 className="text-xl font-bold text-neuro-neon mb-4">CramHeat Map</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CramHeatMap;