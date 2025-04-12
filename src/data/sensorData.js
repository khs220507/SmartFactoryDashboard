const sensorData = [
    { id: 1, name: '온도 센서', value: '25°C', status: '정상' },
    { id: 2, name: '습도 센서', value: '60%', status: '정상' },
    { id: 3, name: '압력 센서', value: '1.2 bar', status: '주의' },
  ];

  const temperatureData = {
    labels: [
      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
      '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
      '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
    ],
    datasets: [
      {
        label: '온도 (°C)',
        data: [
          22, 21, 20, 19, 18, 18, 19, 20, 22, 24, 26, 27, 28, 29, 30, 31, 30, 29,
          28, 26, 25, 24, 23, 22,
        ],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };
  
  export { sensorData, temperatureData };