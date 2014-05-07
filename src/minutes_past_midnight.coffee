class FpUtils.MinutesPastMidnight
      
  constructor: (minutes) ->
    @minutes = parseInt(minutes)
    @minute  = @minutes % 60
    @hour    = Math.floor(@minutes / 60)

  toString: (format = "h:mma") ->
    moment(
      hour: @hour, 
      minute: @minute
    ).format(format)