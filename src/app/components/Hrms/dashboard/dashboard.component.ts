import {Component, Input, OnInit} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexNonAxisChartSeries, ChartComponent} from 'ng-apexcharts';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';
import {ConstNameService} from '../../../services/const-name.service';
declare var jquery: any;
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() chart: ApexChart;
  @Input() series: ApexAxisChartSeries | ApexNonAxisChartSeries;

  url: string;
  constructor(
    private constName: ConstNameService,
  ) {
  }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
    // First Chart
    const options = {
      chart: {
        height: 300,
        type: 'radialBar'
      },

      series: [82],
      colors: ['#fed284'],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 30,
            size: '70%'
          },

          dataLabels: {
            showOn: 'always',
          }
        }
      },

      stroke: {
        lineCap: '',
      },
      labels: ['']
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);

    chart.render();

    // Second Chart
    const optionsData = {
      chart: {
        height: 400,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '65%',
        },
      },
      colors: ['#004660', '#09536e', '#1b6079', '#34738a'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 0,
      },
      series: [{
        name: 'Design',
        data: [44, 55, 57, 56, 61],
      }, {
        name: 'Development',
        data: [76, 85, 101, 98, 87]
      }, {
        name: 'Marketing',
        data: [35, 41, 36, 26, 45]
      }, {
        name: 'Other',
        data: [35, 41, 36, 26, 45]
      }],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      yaxis: {
        /*title: {
          text: '$ (thousands)'
        }*/
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return '$' + val + 'thousands';
          }
        }
      }
    }

    const barChart = new ApexCharts(document.querySelector('#chart-bar1'),
      optionsData
    );

    barChart.render();

    // Third Chart

    const optionsAreaData = {
      chart: {
        height: 200,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      colors: ['#004660'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [{
        name: 'series1',
        data: [27, 45, 54, 38, 56, 24, 65, 31]
      }],

      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00', '2018-09-19T01:30:00', '2018-09-19T02:30:00', '2018-09-19T03:30:00', '2018-09-19T04:30:00', '2018-09-19T05:30:00', '2018-09-19T06:30:00'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      }
    }

    const chartArea = new ApexCharts(
      document.querySelector('#apexspark1'),
      optionsAreaData
    );

    chartArea.render();

    // Fouth Chart

    const optionsBarData = {
      chart: {
        height: 300,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false
        },
      },
      colors: ['#1b6079', '#fed284'],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Male',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'Female',
        data: [13, 23, 20, 8, 13, 27]
      }],
      legend: {
        position: 'bottom',
        offsetY: 0
      },
      fill: {
        opacity: 1
      },
    }

    const chartBar = new ApexCharts(
      document.querySelector('#single-column-chart'),
      optionsBarData
    );

    chartBar.render();

    // Fifth Chart

    const optionsDonutChart = {
      chart: {
        type: 'donut',
        toolbar: {
          show: false
        },
      },
      colors: ['#1b6079', '#fed284'],
      series: [63, 37],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        position: 'bottom',
      },
    }

    const DonutchartData = new ApexCharts(
      document.querySelector('#GROWTH'), optionsDonutChart
    );

    DonutchartData.render();

    // Sixth Chart

    const optionsSplineChart = {
      chart: {
        height: 300,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1b6079', '#fed284'],
      stroke: {
        curve: 'smooth'
      },
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],

      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00', '2018-09-19T01:30:00', '2018-09-19T02:30:00', '2018-09-19T03:30:00', '2018-09-19T04:30:00', '2018-09-19T05:30:00', '2018-09-19T06:30:00'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      }
    }

    const chartSpline = new ApexCharts(
      document.querySelector('#chart-area-spline-sracked'),
      optionsSplineChart
    );

    chartSpline.render();

  }

}
