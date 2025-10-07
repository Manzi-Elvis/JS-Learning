const calculator = {
  value: 0,
  add: function (num) {
    this.value += num;
    console.log("After adding:", this.value);
  },
  subtract: function (num) {
    this.value -= num;
    console.log("After subtracting:", this.value);
  }
};
calculator.add(10);
calculator.subtract(4);
calculator.add(7);