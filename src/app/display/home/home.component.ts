import { ChartService } from './../../service/chart.service';
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chartDom = document.getElementById('linechart')!;

  // options: any

  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [108, 110, 95, 97, 101, 92, 93],
        type: 'line',
        smooth: true
      },
      {
        data: [820, 932, 901, 934, 1290, 1330, 200],
        type: 'bar',
      }
    ]
  };

  constructor(
    private cs: ChartService
  ) { }

  ngOnInit(): void {
    this.options = this.cs.lineChart(this.chartDom)

    // let myChart = echarts.init(this.chartDom);
    // this.options && myChart.setOption(this.options);
  }

}
