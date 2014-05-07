class FpUtils.String
  
  constructor: (@string) ->

  toTime: (options) ->
    new FpUtils.TimeString( @string, options ).sanitize()


