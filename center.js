
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzns9id0YM4qL4ODc8SmvqmLytnLge6CESY7oW6YJYxRvdk1YFUVWOmWuPsU-K1WdPR/exec";

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

