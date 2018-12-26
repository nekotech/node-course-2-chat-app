const expect = require('expect');
const {isRealString} = require('./validation');

describe('Test isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString(1234)).toBeFalsy();
    expect(isRealString('')).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('       ')).toBeFalsy();
  });

  it('should allow strings with non-space characters', () => {
    expect(isRealString('  foo')).toBeTruthy();
    expect(isRealString('foo    ')).toBeTruthy();
    expect(isRealString('    foo    bar  ')).toBeTruthy();
    expect(isRealString('foobar')).toBeTruthy();
  });
});
