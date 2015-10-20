import * as MyMath from '../math';
import expect from 'expect.js';

describe('MyMath', () => {
  describe('.abs', () => {
    it('should return 0 for 0', () => {
      expect(MyMath.abs(0)).to.be(0);
    });
  });

  describe('.floor', () => {
    it('should return the correct value for positive numbers', () => {
      expect(MyMath.floor(2.5)).to.be(2);
    });
    it('should return the correct value for negative numbers', () => {
      expect(MyMath.floor(-2.5)).to.be(-3);
    });
  });
});
