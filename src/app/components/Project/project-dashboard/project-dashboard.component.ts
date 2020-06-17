import {Component, Input, OnInit} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexNonAxisChartSeries, ChartComponent} from 'ng-apexcharts';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';
import {ConstNameService} from '../../../services/const-name.service';
declare var jquery: any;
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

  url: string;
  @Input() chart: ApexChart;
  @Input() series: ApexAxisChartSeries | ApexNonAxisChartSeries;

  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;

    const optionsMixedData = {
      chart: {
        height: 300,
        type: 'line',
        toolbar: {
          show: false
        },
      },
      colors: ['#1b6079', '#fed284'],
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320],
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22]
      }],
      stroke: {
        width: [0, 4]
      },
      title: {
        text: 'Traffic Sources'
      },
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001'],
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Website Blog',
        },
      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }]

    }

    const chartMixed = new ApexCharts(
      document.querySelector('#chart-combination'),
      optionsMixedData
    );

    chartMixed.render();
    this.expandData();

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
