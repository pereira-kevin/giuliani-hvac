const form = document.getElementsByName("form");

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "kevinrpereira@gmail.com",
    Password: "password",
    To: "giulianihvac@gmail.com",
    From: document.getElementById("inputEmail4").value,
    Subject: "New Contact Form Inquiry",
    Body:
      "Name: " +
      document.getElementById("inputFirstName4") +
      " " +
      document.getElementById("inputLastName4") +
      "<br> Email: " +
      document.getElementById("inputEmail4") +
      "<br> Phone Number: " +
      document.getElementById("inputPhoneNumber4") +
      "<br> Address: " +
      document.getElementById("inputAddress") +
      "<br> Address 2: " +
      document.getElementById("inputAddress2") +
      "<br> City: " +
      document.getElementById("inputCity") +
      "<br> State: " +
      document.getElementById("inputState") +
      "<br> Zip Code: " +
      document.getElementById("inputZip"),
  }).then((message) => alert("Inquiry Sent Successfully"));
}

function onSubmit() {
  sendEmail();
  reset();
  return false;
}
