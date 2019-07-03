import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default class MixedChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false
        },

        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'Dafam Group Top Performance  (Rank 1 - 5)',
          align: 'left',
          offsetX: 110
        },
        xaxis: {
          categories: ['Rank 1', 'Rank 2', 'Rank 3', 'Rank 4', 'Rank 5']
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                color: '#008FFB'
              }
            },
            title: {
              text: 'Bookings (unit / pack)',
              style: {
                color: '#008FFB'
              }
            },
            tooltip: {
              enabled: true
            }
          },

          {
            seriesName: 'Checkin',
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                color: '#00E396'
              }
            },
            title: {
              text: 'Checkin (room / night)',
              style: {
                color: '#00E396'
              }
            }
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                color: '#FEB019'
              }
            },
            title: {
              text: 'Revenue (Million)',
              style: {
                color: '#FEB019'
              }
            }
          }
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          }
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
      series: [
        {
          name: 'Bookings',
          type: 'column',
          data: [459, 432, 407, 359, 250]
        },
        {
          name: 'Room/Night',
          type: 'column',
          data: [372, 333, 277, 215, 79]
        },
        {
          name: 'Revenue',
          type: 'line',
          data: [327.36, 293.04, 243.76, 189.2, 69.52]
        }
      ]
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="240"
        />
      </div>
    );
  }
}

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(MixedChart), domContainer);
