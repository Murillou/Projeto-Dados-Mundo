const btnOne = document.querySelector('#buttonOne')
const title = document.querySelector('#title')
          
btnOne.addEventListener('click', e =>{
    
    title.textContent = "10 Países mais populosos do mundo"
      
    google.charts.load('current', {packages: ['corechart']})
    google.charts.setOnLoadCallback(drawChart)

    function drawChart(){
        const container = document.querySelector("#chart")
        const data = new google.visualization.arrayToDataTable([
            ['Country', 'Population', { role: 'style'}],
            ['World', 8000000000, '#FFA500'],
            ['China', 1426000000, '#FFA500'],
            ['Índia', 1412000000, '#FFA500'],
            ['EUA', 337000000, 'color:#FFA500;'],
            ['Indónésia', 275000000, '#FFA500'],
            ['Paquistão', 234000000, '#FFA500'],
            ['Nigéria', 216000000, '#FFA500'],
            ['Brasil', 215000000, '#FFA500'],
            ['Bangladesh', 170000000, '#FFA500'],
            ['Russia', 127000000,'#FFA500' ]
        ])
        
        const options = {
            width: 900,
            height: 500,
            bar: {groupWidth: "90%"},
            backgroundColor: '#e9e9e9'
        }
        
        const chart = new google.visualization.BarChart(container)
        chart.draw(data, options)
      }
      
      })


const btnTwo = document.querySelector('#buttonTwo')

btnTwo.addEventListener('click', e =>{
    title.textContent = '10 Idiomas mais falados do mundo'

    google.charts.load('current', {packages: ['coreChart']})
    google.charts.setOnLoadCallback(drawChart)

    function drawChart(){
        const container = document.querySelector('#chart')
        const data = new google.visualization.arrayToDataTable([
            ['Idiomas', 'Quantidade', {role: 'style'}],
            ['Inglês', 1500000000, '#FFA500'],
            ['Mandarim',1100000000, '#FFA500'],
            ['Hindi',602200000, '#FFA500'],
            ['Espanhol',538300000, '#FFA500'],
            ['Francês',274100000, '#FFA500'],
            ['Árabe',274000000, '#FFA500'],
            ['Bengali',272200000, '#FFA500'],
            ['Russo',258200000, '#FFA500'],
            ['Português',257700000, '#FFA500'],
            ['Urdu',231300000, '#FFA500']
        ])

        const options = {
            width: 900,
            height: 500,
            bar: {groupWidth: "90%"},
            backgroundColor: '#e9e9e9'
        }

        const chart = new google.visualization.BarChart(container)
        chart.draw(data, options)
    }
})