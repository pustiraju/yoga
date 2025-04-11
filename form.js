const form = document.getElementById("myForm");
// const successDiv = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };
  console.log(JSON.stringify(formData));
  

  fetch(
    "https://script.google.com/macros/s/AKfycbzY6m9zF6-LwiKJRdm2ZglfKowUUDqLIG2cc-FQPz30r2nT-7JUTtkNre1rDpeDRiuKxg/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "cors",
    }
  )
  
    .then((res) => res.json())
    .then((data) => {
     
        alert("Message sent successfully!");
        // form.reset();
        // successDiv.style.display = "block";
        // successDiv.style.color = "green";
        // successDiv.textContent =
        //   "Thank you! Your message has been sent successfully.";
     
    });
    // .catch((err) => {
    //   successDiv.style.display = "block";
    //   successDiv.style.color = "red";
    //   successDiv.textContent = "Something went wrong. Please try again.";
    // });
});
