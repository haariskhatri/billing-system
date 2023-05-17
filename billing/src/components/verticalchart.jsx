import React from 'react';
import { Bar } from 'react-chartjs-2';

const DummyVerticalBarChart = () => {
    // Dummy data for the chart
    const data = {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [
            {
                label: 'Value',
                data: [30, 50, 20, 40, 70], // Values for each category
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
            },
        ],
    };

    return (
        <div>
            <h2>Vertical Bar Chart</h2>
            <Bar data={data} />
        </div>
    );
};

export default DummyVerticalBarChart;
