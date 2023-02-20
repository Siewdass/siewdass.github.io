class Trader {

  algorithm = ''
  old = 0
  drop = 0
  rise = 0
  can = false
  min = 0
  max = 0
  ALGORITHM = document.getElementById( 'algorithm' )

  constructor( algorithm ) {
    this.algorithm = algorithm
    this.ALGORITHM.innerHTML = `Algorithm: ${this.algorithm.capitalize( )}`
  }

  canBuy( price ) {
    if ( this.algorithm == 'mercury' ) {

      if ( price > this.old ) {
        this.rise += 1
        if ( this.rise >= 25 ) {
          this.rise = 0
          return true
        }
      } else if ( price < this.old ) {
        this.rise = 0
      }
      this.old = price
      return false

    } else if ( this.algorithm == 'venus' ) {

      let percent = ( ( data[ 0 ] - data[ data.length - 1 ] ) / data[ 0 ] ) * 100
      console.log( `buy ${percent} %` )

      if ( this.can ) {
        if ( percent <= -0.025 ) {
          console.log( `buy done!` )
          this.can = false
          return true
        }
      } else if ( percent >= 0.070 ) {
        this.can = true
      }
      return false

    }
  }

  canSell( price ) {
    if ( this.algorithm == 'mercury' ) {

      if ( price < this.old ) {
        this.drop += 1
        if ( this.drop >= 7 ) {
          this.drop = 0
          return true
        }
      } else if ( price < this.old ) {
        this.drop = 0
      }
      this.old = price
      return false

    } else if ( this.algorithm == 'venus' ) { 

      let percent = ( ( data[ data.length - 1 ] - data[ 0 ] ) / data[ data.length - 1 ] ) * 100
      console.log( `sell ${percent} %` )

      if ( percent <= 0.015 ) {
        console.log( `sell done!` )
        return true
      }
    
      return false

    }

  }

}