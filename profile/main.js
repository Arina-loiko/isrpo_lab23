const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbiesInput = document.getElementById("hobbies");
const errorText = document.getElementById("error");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const profile = document.getElementById("profile");

document.getElementById("saveBtn").addEventListener("click", saveProfile);
document.getElementById("clearBtn").addEventListener("click", clearProfile);

function saveProfile() {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const city = cityInput.value.trim();
  const hobbies = hobbiesInput.value.trim();

  if (!name || !age || !city || !hobbies) {
    errorText.textContent = "Заполните все поля";
    return;
  }

  errorText.textContent = "";

  document.getElementById("displayName").textContent = name;
  document.getElementById("displayAge").textContent = age;
  document.getElementById("displayCity").textContent = city;
  document.getElementById("displayHobbies").textContent = hobbies;

  profile.classList.remove("hidden");
}

function clearProfile() {
  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  hobbiesInput.value = "";
  errorText.textContent = "";
  profile.classList.add("hidden");
}
