let selectedRating = 0;
const badges = document.querySelectorAll(".badge");

function submitForm() {
  document.getElementById("selected-rating").value = selectedRating;
  document.forms[0].submit();
}

for (let i = 0; i < badges.length; i++) {
  badges[i].addEventListener("click", function () {
    selectedRating = i + 1;
    for (let j = 0; j < badges.length; j++) {
      badges[j].classList.remove("selected");
    }
    for (let j = 0; j <= i; j++) {
      badges[j].classList.add("selected");
    }
  });
}
