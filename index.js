var parse = function(offset) {
  offset = offset || ""
  var tz = 0
  var tzRX = /(-?)(\d{2}):??(\d{2})/
  var match = offset.match(tzRX)
  if (match) tz = parseInt(match.slice(1,4).join(''), 10)
  return tz
}

var tzTo = module.exports = {

  minutes: function(offset) {
    var tz = parse(offset)
    return (((tz / 100) | 0) * 60) + tz % 100
  },

  hours: function(offset) {
    var tz = parse(offset)
    return ((tz / 100) | 0) + ((tz % 100) / 60)
  }

}
