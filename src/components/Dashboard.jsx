import { Line } from "react-chartjs-2";
import { sensorData } from "../data/sensorData";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // 센서 상태 요약 계산

  const normalSensors = sensorData.filter(
    (sensor) => sensor.status === "Normal"
  ).length;
  const warningSensors = sensorData.filter(
    (sensor) => sensor.status === "Warning"
  ).length;
  const criticalSensors = sensorData.filter(
    (sensor) => sensor.status === "Critical"
  ).length;
  const offlineSensors = sensorData.filter(
    (sensor) => sensor.status === "Offline"
  ).length;
  const maintenanceSensors = sensorData.filter(
    (sensor) => sensor.status === "Maintenance"
  ).length;
  const errorSensors = sensorData.filter(
    (sensor) => sensor.status === "Error"
  ).length;

  return (
    <div className="p-6 space-y-6 bg-gray-900 text-gray-200 h-full rounded-lg">
      <div className="bg-gray-800 rounded-lg shadow p-6">
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Sensor States</h2>
        <div className="flex justify-between gap-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-600">
              {normalSensors}
            </h3>
            <p >Normal</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-600">
              {warningSensors}
            </h3>
            <p>Warning</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-600">
              {criticalSensors}
            </h3>
            <p >Critical</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-400">
              {offlineSensors}
            </h3>
            <p >Offline</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-400">
              {maintenanceSensors}
            </h3>
            <p >Maintenance</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-yellow-400">
              {errorSensors}
            </h3>
            <p>Error</p>
          </div>
        </div>
        </div>
        </div>

      <h2 className="text-2xl font-semibold">Sensor Data</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sensorData.map((sensor) => (
            <div
              key={sensor.id}
              className="bg-white rounded-lg shadow p-4 border-l-4"
              style={{
                borderColor:
                  sensor.status === "Normal"
                    ? "green"
                    : sensor.status === "Warning"
                    ? "orange"
                    : sensor.status === "Critical"
                    ? "red"
                    : sensor.status === "Offline"
                    ? "gray"
                    : sensor.status === "Maintenance"
                    ? "blue"
                    : "yellow",
              }}
            >
              <h3 className="text-lg font-bold">{sensor.name}</h3>
              <p className="text-sm text-gray-600">Value: {sensor.value}</p>
              <p
                className={`text-sm font-semibold ${
                  sensor.status === "Normal"
                    ? "text-green-600"
                    : sensor.status === "Warning"
                    ? "text-orange-600"
                    : sensor.status === "Critical"
                    ? "text-red-600"
                    : sensor.status === "Offline"
                    ? "text-gray-400"
                    : sensor.status === "Maintenance"
                    ? "text-blue-400"
                    : "text-yellow-400"
                }`}
              >
                Status: {sensor.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
