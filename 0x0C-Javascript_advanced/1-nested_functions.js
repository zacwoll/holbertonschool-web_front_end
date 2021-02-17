let globalVariable = "Welcome";

function outer() {
  alert(globalVariable);
  let course = "Holberton";
  return function inner() {
    alert(globalVariable + " " + course);
    let exclamation = "!";
    return function inception() {
      alert(globalVariable + " " + course + exclamation);
    }();
  }();
};

outer();