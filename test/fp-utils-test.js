describe("12hour", function() {
  it('should return "12:00am" given "0" ', function() {
    chai.should();
    return new FpUtils.MinutesPastMidnight(0).toString().should.eql('12:00am');
  });
  it('should return "1:00pm" given "780" ', function() {
    return new FpUtils.MinutesPastMidnight(780).toString().should.eql('1:00pm');
  });
  return it('should return "1:05pm" given "785" ', function() {
    return new FpUtils.MinutesPastMidnight(785).toString().should.eql('1:05pm');
  });
});

describe("12hour", function() {
  describe('1-6', function() {
    it('should return "1:00pm" given "1" ', function() {
      chai.should();
      return new FpUtils.TimeString('1').sanitize().should.eql('1:00pm');
    });
    it('should return "2:00pm" given "2" ', function() {
      return new FpUtils.TimeString('2').sanitize().should.eql('2:00pm');
    });
    it('should return "3:00pm" given "3" ', function() {
      return new FpUtils.TimeString('3').sanitize().should.eql('3:00pm');
    });
    it('should return "4:00pm" given "4" ', function() {
      return new FpUtils.TimeString('4').sanitize().should.eql('4:00pm');
    });
    it('should return "5:00pm" given "5" ', function() {
      return new FpUtils.TimeString('5').sanitize().should.eql('5:00pm');
    });
    return it('should return "6:00pm" given "6" ', function() {
      return new FpUtils.TimeString('6').sanitize().should.eql('6:00pm');
    });
  });
  describe('7-12', function() {
    it('should return "7:00am" given "7" ', function() {
      return new FpUtils.TimeString('7').sanitize().should.eql('7:00am');
    });
    it('should return "8:00am" given "8" ', function() {
      return new FpUtils.TimeString('8').sanitize().should.eql('8:00am');
    });
    it('should return "9:00am" given "9" ', function() {
      return new FpUtils.TimeString('9').sanitize().should.eql('9:00am');
    });
    it('should return "10:00am" given "10" ', function() {
      return new FpUtils.TimeString('10').sanitize().should.eql('10:00am');
    });
    it('should return "11:00am" given "11" ', function() {
      return new FpUtils.TimeString('11').sanitize().should.eql('11:00am');
    });
    return it('should return "12:00pm" given "12" ', function() {
      return new FpUtils.TimeString('12').sanitize().should.eql('12:00pm');
    });
  });
  describe('100-699', function() {
    it('should return "1:00pm" given "100" ', function() {
      return new FpUtils.TimeString('100').sanitize().should.eql("1:00pm");
    });
    it('should return "1:05pm" given "105" ', function() {
      return new FpUtils.TimeString('105').sanitize().should.eql("1:05pm");
    });
    it('should return "3:30pm" given "330" ', function() {
      return new FpUtils.TimeString('330').sanitize().should.eql("3:30pm");
    });
    return it('should return "6:30pm" given "630" ', function() {
      return new FpUtils.TimeString('630').sanitize().should.eql("6:30pm");
    });
  });
  describe('700-1299', function() {
    it('should return "7:00am" given "700" ', function() {
      return new FpUtils.TimeString('700').sanitize().should.eql("7:00am");
    });
    it('should return "7:05am" given "705" ', function() {
      return new FpUtils.TimeString('705').sanitize().should.eql("7:05am");
    });
    it('should return "10:30am" given "1030" ', function() {
      return new FpUtils.TimeString('1030').sanitize().should.eql("10:30am");
    });
    return it('should return "12:30pm" given "12:30" ', function() {
      return new FpUtils.TimeString('12:30').sanitize().should.eql("12:30pm");
    });
  });
  return describe('1300-2400', function() {
    it('should return "1:00pm" given "1300" ', function() {
      return new FpUtils.TimeString('1300').sanitize().should.eql("1:00pm");
    });
    it('should return "1:30pm" given "1330" ', function() {
      return new FpUtils.TimeString('1330').sanitize().should.eql("1:30pm");
    });
    return it('should return "5:30pm" given "1730" ', function() {
      return new FpUtils.TimeString('1730').sanitize().should.eql("5:30pm");
    });
  });
});

describe('1a-12a', function() {
  it('should return "1:00am" given "1a" ', function() {
    return new FpUtils.TimeString('1a').sanitize().should.eql("1:00am");
  });
  return it('should return "1:30am" given "1:30a" ', function() {
    return new FpUtils.TimeString('1:30a').sanitize().should.eql("1:30am");
  });
});
