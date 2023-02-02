import githubApi from "./api.js";

//const BASE_URL = "https://api.github.com/users/aogles";
//const avatar = "aogles";

function generateHTML(githubApi) {
  console.log(githubApi);
  const source = document.querySelector("#github-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(githubApi);
  document
    .querySelector(".profile-section")
    .insertAdjacentHTML("afterbegin", html);
}

function generateOrgsHTML(githubApi) {
  console.log(githubApi);
  const source = document.querySelector("#github-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(githubApi);
  document
    .querySelector("#github-template")
    .insertAdjacentHTML("afterbegin", html);
}

function generateRepoHTML(githubApi) {
  console.log(githubApi);
  const source = document.querySelector("#repo-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(githubApi);
  document
    .querySelector(".repo-section")
    .insertAdjacentHTML("afterbegin", html);
}

fetch(`https://api.github.com/users/aogles`)
  .then(function (response) {
    return response.json();
  })
  .then(function (githubApi) {
    generateHTML(githubApi);
    //console.log(githubApi);
  });

fetch(`https://api.github.com/users/aogles/orgs`)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (githubApi) {
    generateOrgsHTML(githubApi);
    //console.log(githubApi);
  });

fetch(`https://api.github.com/users/aogles/repos`)
  .then(function (response) {
    //console.log(response);
    return response.json();
  })
  .then(function (githubApi) {
    generateRepoHTML(githubApi);
    //console.log(githubApi);
  });
