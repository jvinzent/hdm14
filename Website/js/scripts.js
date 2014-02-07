$(document).ready(function() {

var options = {
    chart: {
        renderTo: 'graph-container',
        defaultSeriesType: 'bar'
    },
    title: {
        text: 'Presence des elus'
    },
    xAxis: {
        categories: [],
		 title: {
                    text: null
                }
    },
    yAxis: {
        min: 0,
                title: {
                    text: 'Presence',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
    },
	tooltip: {
                valueSuffix: ''
            },
	plotOptions: {
		bar: {
			dataLabels: {
				enabled: true
			}
		}
	},
	legend: {
		enabled:false
	},
    series: []
};

$.get('/data/presences_totaux.csv', function(data) {
    // Split the lines
    var lines = data.split('\n');
    
    // Iterate over the lines and add categories or series
    $.each(lines, function(lineNo, line) {
        var items = line.split(',');
        
        // header line containes categories
        if (lineNo == 0) {
            $.each(items, function(itemNo, item) {
                if (itemNo > 0) options.xAxis.categories.push(item);
            });
        }
        
        // the rest of the lines contain data with their name in the first 
        // position
        else {
            var series = {
                data: []
            };
            $.each(items, function(itemNo, item) {
                if (itemNo == 0) {
                    series.name = item;
                } else {
                    series.data.push(parseFloat(item));
                }
            });
            
            options.series.push(series);
    
        }
        
    });
    
    // Create the chart
    var chart = new Highcharts.Chart(options);
});

});