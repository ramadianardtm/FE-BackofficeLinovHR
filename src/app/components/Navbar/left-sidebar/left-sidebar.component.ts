import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
declare var jquery: any;
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  @Input() currentActiveMenu;
  @Output() activeInactiveMenuEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    $('#left-sidebar').metisMenu({
      toggle: true
    });

    $( document ).ready(function() {
      $('.sidebar-nav').removeClass('metismenu');
      $('.sidebar').removeClass('metismenu');

      if ($('.open-hrms').hasClass('active')) {
        $('#hrms-ul').addClass('mm-show');
      } else {
        $('#hrms-ul').removeClass('mm-show');
      }

      if ($('.open-project').hasClass('active')) {
        $('#project-ul').addClass('mm-show');
      } else {
        $('#project-ul').removeClass('mm-show');
      }

      if ($('.open-job-portal').hasClass('active')) {
        $('#job-portal-ul').addClass('mm-show');
      } else {
        $('#job-portal-ul').removeClass('mm-show');
      }

      if ($('.open-authentication').hasClass('active')) {
        $('#authentication-ul').addClass('mm-show');
      } else {
        $('#authentication-ul').removeClass('mm-show');
      }

      if ($('.open-icon').hasClass('active')) {
        $('#icon-ul').addClass('mm-show');
      } else {
        $('#icon-ul').removeClass('mm-show');
      }

      if ($('.open-widget').hasClass('active')) {
        $('#widget-ul').addClass('mm-show');
      } else {
        $('#widget-ul').removeClass('mm-show');
      }

      $('.menu_option').on('click', function() {
        if ($('.menu_option').hasClass('active')) {
          $('.metismenu').removeClass('grid');
          $('.menu_option').removeClass('active');
        } else {
          $('.metismenu').addClass('grid');
          $('.menu_option').addClass('active');
        }
      });

      // right side bar
      $('a.settingbar').on('click', function() {
        if ($('.right_sidebar').hasClass('open')) {
          $('.right_sidebar').removeClass('open');
        } else {
          $('.right_sidebar').addClass('open');
        }
      });

      $('.user_btn').on('click', function() {

        if ($('.user_div').hasClass('open')) {
          $('.user_div').removeClass('open');
        } else {
          $('.user_div').addClass('open');
        }
      });

      $('.page').on('click', function() {
        $('.theme_div, .right_sidebar').removeClass('open');
        $('.user_div').removeClass('open');
      });

      $('.menu_toggle').on('click', function() {
        if ($('body').hasClass('offcanvas-active')) {
          $('body').removeClass('offcanvas-active');
        } else {
          $('body').addClass('offcanvas-active');
        }
      });

    });
  }

}
