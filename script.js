document.addEventListener("readystatechange", (event) => {
   if (event.target.readyState === "complete") {
      console.log("complete");
      initApp();
   }
});

const initApp = () => {
   buttons(); // Corrected function name
};

const buttons = () => {
   const calculationArea = document.getElementById("calculationArea");
   const button = [
      7,
      8,
      9,
      "+",
      "-",
      4,
      5,
      6,
      "*",
      "/",
      1,
      2,
      3,
      ".",
      "%",
      0,
      "=",
      "AC",
      "DEL",
   ];

   for (let i = 0; i < button.length; i++) {
      const actualButton = document.createElement("button");
      actualButton.classList.add("buttonsArea");
      actualButton.textContent = button[i];
      calculationArea.appendChild(actualButton);
      actualButton.addEventListener("click", () => calculation(button[i]));
      if (button[i] === "AC") {
         actualButton.style.backgroundColor = "#c24b4b";
      }
      if (button[i] === "=") {
         actualButton.style.backgroundColor = "#41c462";
      }
      if (button[i] === "DEL") {
         actualButton.style.backgroundColor = "hsl(66, 70%, 74%)";
      }
      if (
         button[i] === "*" ||
         button[i] === "/" ||
         button[i] === "+" ||
         button[i] === "-" ||
         button[i] === "%" ||
         button[i] === "."
      ) {
         actualButton.style.backgroundColor = "hsla(44, 52%, 70%, 0.699)";
      }
      if (button[i] < 10) {
         actualButton.style.backgroundColor = "white";
      }
   }
};

const calculation = (value) => {
   const inputArea = document.getElementById("calculatorInput");
   console.log(value);

   switch (value) {
      case 7:
      case 8:
      case 9:
      case 4:
      case 5:
      case 6:
      case 1:
      case 2:
      case 3:
      case 0:
      case "+":
      case "-":
      case "*":
      case "/":
      case ".":
         inputArea.value += value;
         break;
      case "AC":
         inputArea.value = "";
         break;
      case "DEL":
         inputArea.value = inputArea.value.slice(0, -1);
         break;
      case "=":
         try {
            inputArea.value = eval(inputArea.value);
         } catch {
            inputArea.value = "Error";
         }
         break;
      case "%":
         try {
            inputArea.value = eval(inputArea.value) / 100;
         } catch {
            inputArea.value = "Error";
         }
         break;
      default:
         break;
   }
};

// const inputArea = document.getElementById("calculatorInput");

// function appendToDisplay(e) {
//    inputArea.value += e;
// }

// function allClear() {
//    inputArea.value = null;
// }

// function clearDisplay() {
//    inputArea.value = inputArea.value.slice(0, -1);
// }

// function calculate() {
//    try {
//     inputArea.value = eval(inputArea.value);
//    } catch (error) {
//     inputArea.value = "Error"
//    }
// }
