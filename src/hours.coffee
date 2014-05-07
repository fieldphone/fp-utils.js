class FpUtils.Hours

  constructor: (hours) ->
    @hours = parseFloat(hours)


  toMinutes: ->
    minutes = @hours * 60
    return Math.round(minutes)