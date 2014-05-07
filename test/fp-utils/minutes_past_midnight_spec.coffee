describe "12hour", ->
  
  it 'should return "12:00am" given "0" ', ->
    chai.should()
    new FpUtils.MinutesPastMidnight(0).toString().should.eql '12:00am'

  it 'should return "1:00pm" given "780" ', ->
    new FpUtils.MinutesPastMidnight(780).toString().should.eql '1:00pm'

  it 'should return "1:05pm" given "785" ', ->
    new FpUtils.MinutesPastMidnight(785).toString().should.eql '1:05pm'
  
