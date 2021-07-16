import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { PRIME_COLOR_CODE } from 'common/constants';

interface Props {
  labels: Array<string>;
  data: Array<number>;
}

const BarStudyChart: React.FC<Props> = ({ labels, data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let myChart: Chart<any>;

    if (chartRef.current) {
      myChart = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              data,
              backgroundColor: '#F1FFFF',
              hoverBackgroundColor: PRIME_COLOR_CODE,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {},
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      myChart.render();
    }

    return () => myChart.destroy();
  }, [labels, data]);

  return <canvas ref={chartRef}>브라우저에서 지원하지 않습니다</canvas>;
};

export default BarStudyChart;
