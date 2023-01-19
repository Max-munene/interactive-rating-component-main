const rating = URLSearchParams(window.location.search).get("rating");
document.getElementById("display-rating").innerHTML = rating;
