document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  fetch(this.action, { method: 'POST', body: new FormData(this) })
    .then(response => response.text())
    .then(result => alert(result));
});