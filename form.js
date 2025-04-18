
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  console.log(JSON.stringify(formData));

  fetch("https://script.google.com/macros/s/AKfycbzUPeSBAZ9rbZG60hqPN0nrQiNJ-IatDZaXJVYtcOh7lin-7iou6Emq5U_4soLWqwalBw/exec", {
    method: "POST",
    mode: "no-cors", // bypasses CORS, but disables response handling
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
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  });
  
});

