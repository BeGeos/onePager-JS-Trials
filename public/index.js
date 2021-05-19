const content = document.querySelectorAll(".content div");

const userInfo = document.getElementById("user-info");
const otherInfo = document.getElementById("other-info");
const outdoorInfo = document.getElementById("outdoor-info");

// Navbar action
const navLinks = document.querySelectorAll(".navbar button");

function loadContent(btnData) {
  content.forEach((div) => {
    div.classList.remove("active");
  });

  let loadDiv = document.getElementById(btnData);
  loadDiv.classList.add("active");
}

function testLoadContent(btnData) {
  console.log(btnData);
}

// AJAX request
async function contentRequest(data) {
  let contentDiv = document.querySelector(".loaded-content");
  let checkId = contentDiv.id || "";

  if (checkId == data) {
    return;
  }

  let url = `http://localhost:3000/api/${data}`;
  let user = await fetch(url, {
    method: "GET",
  });

  let response = await user.json();

  contentDiv.innerHTML = "";

  let keys = Object.keys(response.user);

  keys.forEach((key) => {
    var userTag = document.createElement("h2");
    var userInfo = document.createElement("p");

    userTag.innerHTML = key + ":";
    userInfo.innerHTML = response.user[key];

    contentDiv.appendChild(userTag);
    contentDiv.appendChild(userInfo);
  });

  contentDiv.setAttribute("id", data);
}

navLinks.forEach((button) => {
  button.addEventListener("click", (e) => {
    let data = e.target.getAttribute("data-target");
    // loadContent(data);
    contentRequest(data);
  });
});
