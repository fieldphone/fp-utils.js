class FpUtils.TimeString
      
  constructor: (string, options) ->
    @string   = string
    @options  = options || {}
    @regx12hr = /^(1[012]|0?[1-9]):?([0-5]?\d)?\s?(am|pm|a|p)?$/i
    @regx24hr = /^(2[0-4]|1\d|0?\d):?([0-5]?\d)?$/

  sanitize: (opts = {}) ->
    sTime = @_insertColon(@string)
    match = sTime.match(@regx12hr) || sTime.match(@regx24hr)
    if match
      hours   = parseInt match[1]
      minutes = parseInt match[2]
      ampm    = match[3]
      return @_normalize12hr(hours, minutes, ampm)


  toInt: ->
    time = @_normalize()
    return unless time
    @_minutes_past_midnight(time)



#private
  
  _minutes_past_midnight: (time) ->
    hour     = parseInt(time[0])
    minute   = parseInt(time[1])
    (hour * 60) + minute

  _normalize: () ->
    sTime = @_insertColon(@string)
    match = sTime.match(@regx12hr) || sTime.match(@regx24hr)
    return unless match
    
    hours   = parseInt match[1]
    minutes = parseInt match[2]
    ampm    = match[3]
    
    if hours < 12 && ampm && ampm.toLowerCase().indexOf('p') isnt -1
      hours += 12

    return [hours, minutes]

  _normalize12hr: (hours, minutes, ampm) ->
    unless ampm
      ampm = if hours >= 7
        'am'
      else
        'pm'

    if (hours >= 12)
      hours = hours - 12
      ampm  = "pm"

    if hours is 0
      hours = 12
      ampm  = "pm"

    if ampm.length is 1
      ampm = ampm + 'm'

    minutes = ("0" + minutes).slice(-2)

    #return [hours, minutes, ampm]
    return hours + ':' + minutes + ampm
    

  _insertColon: (sTime) ->
    sTime = sTime.replace(/\s*/g, '')
    sTime = sTime.replace(/\.|,/, ':')
    return sTime unless sTime.indexOf(":") is -1
    if match = sTime.match(/(\d+)(am|pm|a|p)?/i)
      time = match[1] || ""
      time += "00" if time.length < 3
      ampm = match[2] || ""
      offset = time.length - 2
      time.slice(0, offset ) + ":" + time.slice(offset, time.length) + ampm
    else 
      ""

