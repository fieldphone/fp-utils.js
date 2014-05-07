class FpUtils.Minutes

  constructor: (minutes) ->
    @minutes = parseInt(minutes)
    @minute  = @minutes % 60
    @hour    = Math.floor(@minutes / 60)


  toHours: (digits) ->
    digits ?= 1
    
    round = Math.pow(10, digits)
    hours = @minutes / 60
    return Math.round(hours * round) / round;