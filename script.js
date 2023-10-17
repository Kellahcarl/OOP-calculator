class Calculator {
  constructor() {
    this.display = document.getElementById("result");
    this.currentExpression = "";

    // Bind the event listener to the class instance
    this.addButtonClickListener = this.addButtonClickListener.bind(this);
  }

  addButtonClickListener(id, value) {
    const button = document.getElementById(id);
    button.addEventListener("click", () => {
      if (value === "AC") {
        this.clearDisplay();
      } else if (value === "=") {
        this.calculate();
      } else {
        this.appendValue(value);
      }
    });
  }

  appendValue(value) {
    this.currentExpression += value;
    this.display.value = this.currentExpression;
  }

  clearDisplay() {
    this.currentExpression = "";
    this.display.value = "";
  }

  calculate() {
    try {
      if (this.currentExpression !== "") {
        const result = eval(this.currentExpression);
        this.display.value = result;
        this.currentExpression = result;
      } else {
        alert("Please enter a value");
      }
    } catch (error) {
      this.display.value = "Error";
      this.currentExpression = "";
    }
  }

  init() {
    this.addButtonClickListener("add", "+");
    this.addButtonClickListener("subtract", "-");
    this.addButtonClickListener("multiply", "*");
    this.addButtonClickListener("divide", "/");
    this.addButtonClickListener("seven", "7");
    this.addButtonClickListener("eight", "8");
    this.addButtonClickListener("nine", "9");
    this.addButtonClickListener("four", "4");
    this.addButtonClickListener("five", "5");
    this.addButtonClickListener("six", "6");
    this.addButtonClickListener("one", "1");
    this.addButtonClickListener("two", "2");
    this.addButtonClickListener("three", "3");
    this.addButtonClickListener("zero", "0");
    this.addButtonClickListener("decimal", ".");
    this.addButtonClickListener("clear", "AC");
    this.addButtonClickListener("equal", "=");
  }
}

// Create an instance of the Calculator class
const calculator = new Calculator();

// Initialize the calculator with event listeners
calculator.init();
