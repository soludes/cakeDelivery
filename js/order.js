document.getElementById('orderForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Gets the email data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const cake = document.getElementById('cake').value;
  const notes = document.getElementById('notes').value;

  // Creates the email and open the window
  const subject = `New Cake Order from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ACake: ${cake}%0D%0ANotes: ${notes}`;
  const mailtoLink = `mailto:orders@cakedelivery.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
  alert("Thank you for your order, " + name + "! Your email app should open now to send the details.");
});
