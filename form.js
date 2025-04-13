
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  console.log(JSON.stringify(formData));

  fetch("https://script.google.com/macros/s/AKfycbzICB1REw8whxHQRvJgD21ihxkdhLK-NY-Cu-7RcDg8BYJEA0uDQ0bhZyJkW8om-F45Ww/exec", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("Success:", data);
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  });
});

