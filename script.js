
let topDez 

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(dados => {
        let dadosOrdenados = dados.sort((a, b) => b.population - a.population)
        
        let topDez = dadosOrdenados.slice(0, 10)




    })

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
        let data = new google.visualization.DataTable();
        data.addColumn('string', 'País');
        data.addColumn('number', 'População');
    
        topDez.forEach(pais => {
            data.addRow([pais.name.common, pais.population]);
        });
    
        let options = {
            title: 'Países com maior população',
            chartArea: {width: '50%'},
            hAxis: {
                title: 'População',
                minValue: 0
            },
            vAxis: {
                title: 'País'
            }
        };
    
        let chart = new google.visualization.BarChart(document.getElementById('chart'));
        chart.draw(data, options);
    }
    

    