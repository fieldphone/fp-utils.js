describe "12hour", ->

  describe '1-6', ->
    
    it 'should return "1:00pm" given "1" ', ->
      chai.should()
      new FpUtils.TimeString('1').sanitize().should.eql '1:00pm'

    it 'should return "2:00pm" given "2" ', ->
      new FpUtils.TimeString('2').sanitize().should.eql '2:00pm'
    
    it 'should return "3:00pm" given "3" ', ->
      new FpUtils.TimeString('3').sanitize().should.eql '3:00pm'
    
    it 'should return "4:00pm" given "4" ', ->
      new FpUtils.TimeString('4').sanitize().should.eql '4:00pm'
    
    it 'should return "5:00pm" given "5" ', ->
      new FpUtils.TimeString('5').sanitize().should.eql '5:00pm'
    
    it 'should return "6:00pm" given "6" ', ->
      new FpUtils.TimeString('6').sanitize().should.eql '6:00pm'


  describe '7-12', ->
    
    it 'should return "7:00am" given "7" ', ->
      new FpUtils.TimeString('7').sanitize().should.eql '7:00am'
    
    it 'should return "8:00am" given "8" ', ->
      new FpUtils.TimeString('8').sanitize().should.eql '8:00am'
    
    it 'should return "9:00am" given "9" ', ->
      new FpUtils.TimeString('9').sanitize().should.eql '9:00am'
    
    it 'should return "10:00am" given "10" ', ->
      new FpUtils.TimeString('10').sanitize().should.eql '10:00am'
    
    it 'should return "11:00am" given "11" ', ->
      new FpUtils.TimeString('11').sanitize().should.eql '11:00am'
    
    it 'should return "12:00pm" given "12" ', ->
      new FpUtils.TimeString('12').sanitize().should.eql '12:00pm'

  describe '100-699', ->
  
    it 'should return "1:00pm" given "100" ', ->
      new FpUtils.TimeString('100').sanitize().should.eql "1:00pm"

    it 'should return "1:05pm" given "105" ', ->
      new FpUtils.TimeString('105').sanitize().should.eql "1:05pm"

    it 'should return "3:30pm" given "330" ', ->
      new FpUtils.TimeString('330').sanitize().should.eql "3:30pm"

    it 'should return "6:30pm" given "630" ', ->
      new FpUtils.TimeString('630').sanitize().should.eql "6:30pm"

  describe '700-1299', ->

    it 'should return "7:00am" given "700" ', ->
      new FpUtils.TimeString('700').sanitize().should.eql "7:00am"

    it 'should return "7:05am" given "705" ', ->
      new FpUtils.TimeString('705').sanitize().should.eql "7:05am"

    it 'should return "10:30am" given "1030" ', ->
      new FpUtils.TimeString('1030').sanitize().should.eql "10:30am"

    it 'should return "12:30pm" given "12:30" ', ->
      new FpUtils.TimeString('12:30').sanitize().should.eql "12:30pm"

  describe '1300-2400', ->

    it 'should return "1:00pm" given "1300" ', ->
      new FpUtils.TimeString('1300').sanitize().should.eql "1:00pm"

    it 'should return "1:30pm" given "1330" ', ->
      new FpUtils.TimeString('1330').sanitize().should.eql "1:30pm"

    it 'should return "5:30pm" given "1730" ', ->
      new FpUtils.TimeString('1730').sanitize().should.eql "5:30pm"

describe '1a-12a', ->

  it 'should return "1:00am" given "1a" ', ->
    new FpUtils.TimeString('1a').sanitize().should.eql "1:00am"

  it 'should return "1:30am" given "1:30a" ', ->
    new FpUtils.TimeString('1:30a').sanitize().should.eql "1:30am"


