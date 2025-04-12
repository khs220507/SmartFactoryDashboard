
import { Line } from 'react-chartjs-2';
import { sensorData, temperatureData } from '../data/sensorData';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);


export default function Dashboard() {
   
  
    return (
      <div className="p-6 space-y-6 bg-gray-100 h-full">
        <h2 className="text-2xl font-semibold">📊 센서 데이터</h2>
        <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sensorData.map((sensor) => (
          <div
            key={sensor.id}
            className="bg-white rounded-lg shadow p-4 border-l-4"
            style={{
              borderColor: sensor.status === '정상' ? 'green' : 'orange',
            }}
          >
            <h3 className="text-lg font-bold">{sensor.name}</h3>
            <p className="text-sm text-gray-600">값: {sensor.value}</p>
            <p
              className={`text-sm font-semibold ${
                sensor.status === '정상' ? 'text-green-600' : 'text-orange-600'
              }`}
            >
              상태: {sensor.status}
            </p>
          </div>
        ))}
      </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">🌡️ 24시간 온도 변화</h2>
        <Line data={temperatureData} />
      </div>
      </div>
    )
  }

 