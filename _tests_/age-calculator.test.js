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

  test('should correctly calculate the age of the user if they lived on Venus', () => {
    const calulator = new Calculator(2, 95);
    expect(calulator.venus()).toEqual(3.23);
  });

  test('should correctly calculate the age of the user if they lived on Mars', () => {
    const calulator = new Calculator(2, 95);
    expect(calulator.mars()).toEqual(1.07);
  });

  test('should correctly calculate the age of the user if they lived on Jupiter', () => {
    const calulator = new Calculator(2, 95);
    expect(calulator.jupiter()).toEqual(.17);
  });
});