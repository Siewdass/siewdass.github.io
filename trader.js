class Trader {

  old = 0
  drop = 0
  rise = 0
  can = false

  buying = false
  selling = false
  MERCURY = document.getElementById( 'mercury' )
  VENUS = document.getElementById( 'venus' )
  EARTH = document.getElementById( 'earth' )
  percent = 0
  price = 0
  data = [ ]
  min = 0
  max = 0

  constructor( algorithm ) {
  }

  mercury( ) {
    if ( this.price > this.old ) {
      this.rise += 1
      this.drop = 0
    } else if ( this.price < this.old ) {
      this.rise = 0
      this.drop += 1
    }
    this.old = this.price
    this.MERCURY.innerHTML = `Mercury: ( Rises ${this.rise} / Drops ${this.drop} )`

    if ( this.buying ) {

      if ( this.rise >= 25 ) {
        return true
      }
      return false

    } else if ( this.selling ) {

      if ( this.drop >= 7 ) {
        return true
      }
      return false
      
    }
  }

  venus( ) {
    this.percent = ( ( this.data[ this.data.length - 1 ] - this.data[ 0 ] ) / this.data[ this.data.length - 1 ] ) * 100
    this.VENUS.innerHTML = `Venus: ${this.percent} %`

    if ( this.buying ) {
      if ( this.can ) {
        if ( this.percent >= 0.025 ) {
          this.can = false
          return true
        }
      } else if ( this.percent <= -0.045 ) {
        this.can = true
      }
      return false

    } else if ( this.selling ) {

      if ( this.percent <= 0.015 ) {
        return true
      }
      return false

    }
  }

  earth( ) {
    this.percent = ( ( this.data[ this.data.length - 1 ] - this.data[ 0 ] ) / this.data[ this.data.length - 1 ] ) * 100
    if ( this.percent > 0 ) {
      this.max = this.price
    } else if ( this.percent < 0 ) {
      this.min = this.price
    }
    this.EARTH.innerHTML = `Earth: ( Lowest ${this.min.toFixed( 2 )} / Highest ${this.max.toFixed( 2 )} )`

    if ( this.buying ) {
      return false
    } else if ( this.selling ) {
      return false
    }
  }

  canBuy( price ) {
    this.buying = true
    this.selling = false
    this.price = price
    const mercury = this.mercury( )
    const venus = this.venus( )
    const earth = this.earth( )
    if ( venus ) { 
      return true
    }
    return false
  }

  canSell( price ) {
    this.buying = false
    this.selling = true
    this.price = price
    const mercury = this.mercury( )
    const venus = this.venus( )
    const earth = this.earth( )
    if ( venus ) { 
      return true
    }
    return false
  }

  update( price ) {
    this.data.push( price )
    if ( this.data.length > 100 ) {
      this.data.shift( )
    }
  }

}