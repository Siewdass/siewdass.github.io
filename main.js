const trader = new Trader( )
const order = new Order( 100.00 )
const graph = new Graph( )
let min = 0, max = 0
let price
let percent = 0
let isRising = false, isDroping = false
let higher = 0, lowest = 0
let active = false

setInterval( async function( ) {
  try {
    const res = await fetch( 'https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT' )
    const data = await res.json( )
    price = parseFloat( data.price )

    graph.update( price )
    trader.update( price )

    if ( !active ) {
      if ( trader.canBuy( price ) ) {
        order.makerBuy( price )
        active = true
      }
    } else {
      if ( trader.canSell( price ) ) {
        order.makerSell( price )
        active = false
      }
    }
  } catch ( error ) {
    console.log( error )
  }
}, 500 )