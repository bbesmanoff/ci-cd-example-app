import * as MyMath from '../math';
import expect from 'expect.js';

describe('MyMath', () => {
  describe('.abs', () => {
    it('should return 0 for 0', () => {
      expect(MyMath.abs(0)).to.be(0);
    });
  });
});
