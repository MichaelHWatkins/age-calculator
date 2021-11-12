import Calculator from './../src/age-calulator';

describe('Calulator', () => {

  test('should correctly create a calculator object that returns a persons age and life expectancy', () => {
    const calulator = new Calculator(2, 95);
    expect(calulator.age).toEqual(2);
    expect(calulator.life).toEqual(95);
  });

  test('should correctly calculate the age of the user if they lived on Mercury', () => {
    const calulator = new Calculator(2, 95);
    expect(calulator.mercury()).toEqual(8.34);
  });
});