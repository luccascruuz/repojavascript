google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('number', 'Day')
data.addColumn('number', 'Número de curados')
data.addColumn('number', 'Número de óbitos')
data.addColumn('number', 'Número de contaminados');

data.addRows([
  [1,  0, 0, 1],
  [5,  0, 0, 2],
  [12,  0,  0, 7],
  [13,  1, 0, 8],
  [14,  1, 0, 11],
  [16,   1, 0, 13],
  [18, 2, 0, 13],
  [19, 2, 1, 17],
  [23,  3, 1, 18],
  [24, 4, 2, 25],
  [25,  6,  2,  25],
  [26,  9,  2,  27],
  [27,  9,  2,  29],
  [28,  10,  2,  29],
  [29, 13,2, 31],
  [31, 15, 2, 32],
  [34, 45, 2, 95],
  [35, 46, 2, 99],
  [37, 51, 2, 110],
  [38, 53, 2, 118],
  [39, 55, 2, 118]
]);

var options = {
  chart: {
    title: 'Painel COVID-19 Lagarto',
    subtitle: 'FIQUE EM CASA',

  },
  width: 1535,
  height: 665,
  axes: {
    x: {
      0: {side: 'top'}
    }
  }
};

var chart = new google.charts.Line(document.getElementById('line_top_x'));

chart.draw(data, google.charts.Line.convertOptions(options));
}