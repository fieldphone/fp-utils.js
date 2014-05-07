this.FpUtils = {};

FpUtils.TimeString = (function() {
  function TimeString(string, options) {
    this.string = string;
    this.options = options || {};
    this.regx12hr = /^(1[012]|0?[1-9]):?([0-5]?\d)?\s?(am|pm|a|p)?$/i;
    this.regx24hr = /^(2[0-4]|1\d|0?\d):?([0-5]?\d)?$/;
  }

  TimeString.prototype.sanitize = function(opts) {
    var ampm, hours, match, minutes, sTime;
    if (opts == null) {
      opts = {};
    }
    sTime = this._insertColon(this.string);
    match = sTime.match(this.regx12hr) || sTime.match(this.regx24hr);
    if (match) {
      hours = parseInt(match[1]);
      minutes = parseInt(match[2]);
      ampm = match[3];
      return this._normalize12hr(hours, minutes, ampm);
    }
  };

  TimeString.prototype.toInt = function() {
    var time;
    time = this._normalize();
    if (!time) {
      return;
    }
    return this._minutes_past_midnight(time);
  };

  TimeString.prototype._minutes_past_midnight = function(time) {
    var hour, minute;
    hour = parseInt(time[0]);
    minute = parseInt(time[1]);
    return (hour * 60) + minute;
  };

  TimeString.prototype._normalize = function() {
    var ampm, hours, match, minutes, sTime;
    sTime = this._insertColon(this.string);
    match = sTime.match(this.regx12hr) || sTime.match(this.regx24hr);
    if (!match) {
      return;
    }
    hours = parseInt(match[1]);
    minutes = parseInt(match[2]);
    ampm = match[3];
    if (hours < 12 && ampm && ampm.toLowerCase().indexOf('p') !== -1) {
      hours += 12;
    }
    return [hours, minutes];
  };

  TimeString.prototype._normalize12hr = function(hours, minutes, ampm) {
    if (!ampm) {
      ampm = hours >= 7 ? 'am' : 'pm';
    }
    if (hours >= 12) {
      hours = hours - 12;
      ampm = "pm";
    }
    if (hours === 0) {
      hours = 12;
      ampm = "pm";
    }
    if (ampm.length === 1) {
      ampm = ampm + 'm';
    }
    minutes = ("0" + minutes).slice(-2);
    return hours + ':' + minutes + ampm;
  };

  TimeString.prototype._insertColon = function(sTime) {
    var ampm, match, offset, time;
    sTime = sTime.replace(/\s*/g, '');
    sTime = sTime.replace(/\.|,/, ':');
    if (sTime.indexOf(":") !== -1) {
      return sTime;
    }
    if (match = sTime.match(/(\d+)(am|pm|a|p)?/i)) {
      time = match[1] || "";
      if (time.length < 3) {
        time += "00";
      }
      ampm = match[2] || "";
      offset = time.length - 2;
      return time.slice(0, offset) + ":" + time.slice(offset, time.length) + ampm;
    } else {
      return "";
    }
  };

  return TimeString;

})();

FpUtils.MinutesPastMidnight = (function() {
  function MinutesPastMidnight(minutes) {
    this.minutes = parseInt(minutes);
    this.minute = this.minutes % 60;
    this.hour = Math.floor(this.minutes / 60);
  }

  MinutesPastMidnight.prototype.toString = function(format) {
    if (format == null) {
      format = "h:mma";
    }
    return moment({
      hour: this.hour,
      minute: this.minute
    }).format(format);
  };

  return MinutesPastMidnight;

})();

FpUtils.Minutes = (function() {
  function Minutes(minutes) {
    this.minutes = parseInt(minutes);
    this.minute = this.minutes % 60;
    this.hour = Math.floor(this.minutes / 60);
  }

  Minutes.prototype.toHours = function(digits) {
    var hours, round;
    if (digits == null) {
      digits = 1;
    }
    round = Math.pow(10, digits);
    hours = this.minutes / 60;
    return Math.round(hours * round) / round;
  };

  return Minutes;

})();

FpUtils.Hours = (function() {
  function Hours(hours) {
    this.hours = parseFloat(hours);
  }

  Hours.prototype.toMinutes = function() {
    var minutes;
    minutes = this.hours * 60;
    return Math.round(minutes);
  };

  return Hours;

})();

FpUtils.String = (function() {
  function String(string) {
    this.string = string;
  }

  String.prototype.toTime = function(options) {
    return new FpUtils.TimeString(this.string, options).sanitize();
  };

  return String;

})();
