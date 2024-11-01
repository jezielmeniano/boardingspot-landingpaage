function submitPreferences() {
 
  
  // Close the modal
  const modalElement = document.getElementById('preferenceModal');
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
}

function resetPreferences() {
  // Reset the form fields
  document.getElementById("preferencesform").reset();
  
  // Close the modal
  const modalElement = document.getElementById('preferenceModal');
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
}

 // image
 function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function(){
      const preview = document.getElementById('profilePreview');
      preview.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}
 //Distance
 function toggleInputField() {
  const unitSelect = document.getElementById("unitSelect");
  const distanceInputField = document.getElementById("distanceInputField");

  if (unitSelect.value) {
      distanceInputField.style.display = "flex"; // Show the input field
  } else {
      distanceInputField.style.display = "none"; // Hide the input field
  }
}
//redirect page
function viewBH(){
  window.location.href = "bhdetails.html";
}
function gotoOwner(){
  window.location.href = "ownerpage.html";
}
function gotoUser(){
  window.location.href = "userpage.html";
}

