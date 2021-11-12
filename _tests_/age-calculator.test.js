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

  test('should correctly calculate the amount of time the user would have left on each planet assuming they make it to the expected life expectancy', () => {
    const calulator = new Calculator(2, 95);
    expect(calulator.impendingDeath()).toEqual("On Mercury you have roughly 388 year left to live. On Venus you have 150 years left to live. On Mars you have 50 years left to live. And on Jupiter you have 8 years left to live.");
  })
});