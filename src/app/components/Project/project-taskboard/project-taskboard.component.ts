import {Component, Input, OnInit} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexNonAxisChartSeries, ChartComponent} from 'ng-apexcharts';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';
import {ConstNameService} from '../../../services/const-name.service';
declare var jquery: any;
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-project-taskboard',
  templateUrl: './project-taskboard.component.html',
  styleUrls: ['./project-taskboard.component.scss']
})
export class ProjectTaskboardComponent implements OnInit {

  url: string;
  @Input() chart: ApexChart;
  @Input() series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
    this.expandData();
    // this.chartData();
  }

  chartData() {
// First Chart
    const options = {
      chart: {
        height: 100,
        type: 'radialBar'
      },

      series: [23],
      colors: ['#6e7687'],
      bgColor: ['#3f454a'],
      fgColor: ['#6e7687'],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 30,
            size: '1000%'
          },

          dataLabels: {
            showOn: 'always',
            value: {
              color: '#6e7687',
              fontSize: '30px',
              show: true,
              thikness: 0.01
            }
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
  }

  expandData() {
    $( document ).ready(function() {
      const DIV_CARD = 'div.card';
      $('[data-toggle="card-remove"]').on('click', function(e) {
        const card = $(this).closest(DIV_CARD);
        card.remove();
        e.preventDefault();
        return false;
      });
      /** Function for collapse card */
      $('[data-toggle="card-collapse"]').on('click', function(e) {
        const card = $(this).closest(DIV_CARD);
        if (card.hasClass('card-collapsed')) {
          card.removeClass('card-collapsed');
        } else {
          card.addClass('card-collapsed');
        }
        e.preventDefault();
        return false;
      });

      $('[data-toggle="card-fullscreen"]').on('click', function(e) {
        const card = $(this).closest(DIV_CARD);
        if (card.hasClass('card-fullscreen')) {
          card.removeClass('card-fullscreen');
        } else {
          card.addClass('card-fullscreen');
        }
        e.preventDefault();
        return false;
      });
    });
  }

}
