class Order {
  old = 0
  orders = 0
  amount = 100.00
  percent = 0

  AMOUNT = document.getElementById( 'total' )
  STATUS = document.getElementById( 'status' )
  BUYEDAT = document.getElementById( 'buyedat' )
  SELLEDAT = document.getElementById( 'selledat' )
  ORDERS = document.getElementById( 'orders' )

  constructor( amount ) {
    this.amount = amount
    this.AMOUNT.innerHTML = `Amount: ${this.amount.toFixed( 2 )} $`
  }

  makerBuy( price ) {
    this.STATUS.innerHTML = `Status: Buyed`
    this.BUYEDAT.innerHTML = `Buyed at: ${price} $`
    this.SELLEDAT.innerHTML = `Selled at: 0.00 $`
    this.old = price
  }

  makerSell( price ) {
    this.STATUS.innerHTML = `Status: Selled`
    this.SELLEDAT.innerHTML = `Selled at: ${price} $`
    this.percent = ( ( price - this.old ) / price ) * 100
    this.amount += ( this.percent / this.amount ) * 100
    this.AMOUNT.innerHTML = `Amount: ${this.amount.toFixed( 2 )} $`
    this.orders += 1
    this.ORDERS.innerHTML = `Orders: ${this.orders}`
  }

}