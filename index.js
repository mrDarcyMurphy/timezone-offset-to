!function (name, definition) {
  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()
}('tzto', function () {

  var parse = function(offset) {
    offset = offset || ""
    var tz = 0
    var tzRX = /(-?)(\d{1,2}):??(\d{2})/
    var match = offset.match(tzRX)
    if (match) tz = parseInt(match.slice(1,4).join(''), 10)
    return tz
  }

  var tzto = {

    minutes: function(offset) {
      var tz = parse(offset)
      return (((tz / 100) | 0) * 60) + tz % 100
    },

    hours: function(offset) {
      var tz = parse(offset)
      return ((tz / 100) | 0) + ((tz % 100) / 60)
    }

  }

  return tzto

})
