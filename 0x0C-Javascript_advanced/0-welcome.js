function welcome(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return function displayFullName() {
    return fullName;
  }();
}