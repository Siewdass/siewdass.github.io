String.prototype.capitalize = function(  ) {
  return this[ 0 ].toUpperCase( ) + this.slice( 1 )
}

Number.prototype.withZero = function( ) {
  return this.toString( ).length == 1 ? '0' + this.toString( ) : this.toString( )
}

const TIME = document.getElementById( 'time' )
let days = 0, hours = 0, minutes = 0, seconds = 0

setInterval( function( ) {
  seconds += 1
  if ( seconds >= 60 ) {
    seconds = 0
    minutes += 1
  }
  if ( minutes >= 60 ) {
    minutes = 0
    hours += 1
  }
  if ( hours >= 24 ) {
    hours = 0
    days += 1
  }
  TIME.innerHTML = `Time: ${days.withZero( )}d ${hours.withZero( )}h ${minutes.withZero( )}m ${seconds.withZero( )}s`
}, 1000 )


class Element {
  id( value ) {
    return document.getElementById( value )
  }
}