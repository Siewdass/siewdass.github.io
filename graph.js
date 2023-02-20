class Graph {

  PRICE = document.getElementById( 'price' )

  chart = new Chart( document.getElementById( 'chart' ), {
    type: 'line',
    data: {
      labels: [ ],
      datasets: [ {
        lineTension: 0.3,
        data: [ ],
        segment: {
          borderColor: ( ctx ) => {
            return ctx.p0.parsed.y > ctx.p1.parsed.y ? 'red' : '#00c942'
          }
        }
      } ]
    },
    options: {
      events: [ ],
      animation: { x: { duration: 100 }, y: {  duration: 0 } },
      plugins: { legend: { display: false } },
      scales: { y: { display: false }, x: { display: false } },
      fill: false,
      interaction: { intersect: false },
      radius: 0
    }
  } )

  update( price ) {
    this.chart.data.datasets[ 0 ].data.push( price )
    data.push( price )
    this.chart.data.labels.push( new Date( ).getTime( ) )
    if ( this.chart.data.datasets[ 0 ].data.length > 100 ) {
      this.chart.data.datasets[ 0 ].data.shift( )
      this.chart.data.labels.shift( )
      data.shift( )
    }
   this.PRICE.innerHTML = `Price: ${price} $`
    this.chart.update( )
  }

  getValues( ) {
    return this.chart.data.datasets[ 0 ].data
  }
  
}