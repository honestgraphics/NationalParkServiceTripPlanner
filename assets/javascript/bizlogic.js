$( document ).ready(function() {
  console.log( "ready!" );


// TODO: add this event handler as a separate function
const captureProfileData = () => {
  // THIS EXISTS
  $("#submitGoFire").on("click", function(event) {
  event.preventDefault();
  // Grabbed values from text boxes
  name = $("#firstName").val().trim();
  email = $("#email").val().trim();
  password1 = $("#password1").val().trim();
  password2 = $("#password2").val().trim(); 
  // TODO: let's not do this because it requires separate validation  
  birthDate = $("#birthDate").val().trim();
  // THIS IS NEW
  const validPassword = validatePassword(password1, password2);
  if (validPassword) {
    databaseInterface.createNewUser(name, email, password, birthdate);
  } else {
    console.log('passwords do not match');
    // TODO: alert user to try again
  
}
  })
}

});