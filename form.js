
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  console.log(JSON.stringify(formData));

  fetch("https://script.google.com/macros/s/AKfycbxTKTEZozNtpFL9c3lxY4oLVVMXpCDp_zsLyYbFNtJ7RchSMG4s8j1mSvzJ7iC-c8gkgw/exec", {
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

