
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  console.log(JSON.stringify(formData));

  fetch("https://script.google.com/macros/s/AKfycby7aG9dubnyc7L0oiasHNyHM-NAqax0wfXrkLtOmhS0achZq9mskqqJW5IYxXYAwTaDsQ/exec", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((res) => {
   alert("Message Sent Sucessfully")
   
    form.reset();
  })
  .catch(error => {
    alert("Something went wrong. Please try again.");
  });
  
});

