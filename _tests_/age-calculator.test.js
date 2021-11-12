import Calculator from './../src/age-calulator';

describe('Calulator', () => {

  test('should correctly create a calculator object that returns a persons age and life expectancy', () => {
    const calulator = new Calculator(2, 95);
    expect(calulator.age).toEqual(2);
    expect(calulator.life).toEqual(95);
  });
});