document.getElementById("survey-form").addEventListener("submit", function(e) {
  // e.preventDefault();
  const Name = {};
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailId = document.getElementById("emailId").value;
  let checkedRadioArr = document.querySelectorAll("input[type=radio]:checked");
  let favourateDrink = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  let favSport;
  Name.firstName = document.getElementById("f-name").value;
  Name.middleName = document.getElementById("m-name").value;
  Name.lastName = document.getElementById("l-name").value;
  if (!emailId || !emailId.match(mailformat)) {
    alert("Either email is empty or in wrong format!");
    return false;
  }
  if (checkedRadioArr.length == 0) {
    alert("Please select the radio button!");
    return false;
  } else {
    favSport = checkedRadioArr[0].value;
  }
  favourateDrink = Array.from(favourateDrink).map(drink => drink.value);
  if (favourateDrink.length == 0) {
    alert("Now what you like except this?");
    return false;
  }
  console.log({ emailId, Name, favSport, favourateDrink });
});
