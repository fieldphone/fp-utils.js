# FpUtils

Common utilities for fieldphone.com

### Compile with grunt (see http://gruntjs.com/getting-started)
```
$ npm install -g grunt-cli
$ npm install
$ grunt
```

## Usage

### FpUtils.String
```coffeescript
  FpUtils.String(1).toTime() #will return a new instance of FpUtils.TimeString
```

### FpUtils.TimeString

```coffeescript

  #1 through 6 and 12 will sanitize to pm
  time = new FpUtils.TimeString('1')
  time.sanitize() #will return'1:00pm'

  #7 through 11 will sanitize to am
  time = new FpUtils.TimeString('7')
  time.sanitize() #will return '7:00am'
 
  #100 through 655 will sanitize to pm
  time = new FpUtils.TimeString('105')
  time.sanitize() #will return "1:05pm"
  
  #time entered in military time
  #1300-2400 will sanitize to standard time
  time = new FpUtils.TimeString('1300')
  time.sanitize() #will return "1:00pm"

```

## Dependencies
* none as of today

## TODO
* FpUtils.TimeString add output format option for `24hr` or `12hr` (currently output in 12hr) 