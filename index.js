!function (name, definition) {
  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()
}('tzto', function () {

  var parse = function(offset) {
    offset = offset || ""
    var ms = 0
    var tzRX = /(-?)(\d{1,2}):??(\d{2})/
    var match = offset.match(tzRX)
    if (match) {
      ms = parseInt(match[2], 10)*60*60*1000 + parseInt(match[3], 10)*60*1000
      if (match[1]) ms = ms * -1
    }
    return ms
  }

  var tzto = {

    minutes: function(offset) {
      return parse(offset) / 60 / 1000
    },

    hours: function(offset) {
      return parse(offset) / 60 / 60 / 1000
    }

  }

  return tzto

})
