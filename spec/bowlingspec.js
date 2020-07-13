'use strict';
describe('Frame', function() {
  var frame;
  beforeEach(function(){
     frame = new Frame();
  });
  describe('roll1', function(){
  it('hits a pin and returns from 1 to 10', function(){
    frame.roll1();
    expect(frame.playerChoice).toBeLessThan(10);
  });
  // it("should not be less than 0", function(){
  //
  //
  //
  //   }
  //   expect(function () { frame.roll1();}).toThrowError('shouldn't be less than 0');

    // describe('roll2', function(){
    // it('hits a pin and returns from 1 to 10', function(){
    //   frame.roll1();
    //   frame.roll2();
    //   expect(frame.playerChoice).toBeLessThan(20);

  });
  });
  });
