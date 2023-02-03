import githubApi from "./api.js";

//const BASE_URL = "https://api.github.com/users/aogles";
//const avatar = "aogles";

function generateProfileHTML(data) {
  console.log(data);
  const source = document.querySelector("#profile-template").innerHTML;
  const template = Handlebars.compile(source);
  const html = template(data);
  document
    .querySelector(".profile-section")
    .insertAdjacentHTML("afterbegin", html);
}

function generateOrgsHTML(data) {
  console.log(data);
  // const source = document.querySelector("#org-template").innerHTML;
  // const template = Handlebars.compile(source);

  // const html = template(data);
  // document
  //   .querySelector("#github-template")
  //   .insertAdjacentHTML("afterbegin", html);
}

function generateRepoHTML(data) {
  console.log(data);
  const repoData = { repos: data };
  console.log(repoData);
  const source = document.querySelector("#repo-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(repoData);
  console.log({ html });
  document
    .querySelector(".repo-section")
    .insertAdjacentHTML("afterbegin", html);
}

fetch(`https://api.github.com/users/aogles`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateProfileHTML(data);
    //console.log(githubApi);
  });

fetch(`https://api.github.com/users/aogles/orgs`)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    generateOrgsHTML(data);
    //console.log(githubApi);
  });

fetch(`https://api.github.com/users/aogles/repos`)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    generateRepoHTML(data);
    //console.log(githubApi);
  });
