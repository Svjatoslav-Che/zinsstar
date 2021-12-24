const getChartOptions = (title: string, legend: string[], xAxisData: string[], series: any[]) => ({
  title: {
    text: title,
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: legend,
  },
  grid: {
    left: '0%',
    right: '1%',
    bottom: '0%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: xAxisData,
  },
  yAxis: {
    type: 'value'
  },
  series,
});

export { getChartOptions };
