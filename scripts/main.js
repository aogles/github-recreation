import githubApi from "./api.js";

//const BASE_URL = "https://api.github.com/users/aogles";
//const avatar = "aogles";

function generateHTML(githubApi) {
  console.log(githubApi);
  const source = document.querySelector("#github-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(githubApi);
  document.querySelector("github-list").insertAdjacentHTML("afterbegin", html);
}

fetch("https://api.github.com/users/aogles")
  //"url here"
  .then(function (response) {
    return response.json();
  })
  .then(function (githubApi) {
    generateHTML(githubApi);
    // console.log(data);
  });
