
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwvo1w7wc3cO23LjEvqrCR5WlyO5ZWcrTZL3LxbZB4rC33NKks9Itr_PxIx1BlPO0Kt/exec";

  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent default form submission

    const form = e.target;
    const formData = new FormData(form);
    console.log(formData); // log form data for debugging
     // gathers all form data, including files

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset(); // optional: reset form after submission
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      alert("Error occurred while submitting form.");
    }
  });

