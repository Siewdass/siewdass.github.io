const trader = new Trader( 'venus' )
const order = new Order( 100.00 )
const graph = new Graph( )

setInterval( async function( ) {
  try {
    const res = await fetch( 'https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT' )
    const data = await res.json( )
    price = parseFloat( data.price )

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

    graph.update( price )
    /*const val = graph.getValues( )
    percent = ( ( val[ val.length - 1 ] - val[ 0 ] ) / val[ val.length - 1 ] ) * 100
    if ( percent > 0 ) {
      if ( isRising == false ) {
        isRising
      }
      lowest = min
      max = price

    } else if ( percent < 0 ) {
      higher = max
      min = price
    }

    console.log( `min: ${min}`, `max: ${max}` )*/
  } catch ( error ) {
    console.log( error )
  }
}, 500 )