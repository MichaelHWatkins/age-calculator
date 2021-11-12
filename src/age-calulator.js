export default class Calculator {
  constructor(age, life) {
    this.age = age;
    this.life = life;
  }

  mercury() {
    return Math.ceil((this.age / .24) * 100)/100;
  }

  venus() {
    return Math.ceil((this.age / .62) * 100)/100;
  }
}