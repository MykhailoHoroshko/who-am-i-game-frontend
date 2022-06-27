import convertTime from './convert-time';

describe('Convert time', () => {
  test('Returns correct time with 0 seconds', () => {
    expect(convertTime(0)).toBe('00:00');
  });

  test('Returns correct time with less than 10 seconds', () => {
    expect(convertTime(5)).toBe('00:05');
  });

  test('Returns correct time with more than 10 seconds', () => {
    expect(convertTime(43)).toBe('00:43');
  });

  test('Returns correct time with 60 seconds', () => {
    expect(convertTime(60)).toBe('01:00');
  });

  test('Returns correct time with more than 60 seconds', () => {
    expect(convertTime(61)).toBe('01:01');
  });
});
