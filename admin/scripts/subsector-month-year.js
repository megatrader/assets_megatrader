
$(
    function(){
  
  
          'use strict'; // Start of use strict
  
          var chartData = [
          {
              'date': '2016-01-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 919,
              'value': 32
          },
          {
              'date': '2016-02-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 806,
              'value': 905
          },
          {
              'date': '2016-03-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 608,
              'value': 802
          },
          {
              'date': '2016-04-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 1,
              'value': 304
          },
          {
              'date': '2016-05-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 1,
              'value': 228
          },
          {
              'date': '2016-06-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 807,
              'value': 809
          },
          {
              'date': '2016-07-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 684,
              'value': 765
          },
          {
              'date': '2016-08-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 654,
              'value': 712
          },
          {
              'date': '2016-09-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 250,
              'value': 408
          },
          {
              'date': '2016-10-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 1,
              'value': 43
          },
          {
              'date': '2016-11-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 1,
              'value': 58
          },
          {
              'date': '2016-12-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity':1,
              'value': 119
          },
          {
              'date': '2017-01-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 0,
              'value': 93
          },
          {
              'date': '2017-02-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 0,
              'value': 78
          },
          {
              'date': '2017-03-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 0,
              'value': 76
          },
          {
              'date': '2017-04-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 476,
              'value': 0
          },
          {
              'date': '2017-05-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 242,
              'value': 0
          },
          {
              'date': '2017-06-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 250,
              'value': 208
          },
          {
              'date': '2017-07-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 0,
              'value': 78
          },
          {
              'date': '2017-08-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 0,
              'value': 59
          },
          {
              'date': '2017-09-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 0,
              'value': 54
          },
          {
              'date': '2017-10-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 75,
              'value': 0
          },
          {
              'date': '2017-11-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 334,
              'value': 0
          },
          {
              'date': '2017-12-01',
              'product': 'Telefono',
              'product2': 'Telefono',
              'townSize': 25,
              'latitude': 40.71,
              'quantity': 0,
              'value': 73
          },
          ];
  
  
          var chart = AmCharts.makeChart('duration-value-axis', {
              'type': 'serial',
              'theme': 'dark',
              'language':'es',
              'dataDateFormat': 'YYYY-MM-DD',
              'dataProvider': chartData,
  
              'addClassNames': true,
              'startDuration': 1,
              'color': '#FFFFFF',
              'marginLeft': 0,
  
              'categoryField': 'date',
              'categoryAxis': {
                  'parseDates': true,
                  'minPeriod': 'DD',
                  'autoGridCount': false,
                  'gridCount': 50,
                  'gridAlpha': 0.1,
                  // "gridColor": "#FFFFFF",
                  'axisColor': '#555555',
                  'dateFormats': [{
                      'period': 'DD',
                      'format': 'DD'
                  }, {
                      'period': 'WW',
                      'format': 'MMM DD'
                  }, {
                      'period': 'MM',
                      'format': 'MMM'
                  }, {
                      'period': 'YYYY',
                      'format': 'YYYY'
                  }]
              },
  
              'valueAxes': [{
                  'id': 'a1',
                  'title': 'quantity',
                  'gridAlpha': 0,
                  'axisAlpha': 0
              }, {
                  'id': 'a2',
                  'position': 'right',
                  'gridAlpha': 0,
                  'axisAlpha': 0,
                  'labelsEnabled': false
              }, {
                  'id': 'a3',
                  'title': 'value',
                  'position': 'right',
                  'gridAlpha': 0,
                  'axisAlpha': 0,
                  'inside': true
              }],
              'graphs': [{
                  'id': 'g1',
                  'valueField': 'quantity',
                  'title': 'quantity',
                  'type': 'column',
                  'fillAlphas': 0.9,
                  'valueAxis': 'a1',
                  'balloonText': '[[value]] units',
                  'legendValueText': '[[value]] mi',
                  'legendPeriodValueText': 'total: [[value.sum]] mi',
                  'lineColor': '#428bca',
                  'alphaField': 'alpha'
              }, {
                  'id': 'g3',
                  'title': 'value',
                  'valueField': 'value',
                  'type': 'line',
                  'valueAxis': 'a3',
                  'lineColor': '#E5343D',
                  'balloonText': '[[value]]',
                  'lineThickness': 1,
                  'legendValueText': '[[value]]',
                  'bullet': 'square',
                  'bulletBorderColor': '#E5343D',
                  'bulletBorderThickness': 1,
                  'bulletBorderAlpha': 1,
                  'dashLengthField': 'dashLength',
                  'animationPlayed': true
              }],
  
              'chartCursor': {
                  'zoomable': false,
                  'categoryBalloonDateFormat': 'DD',
                  'cursorAlpha': 0,
                  'valueBalloonsEnabled': false
              },
              'legend': {
                  'bulletType': 'round',
                  'equalWidths': false,
                  'valueWidth': 120,
                  'useGraphSettings': true,
                  'color': '#FFFFFF'
              }
          });
  
  
          function balloon(item, graph) {
              var txt;
              if (graph.id == 'asks') {
                  txt = 'Ask: <strong>' + formatNumber(item.dataContext.value, graph.chart, 4) + '</strong><br />'
                      + 'Total volume: <strong>' + formatNumber(item.dataContext.askstotalvolume, graph.chart, 4) + '</strong><br />'
                      + 'Volume: <strong>' + formatNumber(item.dataContext.asksvolume, graph.chart, 4) + '</strong>';
              }
              else {
                  txt = 'Bid: <strong>' + formatNumber(item.dataContext.value, graph.chart, 4) + '</strong><br />'
                      + 'Total volume: <strong>' + formatNumber(item.dataContext.bidstotalvolume, graph.chart, 4) + '</strong><br />'
                      + 'Volume: <strong>' + formatNumber(item.dataContext.bidsvolume, graph.chart, 4) + '</strong>';
              }
              return txt;
          }
  
          function formatNumber(val, chart, precision) {
              return AmCharts.formatNumber(
                  val,
                  {
                      precision: precision ? precision : chart.precision,
                      decimalSeparator: chart.decimalSeparator,
                      thousandsSeparator: chart.thousandsSeparator
                  }
              );
          }
  
  
  
    }
  );
  