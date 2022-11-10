import { Injectable } from '@angular/core';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  lineChart(chartDom: HTMLElement) {
    const options: EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ]
    };
    let myChart = echarts.init(chartDom);
    options && myChart.setOption(options);
    return options
  }
}
