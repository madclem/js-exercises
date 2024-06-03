const countSubsequences = require('../exercises/countSubsequences');

describe('Counting String Subsequences', () => {
  it('should return 1 for `appyh appy birth day`', () => {
    expect(countSubsequences('happy birthday', 'appyh appy birth day')).toStrictEqual(1);
  });

  it('should return 0 for `happybirthday`', () => {
    expect(countSubsequences('happy birthday', 'happybirthday')).toStrictEqual(0);
  });

  it('should return 2048 for `hhaappyy bbiirrtthhddaayy`', () => {
    expect(countSubsequences('happy birthday', 'hhaappyy bbiirrtthhddaayy')).toStrictEqual(2048);
  });
});
