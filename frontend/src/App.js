import React from 'react';
import { Bar } from 'react-chartjs-2';

const App = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // This specifies that the x-axis scale should be of type 'category'
        labels: {
          // You can add additional configurations for x-axis labels here
        },
      },
      y: {
        // You can configure the y-axis scale here
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default App;
