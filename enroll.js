document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enrollmentForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      occupation: form.occupation.value,
      qualification: form.qualification.value,
    };
    console.log(`Form Data:`, formData);
    

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxG0rNxEK2HGWhDOiXLYNJpcmWSIkDYzJae_V3jgFtH8pBj8S8mwFbhZY8TRfPZBrQkJQ/exec", // 👈 replace with your endpoint
        {
          method: "POST",
          mode: "no-cors", // 👈 no-cors mode for cross-origin requests
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Since no-cors mode returns opaque response, we'll assume success
      form.reset();
      successMessage.classList.remove("hidden");

      // Optional: Hide message after a few seconds
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  });
});
