document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const coachPhotoInput = document.getElementById('coach_photo');
  const orgLogoInput = document.getElementById('org_logo');

  function toggleRegistrationNumber() {
    const show = document.getElementById('govt_registered_yes').checked;
    const field = document.getElementById('registration_number_field');
    field.classList.toggle('hidden', !show);
    document.getElementById('registration_number').required = show;
  }

  function toggleExamYears() {
    const show = document.getElementById('exam_conducted_yes').checked;
    const field = document.getElementById('exam_years_field');
    field.classList.toggle('hidden', !show);
    document.getElementById('exam_years').required = show;
  }

  function setupDragAndDrop(dropId, inputId, previewId) {
    const dropZone = document.getElementById(dropId);
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    const img = preview.querySelector('img');

    dropZone.addEventListener('dragover', e => {
      e.preventDefault();
      dropZone.classList.add('bg-purple-200');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('bg-purple-200');
    });

    dropZone.addEventListener('drop', e => {
      e.preventDefault();
      dropZone.classList.remove('bg-purple-200');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        input.files = files;
        const reader = new FileReader();
        reader.onload = () => {
          img.src = reader.result;
          preview.classList.remove('hidden');
        };
        reader.readAsDataURL(files[0]);
      }
    });

    dropZone.addEventListener('click', () => input.click());

    input.addEventListener('change', () => {
      if (input.files.length > 0) {
        const reader = new FileReader();
        reader.onload = () => {
          img.src = reader.result;
          preview.classList.remove('hidden');
        };
        reader.readAsDataURL(input.files[0]);
      }
    });
  }

  async function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]); // Remove "data:image/...;base64," prefix
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function collectFormData() {
    const formData = {
      org_name: document.getElementById('org_name').value,
      established_date: document.getElementById('established_date').value,
      org_address: document.getElementById('org_address').value,
      govt_registered: document.querySelector('input[name="govt_registered"]:checked').value,
      registration_number: document.getElementById('registration_number').value || '',
      coach_name: document.getElementById('coach_name').value,
      coach_contact: document.getElementById('coach_contact').value,
      coach_address: document.getElementById('coach_address').value,
      total_students: document.getElementById('total_students').value,
      exam_conducted: document.querySelector('input[name="exam_conducted"]:checked').value,
      exam_years: document.getElementById('exam_years').value || '',
      declaration: document.getElementById('declaration').checked
    };

    // Handle file uploads as base64
    if (coachPhotoInput.files.length > 0) {
      formData.coach_photo = await readFileAsBase64(coachPhotoInput.files[0]);
    }
    if (orgLogoInput.files.length > 0) {
      formData.org_logo = await readFileAsBase64(orgLogoInput.files[0]);
    }

    return formData;
  }

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    try {
      const formData = await collectFormData();
      console.log('Form Data:', formData);
      
      
      // Send POST request to Apps Script API
      const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        form.reset();
        document.getElementById('coach_photo_preview').classList.add('hidden');
        document.getElementById('org_logo_preview').classList.add('hidden');
        toggleRegistrationNumber();
        toggleExamYears();
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  });

  // Initialize drag-and-drop and conditional fields
  setupDragAndDrop('coach_photo_drop', 'coach_photo', 'coach_photo_preview');
  setupDragAndDrop('org_logo_drop', 'org_logo', 'org_logo_preview');
  document.getElementById('govt_registered_yes').addEventListener('change', toggleRegistrationNumber);
  document.getElementById('govt_registered_no').addEventListener('change', toggleRegistrationNumber);
  document.getElementById('exam_conducted_yes').addEventListener('change', toggleExamYears);
  document.getElementById('exam_conducted_no').addEventListener('change', toggleExamYears);
});