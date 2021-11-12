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

  mars() {
    return Math.ceil((this.age / 1.88) * 100)/100;
  }

  jupiter() {
    return Math.ceil((this.age / 11.86) * 100)/100;
  }

  impendingDeath() {
    return `On Mercury you have roughly ${Math.ceil( (Math.ceil((this.life / .24) * 100)/100) - (Math.ceil((this.age / .24) * 100)/100))} year left to live. On Venus you have ${Math.ceil( (Math.ceil((this.life / .62) * 100)/100) - (Math.ceil((this.age / .62) * 100)/100))} years left to live. On Mars you have ${Math.ceil( (Math.ceil((this.life / 1.88) * 100)/100) - (Math.ceil((this.age / 1.88) * 100)/100))} years left to live. And on Jupiter you have ${Math.ceil( (Math.ceil((this.life / 11.86) * 100)/100) - (Math.ceil((this.age / 11.86) * 100)/100))} years left to live.`
  }
}